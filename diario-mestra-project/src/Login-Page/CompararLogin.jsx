import { useState } from 'react';
import HeaderCoord from '../Coodernação-TelaInicial/HeaderCoordenação';
import { useNavigate, useLocation } from 'react-router-dom';
import './Login.css';

function CompararLogin() {
  const [confirmEmail, setConfirmEmail] = useState('');
  const [confirmSenha, setConfirmSenha] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const email = location.state?.email || '';
  const senha = location.state?.senha || '';

  const isMatch = email === confirmEmail && senha === confirmSenha;

  return (
    <>
    
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
            if (isMatch) {
              alert('Login confirmado!');
              navigate('/Coord');
            }
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
