import HeaderCoord from "./1Componentes/HeaderCoordenacao";
import SidebarMenu from "./1Componentes/SidebarMenu";
import Footer from "./1Componentes/Footer";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';

function CoordTelaInicial() {
  const [data, setData] = useState(new Date());
  const [nomeUsuario, setNomeUsuario] = useState('');

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem('userData'));
    if (savedData?.nome) {
      setNomeUsuario(savedData.nome.split(' ')[0]);
      return;
    }

    const user = auth.currentUser;
    if (user) {
      getDoc(doc(db, "usuarios", user.uid)).then((doc) => {
        if (doc.exists()) {
          setNomeUsuario(doc.data().nome.split(' ')[0]);
        }
      }).catch(console.error);
    }
  }, []);

  return (
    <>
      <HeaderCoord />
      <Footer/>

      <div className="main-container">
        <SidebarMenu />

        <main className="content">
          <h2>Bem-Vinda {nomeUsuario || 'Usuário'}</h2>

          <div className="cardsResumo">
            <div className="cardResumo">
              Alunos Matriculados <br />
              <strong>77</strong>
            </div>
            <div className="cardResumo">
              Turmas Cadastradas <br />
              <strong>13</strong>
            </div>
            <div className="cardResumo">
              Professores Cadastrados <br />
              <strong>12</strong>
            </div>
          </div>

          <section>
            <h3>Calendário</h3>
            <Calendar onChange={setData} value={data} />
          </section>
        </main>
      </div>
    </>
  );
}

export default CoordTelaInicial;