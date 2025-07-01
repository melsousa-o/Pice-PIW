import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";

function GerenciamentoAlunos() {
  return (
    <>
    <HeaderCoord/>

    <div className="main-container">
      <div className="sidebar">
      <SidebarMenu />
      </div>
      
      <main className="content">
        <h1>Gerenciamento de Alunos</h1>

      <div>
        
      </div>
      </main>
    </div>
    </>
  );
}

export default GerenciamentoAlunos;
