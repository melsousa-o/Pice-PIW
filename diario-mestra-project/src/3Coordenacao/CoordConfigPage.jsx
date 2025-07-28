import { useEffect, useState } from 'react';
import { auth, db, storage } from '../firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import HeaderCoord from './1Componentes/HeaderCoordenacao';
import SidebarMenu from './1Componentes/SidebarMenu';

function CoordConfigPage() {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    telefone: '',
    formacao: '',
    biografia: '',
    fotoURL: 'https://i.pinimg.com/736x/14/43/55/144355d7b36c5f646435423798281ce9.jpg'
  });

  const [fotoNova, setFotoNova] = useState(null);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const carregarDados = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        setDados(prev => ({ ...prev, email: user.email || '' }));
        const userDoc = await getDoc(doc(db, 'usuarios', user.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setDados({
            nome: userData.nome || '',
            email: user.email || userData.email || '',
            telefone: userData.telefone || '',
            formacao: userData.formacao || '',
            biografia: userData.biografia || '',
            fotoURL: userData.fotoURL || 'https://i.pinimg.com/736x/14/43/55/144355d7b36c5f646435423798281ce9.jpg'
          });
        }
      } catch (error) {
        console.error("Erro ao carregar dados:", error);
        alert("Erro ao carregar dados do usuário");
      }
    };

    carregarDados();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDados(prev => ({ ...prev, [name]: value }));
  };

  const handleFotoChange = (e) => {
    if (e.target.files[0]) {
      setFotoNova(e.target.files[0]);
      const reader = new FileReader();
      reader.onload = (event) => {
        setDados(prev => ({ ...prev, fotoURL: event.target.result }));
      };
      reader.readAsDataURL(e.target.files[0]);
      alert("Foto selecionada com sucesso!");
    }
  };

  const alternarTema = () => {
    const body = document.body;
    body.classList.toggle('tema-escuro');
    localStorage.setItem('tema', body.classList.contains('tema-escuro') ? 'dark' : 'light');
    alert("Tema alterado com sucesso!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    try {
      let urlFoto = dados.fotoURL;

      if (fotoNova) {
        const caminho = `fotosPerfis/${user.uid}`;
        const refFoto = ref(storage, caminho);
        await uploadBytes(refFoto, fotoNova);
        urlFoto = await getDownloadURL(refFoto);
      }

      await updateDoc(doc(db, 'usuarios', user.uid), {
        nome: dados.nome,
        telefone: dados.telefone,
        formacao: dados.formacao,
        biografia: dados.biografia,
        fotoURL: urlFoto
      });

      setEditMode(false);
      alert('Dados atualizados com sucesso!');
    } catch (error) {
      console.error('Erro ao atualizar dados:', error);
      alert('Erro ao atualizar dados');
    }
  };

  const cancelarEdicao = () => {
    setEditMode(false);
    const user = auth.currentUser;
    if (user) {
      getDoc(doc(db, 'usuarios', user.uid)).then((doc) => {
        if (doc.exists()) {
          setDados({
            ...doc.data(),
            fotoURL: doc.data().fotoURL || 'https://i.pinimg.com/736x/14/43/55/144355d7b36c5f646435423798281ce9.jpg'
          });
        }
      });
    }
    alert("Edição cancelada - Alterações descartadas");
  };

  return (
    <>
      <HeaderCoord />
      <div className="main-container">
        <SidebarMenu />

        <main className="content config-page">
          <h2>Configurações</h2>

          <div className="config-container">
            <div className="config-actions-column">
              <img 
                src={dados.fotoURL} 
                alt="Perfil" 
                className="profile-preview" 
                onError={(e) => {
                  e.target.src = 'https://i.pinimg.com/736x/14/43/55/144355d7b36c5f646435423798281ce9.jpg';
                }}
              />
              
              {/* Botão para alterar foto */}
              <button className="action-btn file-input-btn">
                Alterar foto de perfil
                <input 
                  type="file"
                  onChange={handleFotoChange}
                  className="file-input"
                  accept="image/*"
                />
              </button>
              
              {/* Demais botões */}
              <button
                className={`action-btn ${editMode ? 'cancel-btn' : 'edit-btn'}`}
                onClick={editMode ? cancelarEdicao : () => setEditMode(true)}
                type="button"
              >
                {editMode ? 'Cancelar edição' : 'Editar dados pessoais'}
              </button>
              
              <button
                className="action-btn theme-btn"
                onClick={alternarTema}
                type="button"
              >
                Alternar tema
              </button>
            </div>

            <div className="divider"></div>

            <form onSubmit={handleSubmit} className="data-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Nome</label>
                  <input
                    name="nome"
                    value={dados.nome}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </div>
                
                <div className="input-group">
                  <label>Email</label>
                  <input
                    name="email"
                    value={dados.email}
                    disabled
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Telefone</label>
                  <input
                    name="telefone"
                    value={dados.telefone}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </div>
                
                <div className="input-group">
                  <label>Formação</label>
                  <input
                    name="formacao"
                    value={dados.formacao}
                    onChange={handleChange}
                    disabled={!editMode}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Biografia</label>
                <textarea
                  name="biografia"
                  value={dados.biografia}
                  onChange={handleChange}
                  disabled={!editMode}
                />
              </div>

              {editMode && (
                <div className="form-actions">
                  <button type="submit" className="save-btn">
                    Salvar alterações
                  </button>
                </div>
              )}
            </form>
          </div>
        </main>
      </div>
    </>
  );
}

export default CoordConfigPage;