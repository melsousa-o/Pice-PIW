import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, storage } from '../firebase';

function CadastroBox() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmar: '',
    foto: null,
  });

  const [previewFoto, setPreviewFoto] = useState(null);

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

    if (formData.senha.length < 5) {
      alert('A senha precisa ter no mínimo 5 caracteres');
      return;
    }

    if (formData.senha !== formData.confirmar) {
      alert('As senhas devem ser iguais');
      return;
    }

    try {
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

      alert('Usuário cadastrado com sucesso!');
      console.log('Usuário:', userCredential.user);

      // Reset do formulário
      setFormData({
        nome: '',
        email: '',
        senha: '',
        confirmar: '',
        foto: null,
      });
      setPreviewFoto(null);

    } catch (error) {
      console.error('Erro no cadastro:', error.code, error.message);
      alert('Erro: ' + error.message);
    }
  }

  return (
    <form className="login-box" onSubmit={handleCadastro}>
      <label>
        Nome completo
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
      </label>

      <label>
        E-mail
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>

      <label>
        Senha
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
      </label>

      <label>
        Confirmar senha
        <input type="password" name="confirmar" value={formData.confirmar} onChange={handleChange} required />
      </label>

      <label>
        Foto de perfil
        <input type="file" name="foto" accept="image/*" onChange={handleChange} />
      </label>

      {previewFoto && (
        <img
          src={previewFoto}
          alt="Pré-visualização"
          style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px', marginTop: '8px' }}
        />
      )}

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroBox;
