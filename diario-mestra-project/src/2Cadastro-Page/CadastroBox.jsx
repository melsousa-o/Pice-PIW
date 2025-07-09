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

  const [previewFoto, setPreviewFoto] = useState(null); //eatado p preview da foto antes do upload

  function handleChange(e) {
    const { name, value, files } = e.target;

    if (name === 'foto') { //se for uma imagem
      const file = files[0]; //files[0] pega o primeiro arquivo selecionado
      setFormData((prev) => ({ ...prev, foto: file })); //salva
      setPreviewFoto(URL.createObjectURL(file)); //cria uma url temporaria p mostrar a previa
    } else { //se for outro campo
      setFormData((prev) => ({ ...prev, [name]: value })); //atualiza o campo correspondente (nome, email senha...)
    }
  }

  async function handleCadastro(e) {
    e.preventDefault(); //impede recarregar a pag quando envia o formulario

    if (formData.senha.length < 5) { //funcao de validar senha
      alert('A senha precisa ter no mínimo 6 caracteres.'); //6 pq começa com 0
      return;
    }

    if (formData.senha !== formData.confirmar) { //compara as senhas
      alert('As senhas devem ser iguais.');
      return;
    }

    try { //criação do usuario com email e senha
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.senha
      );

      let fotoURL = null;

      if (formData.foto) {
        const storageRef = ref(storage, `fotosPerfis/${userCredential.user.uid}`); //cria uma referencia no storage com o uid do usuario
        await uploadBytes(storageRef, formData.foto);
        fotoURL = await getDownloadURL(storageRef); //pega a url da foto depois do upload
      }

      await updateProfile(userCredential.user, { //add o nome a url da foto ao perfil do usuario no banco de dados
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
        <input
        type="text"
        name="nome"
        value={formData.nome} //liga o valor do input ao estado
        onChange={handleChange} //atualiza o valor ao digitar com handleChange
        required //obriga o preenchimento do campo
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
            marginTop: '8px'
          }}
        />
      )}

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroBox;
