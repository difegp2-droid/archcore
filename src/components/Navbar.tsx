export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <div className="logo">
          <img src="/assets/logo_teal.jpg" alt="ArchCore Logo" className="logo-img" />
          <span className="logo-text">ArchCore</span>
        </div>
        <nav className="nav-links">
          <a href="#arquitectura">Arquitectura</a>
          <a href="#ciclo">Ciclo de Vida</a>
          <a href="#ecosistema">Ecosistema</a>
          <a href="#protocolos">Protocolos</a>
        </nav>
        <div className="nav-actions">
          <a href="#ecosistema" className="btn btn-primary">Iniciar Exploración</a>
        </div>
      </div>
    </header>
  );
}
