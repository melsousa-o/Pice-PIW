import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./Login-Page/LoginPage";
import CadastroPage from './Cadastro-Page/CadastroPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
