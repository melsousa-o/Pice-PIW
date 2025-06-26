import { useState } from 'react';

function CadastroBox() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmar, setConfirmar] = useState('');

  function handleCadastro(e) {
    e.preventDefault();

    if (senha.length < 5) {
      alert('A senha precisa ter no mínimo 5 caracteres');
      return;
    }

    if (senha !== confirmar) {
      alert('As senhas devem ser iguais');
      return;
    }

    console.log('Cadastro:', { nome, email, senha });
  }

  return (
    <form className="login-box" onSubmit={handleCadastro}>
      <label>
        Nome completo
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </label>

      <label>
        E-mail
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

      <label>
        Confirmar senha
        <input
          type="password"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
      </label>

      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroBox;
