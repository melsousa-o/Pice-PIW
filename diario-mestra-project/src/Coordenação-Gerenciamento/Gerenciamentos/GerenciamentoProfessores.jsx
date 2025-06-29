import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";

function GerenciamentoProfessores() {
  return (
    <>
    <HeaderCoord/>

    <div className="main-container">
      <div className="sidebar">
      <SidebarMenu />
      </div>
      
      <main className="content">
        <h1>Gerenciamento de Professores</h1>
      </main>
    </div>
    </>
  );
}

export default GerenciamentoProfessores;
