import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Certifique-se de que 'auth' está exportado corretamente

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário Logado:", userCredential.user);
        navigate('/coord'); // redireciona para a tela da coordenação
      })
      .catch((error) => {
        // Tradução de erros do Firebase Auth
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
      });
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
