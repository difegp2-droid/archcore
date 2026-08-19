import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src={`${import.meta.env.BASE_URL}assets/logo_teal.jpg`} alt="ArchCore Logo" className="logo-img" />
          <span className="logo-text">ArchCore</span>
        </Link>
        
        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <nav className="nav-links">
            <Link to="/ecosistema" onClick={closeMenu}>Ecosistema</Link>
            <Link to="/docs" onClick={closeMenu}>Docs</Link>
            <Link to="/comunidad" onClick={closeMenu}>Comunidad</Link>
          </nav>
          <div className="nav-actions">
            <Link to="/portal" className="btn btn-primary" onClick={closeMenu}>Iniciar Exploración</Link>
          </div>
        </div>

        <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}
