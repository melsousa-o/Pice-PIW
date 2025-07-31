import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function ProtectedRoute({ children, allowedProfiles }) {
  const navigate = useNavigate();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let cancelado = false;

    const unsubscribe = auth.onIdTokenChanged(async (user) => {
      if (!user) {
        navigate('/login');
        return;
      }

      try {
        const userDoc = await getDoc(doc(db, "usuarios", user.uid));
        
        if (!userDoc.exists()) {
          console.error('Documento do usuário não encontrado');
          navigate('/login');
          return;
        }

        const userData = userDoc.data();
        
        // Verificação adicional para professores
        if (userData.tipo === 'professor' && !userData.professorId) {
          console.error('Professor sem ID de professor associado');
          navigate('/login');
          return;
        }

        if (allowedProfiles && !allowedProfiles.includes(userData.tipo)) {
          console.error('Acesso negado. Tipo de usuário:', userData.tipo);
          navigate('/acesso-negado');
          return;
        }

        if (!cancelado) setCarregando(false);
      } catch (err) {
        console.error("Erro ao verificar tipo de usuário:", err);
        navigate('/erro');
      }
    });

    return () => {
      cancelado = true;
      unsubscribe();
    };
  }, [navigate, allowedProfiles]);

  if (carregando) return <p>Verificando acesso...</p>;
  return children;
}

export default ProtectedRoute;