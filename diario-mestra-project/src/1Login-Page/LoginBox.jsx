import './Login.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword, updatePassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [mostrarPopupRedefinir, setMostrarPopupRedefinir] = useState(false);
  const [emailRedefinir, setEmailRedefinir] = useState('');
  const [senhaAtual, setSenhaAtual] = useState('');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [erroRedefinir, setErroRedefinir] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setLoading(true);
    setErro('');

    if (!email || !senha) {
      setErro('Preencha e‑mail e senha.');
      setLoading(false);
      return;
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, senha);
      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      
      if (!userDoc.exists()) throw new Error('Usuário não cadastrado no sistema.');

      const userData = userDoc.data();
      if (!userData.tipo) throw new Error('Tipo de usuário não definido.');

      if (userData.tipo === "professor") {
        if (!userData.professorId) throw new Error('ID do professor não encontrado.');
        const professorDoc = await getDoc(doc(db, "professores", userData.professorId));
        if (professorDoc.exists()) Object.assign(userData, professorDoc.data());
      }

      localStorage.setItem('userData', JSON.stringify({
        uid: user.uid,
        nome: userData.nome,
        tipo: userData.tipo,
        ...(userData.tipo === 'professor' && {
          materias: userData.materias || [],
          turmas: userData.turmas || [],
          professorId: userData.professorId
        })
      }));

      navigate({
        coordenacao: '/coord',
        professor: '/professor',
        responsavel: '/responsavel',
      }[userData.tipo] ?? '/');
      
    } catch (error) {
      setErro({
        'auth/invalid-email': 'E‑mail inválido.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
        'auth/invalid-credential': 'Credenciais inválidas. Verifique e-mail e senha.',
      }[error.code] || error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleRedefinirSenha() {
    setErroRedefinir('');
    
    if (!emailRedefinir || !senhaAtual || !novaSenha || !confirmarSenha) {
      setErroRedefinir('Preencha todos os campos.');
      return;
    }

    if (novaSenha.length < 8) {
      setErroRedefinir('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    if (novaSenha !== confirmarSenha) {
      setErroRedefinir('As senhas não coincidem.');
      return;
    }

    try {
      const { user } = await signInWithEmailAndPassword(auth, emailRedefinir, senhaAtual);
      await updatePassword(user, novaSenha);
      
      setErroRedefinir('✔️ Senha alterada com sucesso!');
      setTimeout(() => {
        setMostrarPopupRedefinir(false);
        setErroRedefinir('');
      }, 2000);
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      setErroRedefinir('❌ Senha atual incorreta');
    }
  }

  return (
    <>
      <form className="login-box" onSubmit={handleLogin}>
        <label>
          E‑mail
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
        </label>

        <label>
          Senha
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            disabled={loading}
            required
          />
        </label>

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Entrando…' : 'Entrar'}
        </button>

        <div className="links-ajuda">
          <button 
            type="button" 
            className="link-recuperacao" 
            onClick={() => {
              setMostrarPopupRedefinir(true);
              setEmailRedefinir(email);
            }}
          >
            Esqueci minha senha
          </button>
          <Link to="/cadastrocoord">Primeiro acesso à coordenação</Link>
        </div>
      </form>

      {mostrarPopupRedefinir && (
        <div className="popup-overlay">
          <div className="popup">
            <h3>Redefinir Senha</h3>
            
            <label>
              E-mail cadastrado
              <input
                type="email"
                value={emailRedefinir}
                onChange={(e) => setEmailRedefinir(e.target.value)}
                disabled={loading}
              />
            </label>

            <label>
              Senha atual
              <input
                type="password"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
                placeholder="Digite sua senha atual"
              />
            </label>

            <label>
              Nova senha (mínimo 8 caracteres)
              <input
                type="password"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
            </label>

            <label>
              Confirmar nova senha
              <input
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </label>

            {erroRedefinir && (
              <p className={erroRedefinir.includes('✔️') ? 'sucesso-popup' : 'erro-popup'}>
                {erroRedefinir}
              </p>
            )}

            <div className="botoes-popup">
              <button
                type="button"
                className="botao-popup botao-popup-cancelar"
                onClick={() => {
                  setMostrarPopupRedefinir(false);
                  setErroRedefinir('');
                }}
              >
                Cancelar
              </button>
              <button
                type="button"
                className="botao-popup botao-popup-confirmar"
                onClick={handleRedefinirSenha}
                disabled={loading}
              >
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default LoginBox;