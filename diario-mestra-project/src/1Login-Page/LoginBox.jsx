import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase'; // Importa auth e db
import { doc, getDoc } from 'firebase/firestore';

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
      console.log("Usuário Logado:", user);

      // Buscar o documento do usuário no Firestore para pegar o tipo
      const docRef = doc(db, 'usuarios', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const userData = docSnap.data();
        const tipo = userData.tipo;

        if (tipo === 'coordenador') {
          navigate('/coord');
        } else if (tipo === 'professor') {
          navigate('/professor');
        } else if (tipo === 'responsavel') {
          navigate('/responsavel');
        } else {
          alert('Tipo de usuário inválido.');
        }
      } else {
        alert('Usuário não encontrado no banco de dados.');
      }
    } catch (error) {
      let mensagem = '';
      switch (error.code) {
        case 'auth/invalid-email':
          mensagem = 'E-mail inválido.';
          break;
        case 'auth/user-not-found':
          mensagem = 'Usuário não encontrado.';
          break;
        case 'auth/wrong-password':
          mensagem = 'Senha incorreta.';
          break;
        case 'auth/too-many-requests':
          mensagem = 'Muitas tentativas. Tente novamente mais tarde.';
          break;
        default:
          mensagem = 'Erro ao fazer login. Tente novamente.';
      }

      console.error("Erro no login:", error.code, error.message);
      alert(mensagem);
    }
  };

  return (
    <form className="login-box" onSubmit={handleLogin}>
      <label>
        E‑mail
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>

      <label>
        Senha
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </label>

      <button type="submit">Entrar</button>

      <div>
        <p><Link to="/esquecisenha">Esqueci minha senha</Link></p>
        <p><Link to="/cadastrocoord">Primeiro acesso à coordenação</Link></p>
      </div>
    </form>
  );
}

export default LoginBox;