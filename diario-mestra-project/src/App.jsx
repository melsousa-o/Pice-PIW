
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import LoginBox from './1Login-Page/LoginPage';
import CadastroPage from './2Cadastro-Page/CadastroPage';

import CoordTelaInicial from './3Coordenacao/CoordTelaInicial';
import CoordGerenciamento from './3Coordenacao/CoordGerenciamento';
import GerenciamentoMaterias from './3Coordenacao/GerenciamentoMaterias';
import GerenciamentoTurmas from './3Coordenacao/GerenciamentoTurmas';
import GerenciamentoProfessores from './3Coordenacao/GerenciamentoProfessores';
import GerenciamentoAlunos from './3Coordenacao/GereciamentoAlunos';

import Relatório from './3Coordenacao/Relatorio';
import Mensagem from './3Coordenacao/Mensagem';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginBox/>} />
        <Route path="/cadastrocoord" element={<CadastroPage/>} />
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
