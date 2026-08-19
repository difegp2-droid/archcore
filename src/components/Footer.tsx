import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <div className="logo">
            <img src="/assets/logo_teal.jpg" alt="ArchCore Logo" className="logo-img" style={{ width: '30px', height: '30px' }} />
            <span className="logo-text">ArchCore</span>
          </div>
          <p>Ingeniería de software avanzada y diseño de sistemas distribuidos para la próxima década de la web.</p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h4>Fundamentos</h4>
            <Link to="/docs/patrones">Patrones de Diseño</Link>
            <Link to="/docs/seguridad">Seguridad Web (OWASP)</Link>
            <Link to="/docs/testing">Testing Distribuido</Link>
          </div>
          <div className="link-group">
            <h4>Ecosistema</h4>
            <Link to="/ecosistema/cncf">Cloud Native Computing Foundation</Link>
            <Link to="/ecosistema/w3c">The W3C Specs</Link>
            <Link to="/ecosistema/opensource">Open Source Tools</Link>
          </div>
          <div className="link-group">
            <h4>Comunidad</h4>
            <Link to="/comunidad/foro">Foro de Arquitectos</Link>
            <Link to="/comunidad/discord">Discord Premium</Link>
            <Link to="/comunidad/calendario">Eventos y Meetups</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} ArchCore. Todos los derechos reservados. Diseñado para la web del futuro.</p>
        </div>
      </div>
    </footer>
  );
}
