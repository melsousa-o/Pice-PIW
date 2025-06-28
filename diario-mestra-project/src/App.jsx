import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoordTelaInicial from './Coodernação-TelaInicial/CoordTelaInicial';
import CoordGerenciamento from './Coordenação-Gerenciamento/CoordGerenciamento';
import GerenciamentoMaterias from './Coordenação-Gerenciamento/GerenciamentoMateria/GerenciamentoMaterias';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoordTelaInicial />} />
        <Route path="/gerenciamento" element={<CoordGerenciamento />} />
        <Route path="/gerenciar-materias" element={<GerenciamentoMaterias />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
