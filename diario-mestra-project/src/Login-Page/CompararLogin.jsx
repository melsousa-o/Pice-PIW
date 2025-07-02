import { useState, useEffect } from 'react';
import './loginBox.css';
import HeaderCoord from '../Coodernação-TelaInicial/HeaderCoordenação';
import { useNavigate } from 'react-router-dom';

function CompararLogin({ email, senha }) {
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const navigate = useNavigate();

  const isMatch = email === confirmEmail && senha === confirmSenha;

  return (
    <>
      <HeaderCoord />
      <label className='info-confirm'>
        <a>Confirmar E‑mail</a>
        <input
          type='email'
          value={confirmEmail}
          onChange={(e) => setConfirmEmail(e.target.value)}
          required
        />
        <a>Confirmar Senha</a>
        <input
          type='password'
          value={confirmSenha}
          onChange={(e) => setConfirmSenha(e.target.value)}
          required
        />
        <button
          className='confirm-btn'
          onClick={() => {
            alert('Login confirmado!');
            navigate('/CoordTelaInicial');
            // Redirecionamento ou próxima ação aqui
          }}
          disabled={!isMatch}
        >
          Confirmar
        </button>
        {!isMatch && (confirmEmail || confirmSenha) && (
          <p style={{ color: 'red' }}>E‑mail ou senha não conferem</p>
        )}
      </label>
    </>
  );
}

export default CompararLogin;
