import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";

function GerenciamentoMaterias() {
  return (
    <>
    <HeaderCoord/>

    <div className="main-container">
      <div className="sidebar">
      <SidebarMenu />
      </div>
      
      <main className="content">
        <h1>Gerenciamento de Matérias</h1>
      </main>
    </div>
    </>
  );
}

export default GerenciamentoMaterias;
