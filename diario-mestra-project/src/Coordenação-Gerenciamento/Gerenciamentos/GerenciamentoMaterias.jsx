import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";
import { useState } from "react";

function GerenciamentoMaterias() {
  const [materias, setMaterias] = useState([]); // começa vazio
  const [novaMateria, setNovaMateria] = useState("");
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const adicionarMateria = () => {
    const nome = novaMateria.trim();

    if (nome && !materias.includes(nome)) {
      setMaterias([...materias, nome]);
      setNovaMateria("");
      setMostrarPopup(false);
    }
  };

  return (
    <>
      <HeaderCoord />

      <div className="main-container">
        <div className="sidebar">
          <SidebarMenu />
        </div>

        <main className="content">
          <h2>Gerenciamento de Matérias</h2>

          <button className="botao" onClick={() => setMostrarPopup(true)}>Cadastrar Matéria</button>

          <div className="cardsContainer">
            {materias.map((materia, index) => (
              <div className="cardMateria" key={index}>
                {materia}
              </div>
            ))}
          </div>
        </main>

        {mostrarPopup && (
          <div className="popupOverlay">
            <div className="popup">
              <h3>Nova Matéria</h3>

              <input
                type="text"
                placeholder="Digite o nome da Matéria"
                value={novaMateria}
                onChange={(e) => setNovaMateria(e.target.value)}
              />

              <div>
                <button className="botao" onClick={adicionarMateria}>Cadastrar</button>
                <button className="botao" onClick={() => setMostrarPopup(false)}>Cancelar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GerenciamentoMaterias;
