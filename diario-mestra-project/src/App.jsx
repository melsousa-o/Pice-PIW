
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CompararLogin from './1Login-Page/CompararLogin';
import LoginBox from './1Login-Page/LoginPage';

import CoordTelaInicial from './3Coordenação/CoordTelaInicial';
import CoordGerenciamento from './3Coordenação/CoordGerenciamento';
import GerenciamentoMaterias from './3Coordenação/GerenciamentoMaterias';
import GerenciamentoTurmas from './3Coordenação/GerenciamentoTurmas';
import GerenciamentoProfessores from './3Coordenação/GerenciamentoProfessores';
import GerenciamentoAlunos from './3Coordenação/GereciamentoAlunos';

import Relatório from './3Coordenação/Relatório';
import Mensagem from './3Coordenação/Mensagem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<LoginBox/>} />
         <Route path="/CompararLogin" element={<CompararLogin/>} />
        <Route path="/coord" element={<CoordTelaInicial/>} />
        <Route path="/gerenciamento" element={<CoordGerenciamento/>} />
        <Route path="/gerenciar-materias" element={<GerenciamentoMaterias/>} />
        <Route path="/gerenciar-turmas" element={<GerenciamentoTurmas/>} />
        <Route path="/gerenciar-alunos" element={<GerenciamentoAlunos/>} />
        <Route path="/gerenciar-professores" element={<GerenciamentoProfessores/>} />
        <Route path="/relatorio" element={<Relatório/>} />
        <Route path="/mensagem" element={<Mensagem/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
