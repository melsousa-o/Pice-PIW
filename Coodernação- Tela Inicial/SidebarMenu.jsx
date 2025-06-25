function SidebarMenu() {
  return (
    <nav className="sidebar">
      <ul className="menu-principal">
        <li>Inicio</li>
        <li>Gerenciamento</li>
        <li>Relatório</li>
        <li>Mensagem</li>
      </ul>
      <ul className="menu-inferior">
        <li>Configurações</li>
        <li>Sair</li>
      </ul>
      <button className="botao-voltar">Voltar</button>
    </nav>
  );
}

export default SidebarMenu;
