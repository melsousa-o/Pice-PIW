import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoordTelaInicial from './Coodernação-TelaInicial/CoordTelaInicial';
import CoordGerenciamento from './Coordenação-Gerenciamento/CoordGerenciamento';
import GerenciamentoMaterias from './Coordenação-Gerenciamento/Gerenciamentos/GerenciamentoMaterias';
import GerenciamentoTurmas from './Coordenação-Gerenciamento/Gerenciamentos/GerenciamentoTurmas';
import GerenciamentoProfessores from './Coordenação-Gerenciamento/Gerenciamentos/GerenciamentoProfessores';
import GerenciamentoAlunos from './Coordenação-Gerenciamento/Gerenciamentos/GereciamentoAlunos';

import Relatório from './Relatório/Relatório';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoordTelaInicial />} />
        <Route path="/gerenciamento" element={<CoordGerenciamento />} />
        <Route path="/gerenciar-materias" element={<GerenciamentoMaterias />} />
        <Route path="/gerenciar-turmas" element={<GerenciamentoTurmas />} />
        <Route path="/gerenciar-alunos" element={<GerenciamentoAlunos />} />
        <Route path="/gerenciar-professores" element={<GerenciamentoProfessores />} />
        <Route path="/relatorio" element={<Relatório />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
