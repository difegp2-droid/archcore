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
            <a href="#">Patrones de Diseño</a>
            <a href="#">Seguridad Web (OWASP)</a>
            <a href="#">Testing Distribuido</a>
          </div>
          <div className="link-group">
            <h4>Ecosistema</h4>
            <a href="#">Cloud Native Computing Foundation</a>
            <a href="#">The W3C Specs</a>
            <a href="#">Open Source Tools</a>
          </div>
          <div className="link-group">
            <h4>Comunidad</h4>
            <a href="#">Foro de Arquitectos</a>
            <a href="#">Discord Premium</a>
            <a href="#">Eventos y Meetups</a>
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
