import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    console.log('Login:', email, senha);
    navigate('/CompararLogin', { state: { email, senha } });
  }

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
