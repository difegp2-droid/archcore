import { Link } from 'react-router-dom';

export default function CTA() {
  return (
    <section style={{ padding: 0, marginTop: '-2rem' }}>
      <div className="container">
        <div className="cta-card fade-in">
          <div className="cta-content">
            <h2>Arquitectura sin límites</h2>
            <p>Únete a nuestra plataforma y accede a más de 50 diagramas interactivos, repositorios de plantillas IaC (Terraform) y simuladores de microservicios en vivo.</p>
          </div>
          <div className="cta-action">
            <Link to="/portal" className="btn btn-primary">Acceder al Portal ArchCore</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
