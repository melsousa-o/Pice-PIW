import '../1Login-Page/Login.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref as storageRef, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from 'firebase/firestore';
import { auth, storage, db } from "../firebase";

function CadastroBox() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
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
    } else if (name === 'cpf') {
      const onlyNums = value.replace(/\D/g, '');
      setFormData((prev) => ({ ...prev, cpf: onlyNums }));
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

    if (!/^\d{11}$/.test(formData.cpf)) {
      alert('O CPF deve conter exatamente 11 números.');
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
        const refImagem = storageRef(storage, `fotosPerfis/${userCredential.user.uid}`);
        await uploadBytes(refImagem, formData.foto);
        fotoURL = await getDownloadURL(refImagem);
      }

      await updateProfile(userCredential.user, {
        displayName: formData.nome,
        photoURL: fotoURL,
      });

      await setDoc(doc(db, "usuarios", userCredential.user.uid), {
        nome: formData.nome,
        email: formData.email,
        cpf: formData.cpf,
        tipo: 'coordenacao',
        fotoURL: fotoURL || null,
        criadoEm: new Date().toISOString(),
        permissoes: {
          acessoCoordenacao: true,
          acessoProfessor: false,
          acessoResponsavel: false
        }
      });

      alert('Usuário cadastrado com sucesso!');
      setFormData({
        nome: '',
        email: '',
        senha: '',
        cpf: '',
        confirmar: '',
        foto: null,
      });
      setPreviewFoto(null);

    } catch (error) {
      console.error('Erro no cadastro:', error);
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
        CPF (somente números)
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          maxLength={11}
          required
        />
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

      <p style={{ fontSize: '0.9rem', color: 'gray', marginTop: '10px' }}>
        Apenas membros da <strong>coordenação</strong> podem se cadastrar por aqui.
      </p>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroBox;