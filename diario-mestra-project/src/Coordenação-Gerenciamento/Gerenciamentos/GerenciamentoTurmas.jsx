import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";

function GerenciamentoTurmas() {
  return (
    <>
    <HeaderCoord/>

    <div className="main-container">
      <div className="sidebar">
      <SidebarMenu />
      </div>
      
      <main className="content">
        <h1>Gerenciamento de Turmas</h1>
      </main>
    </div>
    </>
  );
}

export default GerenciamentoTurmas;
