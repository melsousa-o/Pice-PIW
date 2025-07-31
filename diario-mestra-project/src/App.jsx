import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './1Login-Page/ProtectRoute';

import LoginBox from './1Login-Page/LoginPage';
import CadastroPage from './2Cadastro-Page/CadastroPage';

// Coordenação
import DashboardCoord from './3Coordenacao/CoordTelaInicial'; 
import CoordGerenciamento from './3Coordenacao/CoordGerenciamento';
import GerenciamentoMaterias from './3Coordenacao/GerenciamentoMaterias';
import GerenciamentoTurmas from './3Coordenacao/GerenciamentoTurmas';
import GerenciamentoProfessores from './3Coordenacao/GerenciamentoProfessores';
import GerenciamentoAlunos from './3Coordenacao/GerenciamentoAlunos';
import Relatorio from './3Coordenacao/Relatorio';
import Mensagem from './3Coordenacao/Mensagem';
import CoordConfigPage from './3Coordenacao/CoordConfigPage';

// Professor
import ProfTelaInicial from './4Professor/InicialProfessor';
import RelatoriosProf from './4Professor/RelatoriosProf';

function App() {
   useEffect(() => {
    const temaSalvo = localStorage.getItem('tema');
    if (temaSalvo === 'dark') {
      document.body.classList.add('tema-escuro');
    }
  }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        {/* Rotas públicas */}
        <Route path="/" element={<LoginBox />} />
        <Route path="/cadastrocoord" element={<CadastroPage />} />
        
        {/* Rotas protegidas para coordenação */}
        <Route path="/coord" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <DashboardCoord />
          </ProtectedRoute>
        } />
        
        <Route path="/gerenciamento" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <CoordGerenciamento />
          </ProtectedRoute>
        } />
        
        <Route path="/gerenciar-materias" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <GerenciamentoMaterias />
          </ProtectedRoute>
        } />
        
        <Route path="/gerenciar-turmas" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <GerenciamentoTurmas />
          </ProtectedRoute>
        } />
        
        <Route path="/gerenciar-alunos" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <GerenciamentoAlunos />
          </ProtectedRoute>
        } />
        
        <Route path="/gerenciar-professores" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <GerenciamentoProfessores />
          </ProtectedRoute>
        } />
        
        <Route path="/relatorio" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <Relatorio />
          </ProtectedRoute>
        } />
        
        <Route path="/mensagem" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <Mensagem />
          </ProtectedRoute>
        } />

        <Route path="/configuracoes" element={
          <ProtectedRoute allowedProfiles={['coordenacao']}>
            <CoordConfigPage />
          </ProtectedRoute>
        } />

        {/* Rotas protegidas para professores */}
        <Route path="/professor" element={
          <ProtectedRoute allowedProfiles={['professor']}>
            <ProfTelaInicial />
          </ProtectedRoute>
        } />

<Route path="/relatorios" element={
  <ProtectedRoute allowedProfiles={['professor']}>
    <RelatoriosProf />  {/* Nome correto do componente */}
  </ProtectedRoute>
} />

        {/* Redirecionamento para páginas não encontradas */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;