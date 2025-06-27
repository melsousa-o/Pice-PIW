import HeaderCoord from "./HeaderCoordenação";
import SidebarMenu from "./SidebarMenu";

function CoordGerenciamento() {
  const cards = [
    {
      titulo: "Matérias",
      descricao: "Cadastre as disciplinas oferecidas pela escola...",
      botao: "Gerenciar Matérias",
    },
    {
      titulo: "Turmas",
      descricao: "Crie e organize as turmas por série e período...",
      botao: "Gerenciar Turmas",
    },
    {
      titulo: "Alunos",
      descricao: "Gerencie o cadastro de alunos...",
      botao: "Gerenciar Alunos",
    },
    {
      titulo: "Professores",
      descricao: "Cadastre, edite ou remova professores...",
      botao: "Gerenciar Professores",
    },
  ];

  return (
    <>
      <HeaderCoord />

      <div className="main-container">
        <div className="sidebar">
          <SidebarMenu />
        </div>

        <main className="content">
          <h1>Gerenciamento</h1>

          <div className="cardsCoordGrid">
            {cards.map((card, index) => (
              <div className="cardCoord" key={index}>
                <h2>{card.titulo}</h2>
                <p>{card.descricao}</p>
                <button>{card.botao}</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default CoordGerenciamento;
