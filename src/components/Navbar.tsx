import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo">
          <img src="/assets/logo_teal.jpg" alt="ArchCore Logo" className="logo-img" />
          <span className="logo-text">ArchCore</span>
        </Link>
        <nav className="nav-links">
          <a href="/#arquitectura">Arquitectura</a>
          <a href="/#ecosistema">Ecosistema</a>
          <Link to="/docs">Docs</Link>
          <Link to="/comunidad">Comunidad</Link>
        </nav>
        <div className="nav-actions">
          <Link to="/portal" className="btn btn-primary">Iniciar Exploración</Link>
        </div>
      </div>
    </header>
  );
}
