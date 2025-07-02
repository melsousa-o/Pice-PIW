import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";
import { useState } from "react";

function GerenciamentoTurmas() {
  const [turmas, setTurmas] = useState([]);
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const [novaTurma, setNovaTurma] = useState({
    serie: "",
    periodo: "",
    materias: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovaTurma({ ...novaTurma, [name]: value });
  };

  const cadastrarTurma = () => {
    // Verifica se os campos obrigatórios foram preenchidos
    const { serie, periodo, materias } = novaTurma;
    if (serie && periodo && materias) {
      const nomeTurma = `${serie} - ${periodo} - ${materias}`;
      if (!turmas.includes(nomeTurma)) {
        setTurmas([...turmas, nomeTurma]);
        setMostrarPopup(false);
        setNovaTurma({ serie: "", periodo: "", materias: "" });
      }
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
          <h2>Gerenciamento de Turmas</h2>

          <button className="botao" onClick={() => setMostrarPopup(true)}>
            Cadastrar Turma
          </button>

          <div className="cardsContainer">
            {turmas.map((turma, index) => (
              <div className="cardTurma" key={index}>
                {turma}
              </div>
            ))}
          </div>
        </main>

        {mostrarPopup && (
          <div className="popupOverlay">
            <div className="popup">
              <h3>Nova turma</h3>

              <div className="formGrid">
                <div className="filtro">
                  <label htmlFor="serie">Série</label>
                  <select
                    name="serie"
                    id="serie"
                    value={novaTurma.serie}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option value="1º Ano">1º Ano</option>
                    <option value="2º Ano">2º Ano</option>
                    <option value="3º Ano">3º Ano</option>
                  </select>
                </div>

                <div className="filtro">
                  <label htmlFor="materias">Matéria</label>
                  <select
                    name="materias"
                    id="materias"
                    value={novaTurma.materias}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option value="Português">Português</option>
                    <option value="Matemática">Matemática</option>
                    <option value="História">História</option>
                  </select>
                </div>

                <div className="filtro">
                  <label htmlFor="periodo">Período</label>
                  <select
                    name="periodo"
                    id="periodo"
                    value={novaTurma.periodo}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    <option value="Manhã">Manhã</option>
                    <option value="Tarde">Tarde</option>
                    <option value="Noite">Noite</option>
                  </select>
                </div>
              </div>

              <div className="botoesPopup">
                <button className="botao" onClick={cadastrarTurma}>Cadastrar</button>
                <button className="botao cancelar" onClick={() => setMostrarPopup(false)}>Cancelar</button>
              </div>

            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default GerenciamentoTurmas;
