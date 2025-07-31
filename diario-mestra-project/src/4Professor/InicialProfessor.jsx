import HeaderProf from "./1Componentes/Header";
import SidebarMenuProf from './1Componentes/SidebarMenu';
import Footer from "./1Componentes/Footer";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useState, useEffect } from 'react';
import { auth } from '../firebase';
import { doc, getDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';


function ProfTelaInicial () {
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

  const [disciplinas, setDisciplinas] = useState([]);

useEffect(() => {
  const buscarDisciplinas = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'materias'));
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setDisciplinas(lista);
    } catch (error) {
      console.error("Erro ao buscar disciplinas:", error);
    }
  };

  buscarDisciplinas();
}, []);



  // // Dados simulados das aulas do dia
  // const aulasHoje = [
  //   { materia: 'Matemática', turma: '1º série', horario: '08:00 - 11:00', marcada: true },
  //   { materia: 'Matemática', turma: '6º série', horario: '12:00 - 14:00', marcada: false },
  //   { materia: 'Matemática', turma: '8º série', horario: '15:00 - 17:00', marcada: false },
  // ];

  return (
    <>
      <HeaderProf />
      <Footer />

      <div className="main-container">
        <SidebarMenuProf />

        <main className="content">
          <h2>Bem-vinda, {nomeUsuario}</h2>

         <section className="secao-disciplinas">
  <h3>Disciplinas</h3>
  <div className="disciplinas-container">
    {disciplinas.length > 0 ? (
      disciplinas.map((disciplina) => (
        <div key={disciplina.id} className="card-disciplina">
          <h4>{disciplina.nome}</h4>
          <p><strong>Código:</strong> {disciplina.codigo}</p>
          <p>{disciplina.descricao}</p>
        </div>
      ))
    ) : (
      <p>Nenhuma disciplina encontrada.</p>
    )}
  </div>
</section>


          <section className="secao-eventos">
            <h3>Eventos</h3>
            <div className="cardEventos">
              <p>Nenhum evento marcado para hoje.</p>
            </div>
          </section>

              <section className="secao-disciplinas">
  <h3>Disciplinas Cadastradas</h3>
  <div className="disciplinas-container">
    {disciplinas.length > 0 ? (
      disciplinas.map((disciplina) => (
        <div className="card-disciplina" key={disciplina.id}>
          <h4>{disciplina.nome}</h4>
          <p><strong>Código:</strong> {disciplina.codigo}</p>
          <p>{disciplina.descricao}</p>
        </div>
      ))
    ) : (
      <p>Nenhuma disciplina cadastrada.</p>
    )}
  </div>
</section>


          <section className="secao-calendario">
            <h3>Calendário</h3>
            <Calendar onChange={setData} value={data} />
          </section>
        </main>
      </div>
    </>
  );
}

export default ProfTelaInicial;
