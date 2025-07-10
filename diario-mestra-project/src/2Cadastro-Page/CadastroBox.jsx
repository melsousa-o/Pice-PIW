import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // para redirecionar
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage, db } from '../firebase';
import { setDoc, doc } from 'firebase/firestore';

function CadastroBox() {
  const navigate = useNavigate(); // hook de navegação
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmar: '',
    foto: null,
  });

  const [previewFoto, setPreviewFoto] = useState(null);
  const [tipo, setTipo] = useState('');
  const [carregando, setCarregando] = useState(false); // para mostrar carregamento

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === 'foto') {
      const file = files[0];
      setFormData((prev) => ({ ...prev, foto: file }));
      setPreviewFoto(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleCadastro(e) {
    e.preventDefault();

    if (formData.senha.length < 6) {
      alert('A senha precisa ter no mínimo 6 caracteres.');
      return;
    }

    if (formData.senha !== formData.confirmar) {
      alert('As senhas devem ser iguais.');
      return;
    }

    if (!tipo) {
      alert('Por favor, selecione o tipo de usuário.');
      return;
    }

    try {
      setCarregando(true); // inicia carregamento

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.senha
      );

      let fotoURL = null;

      if (formData.foto) {
        const storageRef = ref(storage, `fotosPerfis/${userCredential.user.uid}`);
        await uploadBytes(storageRef, formData.foto);
        fotoURL = await getDownloadURL(storageRef);
      }

      await updateProfile(userCredential.user, {
        displayName: formData.nome,
        photoURL: fotoURL,
      });

      await setDoc(doc(db, 'usuarios', userCredential.user.uid), {
        uid: userCredential.user.uid,
        nome: formData.nome,
        email: formData.email,
        tipo: tipo,
        fotoURL: fotoURL,
      });

      alert('Usuário cadastrado com sucesso!');

      // Redirecionar com base no tipo
      if (tipo === 'coordenador') {
        navigate('/coord-inicio');
      } else if (tipo === 'professor') {
        navigate('/professor-inicio');
      } else if (tipo === 'responsavel') {
        navigate('/responsavel-inicio');
      }

      // Limpa os campos
      setFormData({
        nome: '',
        email: '',
        senha: '',
        confirmar: '',
        foto: null,
      });
      setPreviewFoto(null);
      setTipo('');
    } catch (error) {
      console.error('Erro no cadastro:', error.code, error.message);
      alert('Erro: ' + error.message);
    } finally {
      setCarregando(false); // encerra carregamento
    }
  }

  return (
    <form className="login-box" onSubmit={handleCadastro}>
      <label>
        Nome completo
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        E-mail
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Senha
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Confirmar senha
        <input
          type="password"
          name="confirmar"
          value={formData.confirmar}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Foto de perfil
        <input
          type="file"
          name="foto"
          accept="image/*"
          onChange={handleChange}
        />
      </label>

      {previewFoto && (
        <img
          src={previewFoto}
          alt="Pré-visualização"
          style={{
            width: '100px',
            height: '100px',
            objectFit: 'cover',
            borderRadius: '8px',
            marginTop: '8px',
          }}
        />
      )}

      <label>
        Tipo de usuário:
        <select value={tipo} onChange={(e) => setTipo(e.target.value)} required>
          <option value="">Selecione</option>
          <option value="coordenador">Coordenação</option>
          <option value="professor">Professor(a)</option>
          <option value="responsavel">Responsável</option>
        </select>
      </label>

      <button type="submit" disabled={carregando}>
        {carregando ? 'Cadastrando...' : 'Cadastrar'}
      </button>
    </form>
  );
}

export default CadastroBox;