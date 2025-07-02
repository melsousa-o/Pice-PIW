import HeaderCoord from "../HeaderCoordenação";
import SidebarMenu from "../SidebarMenu";
import { useState } from "react";

function GerenciamentoAlunos() {
  const [alunos, setAlunos] = useState([]);
  const [novoAluno, setNovoAluno] = useState({
    nome: "",
    cpf: "",
    responsavel: "",
    cpfResponsavel: "",
    foto: null,
  });

  const [mostrarPopup, setMostrarPopup] = useState(false);

  const adicionarAluno = () => {
    const nomeTrimado = novoAluno.nome.trim();

    if (
      nomeTrimado &&
      !alunos.some((a) => a.nome === nomeTrimado && a.cpf === novoAluno.cpf)
    ) {
      setAlunos([...alunos, novoAluno]);
      setNovoAluno({
        nome: "",
        cpf: "",
        responsavel: "",
        cpfResponsavel: "",
        foto: null,
      });
      setMostrarPopup(false);
    }
  };

  const handleImagemChange = (e) => {
    const arquivo = e.target.files[0]; // ✅ corrigido "="
    if (arquivo) {
      const url = URL.createObjectURL(arquivo);
      setNovoAluno({ ...novoAluno, foto: url });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoAluno((prev) => ({
      ...prev,
      [name]: value,
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
                <div className="conteudoCardBranco">
                  {aluno.foto && (
                    <img
                      src={aluno.foto}
                      alt="Foto do Aluno"
                      style={{ width: "80px", height: "80px", borderRadius: "50%" }}
                    />
                  )}
                  <p>Aluno: {aluno.nome}</p>
                  <p>CPF: {aluno.cpf}</p>
                  <p>Responsável: {aluno.responsavel}</p>
                  <p>CPF: {aluno.cpfResponsavel}</p>
                </div>
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
                  placeholder="CPF"
                  value={novoAluno.cpfResponsavel}
                  onChange={handleChange}
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImagemChange}
                />

                {novoAluno.foto && (
                  <img  className="cardfoto"
                    src={novoAluno.foto}
                    alt="Foto do Aluno"
                  />
                )}

                <div>
                  <button className="botao" onClick={adicionarAluno}>
                    Cadastrar
                  </button>
                  <button className="botao" onClick={() => setMostrarPopup(false)}>
                    Cancelar
                  </button>
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
