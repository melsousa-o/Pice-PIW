import './Login.css';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function LoginBox() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      // 1. Autenticação
      const { user } = await signInWithEmailAndPassword(auth, email, senha);
      console.log('Usuário autenticado:', user.uid);

      // 2. Busca dados básicos na coleção 'usuarios'
      const userDoc = await getDoc(doc(db, "usuarios", user.uid));
      
      if (!userDoc.exists()) {
        throw new Error('Usuário não cadastrado no sistema.');
      }

      const userData = userDoc.data();
      console.log('Documento do usuário:', {
        exists: userDoc.exists(),
        data: userData,
        professorId: userData.professorId
      });

      // 3. Se for professor, busca dados complementares
      if (userData.tipo === "professor") {
        const professorId = userData.professorId || user.uid;
        const professorDoc = await getDoc(doc(db, "professores", professorId));
        
        if (!professorDoc.exists()) {
          console.warn('Dados complementares do professor não encontrados');
        } else {
          // Combina todos os dados do professor
          Object.assign(userData, professorDoc.data());
          console.log('Dados completos do professor:', userData);
        }
      }

      // 4. Armazena dados no localStorage
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

      // 5. Redireciona conforme o tipo de usuário
      const rotas = {
        coordenacao: '/coord',
        professor: '/professor',
        responsavel: '/responsavel',
      };

      const rotaDestino = rotas[userData.tipo] ?? '/';
      console.log('Redirecionando para:', rotaDestino);
      navigate(rotaDestino);
      
    } catch (error) {
      console.error('Erro completo no login:', {
        code: error.code,
        message: error.message,
        stack: error.stack
      });
      
      const mensagensErro = {
        'auth/invalid-email': 'E‑mail inválido.',
        'auth/user-not-found': 'Usuário não encontrado.',
        'auth/wrong-password': 'Senha incorreta.',
        'auth/too-many-requests': 'Muitas tentativas. Tente novamente mais tarde.',
        'auth/invalid-credential': 'Credenciais inválidas. Verifique e-mail e senha.',
      };

      setErro(mensagensErro[error.code] || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
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
        <Link to="/esquecisenha">Esqueci minha senha</Link><br />
        <Link to="/cadastrocoord">Primeiro acesso à coordenação</Link>
      </div>
    </form>
  );
}

export default LoginBox;