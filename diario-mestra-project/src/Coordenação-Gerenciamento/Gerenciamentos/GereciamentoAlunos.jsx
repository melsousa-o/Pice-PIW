import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";
import { useState } from "react";

function GerenciamentoAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    nome: "",
    cpf: "",
    responsavel: "", // Corrigido aqui (antes estava "reponsavel")
    cpfResponsavel: ""
  });
  const [mostrarPopup, setMostrarPopup] = useState(false);

  const adicionarAluno = () => {
    const nomeTrimado = novoAluno.nome.trim(); // Corrigido aqui

    if (
      nomeTrimado &&
      !alunos.some((a) => a.nome === nomeTrimado && a.cpf === novoAluno.cpf)
    ) {
      setAlunos([...alunos, novoAluno]);
      setNovoAluno({
        nome: "",
        cpf: "",
        responsavel: "",
        cpfResponsavel: ""
      });
      setMostrarPopup(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoAluno((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <>
      <HeaderCoord />

      <div className="main-container">
        <div className="sidebar">
          <SidebarMenu />
        </div>

        <main className="content">
          <h2>Gerenciamento de Alunos</h2>

          <button className="botao" onClick={() => setMostrarPopup(true)}>
            Cadastrar Aluno
          </button>

          <div className="cardsContainer">
            {alunos.map((aluno, index) => (
              <div key={index} className="cardAluno">
                <p>Aluno: {aluno.nome}</p>
                <p>CPF: {aluno.cpf}</p>
                <p>Responsável: {aluno.responsavel}</p>
                <p>CPF do Responsável: {aluno.cpfResponsavel}</p>
              </div>
            ))}
          </div>

          {mostrarPopup && (
            <div className="popup-overlay">
              <div className="popup">
                <h3>Novo Aluno</h3>

                <input
                  type="text"
                  name="nome"
                  placeholder="Nome completo do aluno"
                  value={novoAluno.nome}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cpf"
                  placeholder="CPF do aluno"
                  value={novoAluno.cpf}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="responsavel"
                  placeholder="Nome do responsável"
                  value={novoAluno.responsavel}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cpfResponsavel"
                  placeholder="CPF do responsável"
                  value={novoAluno.cpfResponsavel}
                  onChange={handleChange}
                />

                <div>
                  <button className="botao" onClick={adicionarAluno}>Cadastrar</button>
                  <button className="botao" onClick={() => setMostrarPopup(false)}>Cancelar</button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </>
  );
}

export default GerenciamentoAlunos;
