import HeaderCoord from "./1Componentes/HeaderCoordenacao";
import SidebarMenu from "./1Componentes/SidebarMenu";
import { useState, useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

function Mensagem() {
  const [mensagem, setMensagem] = useState("");
  const [destinatarios, setDestinatarios] = useState({
    professores: false,
    responsaveis: false,
  });
  const [professores, setProfessores] = useState([]);
  const [responsaveis, setResponsaveis] = useState([]);

  // Buscar professores e responsáveis do Firestore
  useEffect(() => {
    const buscarDestinatarios = async () => {
      const professoresSnapshot = await getDocs(collection(db, "professores"));
      setProfessores(professoresSnapshot.docs.map(doc => doc.data().email));

      const responsaveisSnapshot = await getDocs(collection(db, "responsaveis"));
      setResponsaveis(responsaveisSnapshot.docs.map(doc => doc.data().email));
    };
    buscarDestinatarios();
  }, []);

  const handleChange = (e) => {
    setMensagem(e.target.value);
  };

  const handleDestinatariosChange = (e) => {
    const { name, checked } = e.target;
    setDestinatarios({ ...destinatarios, [name]: checked });
  };

  const handleEnviar = async () => {
    if (!mensagem.trim() || (!destinatarios.professores && !destinatarios.responsaveis)) {
      alert("Preencha a mensagem e selecione pelo menos um destinatário.");
      return;
    }

    try {
      await addDoc(collection(db, "mensagens"), {
        texto: mensagem,
        destinatarios,
        data: new Date().toISOString(),
      });

      const response = await fetch("https://us-central1-seu-projeto.cloudfunctions.net/enviarEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mensagem,
          destinatarios: {
            professores: destinatarios.professores ? professores : [],
            responsaveis: destinatarios.responsaveis ? responsaveis : [],
          },
        }),
      });

      if (response.ok) {
        alert("Mensagem enviada e e-mails disparados com sucesso!");
        setMensagem("");
        setDestinatarios({ professores: false, responsaveis: false });
      } else {
        throw new Error("Falha ao enviar e-mails");
      }
    } catch (error) {
      console.error("Erro:", error);
      alert("Erro ao enviar mensagem. Tente novamente.");
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
          <h2>Mensagem</h2>

          <div className="mensagem-form">
            <textarea
              value={mensagem}
              onChange={handleChange}
              placeholder="Digite sua mensagem aqui"
              style={{ width: "100%", height: "100px", padding: "10px", resize: "none", marginBottom: "20px" }}
            />

            <div style={{ marginBottom: "20px" }}>
              <p style={{ marginBottom: "10px", fontWeight: "bold" }}>Enviar para:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <label>
                  <input
                    type="checkbox"
                    name="professores"
                    checked={destinatarios.professores}
                    onChange={handleDestinatariosChange}
                  />
                  Professores
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="responsaveis"
                    checked={destinatarios.responsaveis}
                    onChange={handleDestinatariosChange}
                  />
                  Responsáveis
                </label>
              </div>
            </div>

            <button className="botao" onClick={handleEnviar}>
              Enviar
            </button>
          </div>
        </main>
      </div>
    </>
  );
}

export default Mensagem;