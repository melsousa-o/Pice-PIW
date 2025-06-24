import { useState } from 'react';

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin(e) {
    e.preventDefault();         
    console.log('Login:', email, senha);
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
      <a href="#">Primeiro acesso (coordenação)</a>
    </form>
  );
}

export default LoginBox;
