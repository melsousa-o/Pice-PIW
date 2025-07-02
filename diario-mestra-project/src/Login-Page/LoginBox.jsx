import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();         
    console.log('Login:', email, senha);
    // Navega para a próxima página levando os dados de email e senha
    navigate('/CompararLogin', { state: { email, senha } });
  }

  function irParaCadastro() {
    navigate('/cadastro');
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

      <a href="#">Esqueci minha senha</a>
      <p onClick={irParaCadastro} style={{ cursor: 'pointer', color: 'yellow', marginTop: '10px' }}>
        Primeiro acesso à coordenação
      </p>
    </form>
  );
}

export default LoginBox;
