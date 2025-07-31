import HeaderCoord from "./1Componentes/HeaderCoordenacao";
import SidebarMenu from "./1Componentes/SidebarMenu";
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, updateDoc, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function GerenciamentoProfessores() {
  const [professores, setProfessores] = useState([]);
  const [novoProfessor, setNovoProfessor] = useState({
    nome: "",
    cpf: "",
    email: "",
    dataDeNascimento: "",
    foto: "",
    materias: [],
    turmas: []
  });
  const [materiasDisponiveis, setMateriasDisponiveis] = useState([]);
  const [turmasDisponiveis, setTurmasDisponiveis] = useState([]);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [professorEditandoId, setProfessorEditandoId] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        // Busca professores
        const professoresSnapshot = await getDocs(collection(db, "professores"));
        const listaProfessores = professoresSnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        }));
        setProfessores(listaProfessores);

        // Busca matérias
        const materiasSnapshot = await getDocs(collection(db, "materias"));
        setMateriasDisponiveis(materiasSnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        })));

        // Busca turmas
        const turmasSnapshot = await getDocs(collection(db, "turmas"));
        setTurmasDisponiveis(turmasSnapshot.docs.map(doc => ({ 
          id: doc.id, 
          ...doc.data() 
        })));

      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        alert("Erro ao carregar dados. Tente recarregar a página.");
      }
    };

    buscarDados();
  }, []);

  const criarUsuarioProfessor = async (email, nome, cpf) => {
    try {
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        throw new Error("Email inválido");
      }

      const senha = `${nome.toLowerCase().slice(0,3)}${cpf.slice(-4)}!`;
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      
      return {
        uid: userCredential.user.uid,
        senhaTemporaria: senha
      };
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      throw error;
    }
  };

  const criarRegistroUsuario = async (uid, email, professorId, nome) => {
    try {
      await setDoc(doc(db, "usuarios", uid), {
        uid,
        email,
        tipo: "professor",
        professorId, // Garante que o professorId seja salvo
        nome,
        criadoEm: new Date().toISOString(),
        permissoes: {
          acessoResponsavel: false,
          acessoCoordenacao: false,
          acessoProfessor: true
        }
      });
      console.log(`Registro de usuário criado para professor ${professorId}`);
    } catch (error) {
      console.error("Erro ao criar registro de usuário:", error);
      throw error;
    }
  };

  const adicionarOuEditarProfessor = async () => {
    if (!novoProfessor.nome.trim()) {
      alert("Preencha o nome do professor");
      return;
    }

    try {
      if (modoEdicao && professorEditandoId) {
        // Edição de professor existente
        await updateDoc(doc(db, "professores", professorEditandoId), novoProfessor);
        setProfessores(professores.map(p => 
          p.id === professorEditandoId ? { ...p, ...novoProfessor } : p
        ));
      } else {
        // Cadastro de novo professor
        // Primeiro cria o documento do professor
        const professorRef = await addDoc(collection(db, "professores"), {
          ...novoProfessor,
          criadoEm: new Date().toISOString()
        });

        // Cria usuário de autenticação
        const { uid, senhaTemporaria } = await criarUsuarioProfessor(
          novoProfessor.email,
          novoProfessor.nome,
          novoProfessor.cpf
        );

        // Atualiza o professor com o uid do usuário de autenticação
        await updateDoc(doc(db, "professores", professorRef.id), {
          authUid: uid
        });

        // Cria registro na coleção usuarios com referência ao professor
        await criarRegistroUsuario(uid, novoProfessor.email, professorRef.id, novoProfessor.nome);

        // Atualiza a lista de professores local
        setProfessores([...professores, { 
          id: professorRef.id, 
          ...novoProfessor,
          authUid: uid
        }]);

        alert(`Professor cadastrado com sucesso!\n\nEmail: ${novoProfessor.email}\nSenha temporária: ${senhaTemporaria}\n\nEsta é a única vez que a senha será exibida. Anote-a com segurança!`);
      }

      // Limpa o formulário
      setNovoProfessor({
        nome: "",
        cpf: "",
        email: "",
        dataDeNascimento: "",
        foto: "",
        materias: [],
        turmas: []
      });
      setMostrarPopup(false);
      setModoEdicao(false);
      setProfessorEditandoId(null);

    } catch (error) {
      console.error("Erro ao salvar professor:", error);
      
      let mensagem = "Erro ao salvar professor: ";
      if (error.code === 'auth/email-already-in-use') {
        mensagem += "Este email já está em uso.";
      } else if (error.code === 'auth/invalid-email') {
        mensagem += "Email inválido.";
      } else if (error.code === 'auth/weak-password') {
        mensagem += "A senha é muito fraca.";
      } else {
        mensagem += error.message;
      }
      
      alert(mensagem);
    }
  };

  const excluirProfessor = async (id) => {
    if (!confirm("Tem certeza que deseja excluir este professor?\n\nEsta ação não pode ser desfeita!")) return;

    try {
      await deleteDoc(doc(db, "professores", id));
      setProfessores(professores.filter(p => p.id !== id));
      alert("Professor excluído com sucesso");
    } catch (error) {
      console.error("Erro ao excluir professor:", error);
      alert("Erro ao excluir professor");
    }
  };

  const editarProfessor = (professor) => {
    setNovoProfessor({ 
      nome: professor.nome,
      cpf: professor.cpf,
      email: professor.email,
      dataDeNascimento: professor.dataDeNascimento,
      foto: professor.foto,
      materias: professor.materias || [],
      turmas: professor.turmas || []
    });
    setModoEdicao(true);
    setProfessorEditandoId(professor.id);
    setMostrarPopup(true);
  };

  const handleImagemChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setNovoProfessor(prev => ({ ...prev, foto: event.target.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNovoProfessor(prev => ({ ...prev, [name]: value }));
  };

  const toggleMateria = (materiaId) => {
    setNovoProfessor(prev => ({
      ...prev,
      materias: prev.materias.includes(materiaId)
        ? prev.materias.filter(id => id !== materiaId)
        : [...prev.materias, materiaId]
    }));
  };

  const toggleTurma = (turmaId) => {
    setNovoProfessor(prev => ({
      ...prev,
      turmas: prev.turmas.includes(turmaId)
        ? prev.turmas.filter(id => id !== turmaId)
        : [...prev.turmas, turmaId]
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
          <div className="header-with-button">
            <h2>Gerenciamento de Professores</h2>
            <button 
              className="botao"
              onClick={() => {
                setMostrarPopup(true);
                setModoEdicao(false);
                setNovoProfessor({
                  nome: "",
                  cpf: "",
                  email: "",
                  dataDeNascimento: "",
                  foto: "",
                  materias: [],
                  turmas: []
                });
              }}
            >
              Cadastrar Professor
            </button>
          </div>

          <div className="cardsContainer">
            {professores.length > 0 ? (
              professores.map(prof => (
                <div key={prof.id} className="cardProfessor">
                  <div className="conteudoCardBranco">
                    {prof.foto && <img src={prof.foto} alt="Foto" className="cardfoto" />}
                    <h3>{prof.nome}</h3>
                    <p><strong>Email:</strong> {prof.email}</p>
                    <p><strong>CPF:</strong> {prof.cpf}</p>
                    <p><strong>Matérias:</strong> {prof.materias?.map(id => 
                      materiasDisponiveis.find(m => m.id === id)?.nome || id
                    ).join(', ') || 'Nenhuma'}</p>
                    <p><strong>Turmas:</strong> {prof.turmas?.map(id => {
                      const turma = turmasDisponiveis.find(t => t.id === id);
                      return turma ? `${turma.serie} - ${turma.periodo}` : id;
                    }).join(', ') || 'Nenhuma'}</p>
                    
                    <div className="botoes-card">
                      <button 
                        className="botao-editar"
                        onClick={() => editarProfessor(prof)}
                      >
                        Editar
                      </button>
                      <button 
                        className="botao-excluir"
                        onClick={() => excluirProfessor(prof.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="sem-registros">Nenhum professor cadastrado</p>
            )}
          </div>

          {mostrarPopup && (
            <div className="popupOverlay">
              <div className="popup">
                <h3>{modoEdicao ? "Editar Professor" : "Novo Professor"}</h3>
                
                <div className="form-group">
                  <label>Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={novoProfessor.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>CPF *</label>
                    <input
                      type="text"
                      name="cpf"
                      value={novoProfessor.cpf}
                      onChange={handleChange}
                      required
                      maxLength="11"
                      pattern="\d{11}"
                      title="Digite apenas números (11 dígitos)"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Data de Nascimento</label>
                    <input
                      type="date"
                      name="dataDeNascimento"
                      value={novoProfessor.dataDeNascimento}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={novoProfessor.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Foto</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImagemChange}
                  />
                  {novoProfessor.foto && (
                    <img src={novoProfessor.foto} alt="Preview" className="foto-preview" />
                  )}
                </div>

                <div className="form-group">
                  <label>Matérias</label>
                  <div className="checkbox-container">
                    {materiasDisponiveis.map(materia => (
                      <div key={materia.id} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`materia-${materia.id}`}
                          checked={novoProfessor.materias.includes(materia.id)}
                          onChange={() => toggleMateria(materia.id)}
                        />
                        <label htmlFor={`materia-${materia.id}`}>{materia.nome}</label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="form-group">
                  <label>Turmas</label>
                  <div className="checkbox-container">
                    {turmasDisponiveis.map(turma => (
                      <div key={turma.id} className="checkbox-item">
                        <input
                          type="checkbox"
                          id={`turma-${turma.id}`}
                          checked={novoProfessor.turmas.includes(turma.id)}
                          onChange={() => toggleTurma(turma.id)}
                        />
                        <label htmlFor={`turma-${turma.id}`}>
                          {turma.serie} - {turma.periodo}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="botoes-popup">
                  <button
                    type="button"
                    className="botao-cancelar"
                    onClick={() => {
                      setMostrarPopup(false);
                      setModoEdicao(false);
                    }}
                  >
                    Cancelar
                  </button>
                  
                  <button
                    type="button"
                    className="botao-confirmar"
                    onClick={adicionarOuEditarProfessor}
                  >
                    {modoEdicao ? "Salvar" : "Cadastrar"}
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

export default GerenciamentoProfessores;