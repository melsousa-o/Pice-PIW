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

      if (allowedProfiles) {
        try {
          const userDoc = await getDoc(doc(db, "usuarios", user.uid));
          
          if (!userDoc.exists() || !allowedProfiles.includes(userDoc.data().tipo)) {
            navigate('/acesso-negado');
            return;
          }
        } catch (err) {
          console.error("Erro ao verificar tipo de usuário:", err);
          navigate('/erro');
          return;
        }
      }

      if (!cancelado) setCarregando(false);
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