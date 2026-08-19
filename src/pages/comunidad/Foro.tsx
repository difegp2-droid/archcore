import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Foro() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '80vh' }}>
      <Link to="/comunidad" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-body)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Volver a la Comunidad
      </Link>
      
      <div className="section-header slide-up">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <MessageSquare size={32} color="var(--primary)" /> Foro de Arquitectos
        </h1>
        <p style={{ color: 'var(--text-body)' }}>Discusiones recientes de la comunidad.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} className="fade-in">
        <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-sec)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>¿Cómo orquestar microservicios con Kafka?</h3>
          <p style={{ color: 'var(--text-body)', fontSize: '0.9rem', marginBottom: '1rem' }}>Publicado por: dev_master • Hace 2 horas</p>
          <span className="tag">Event Driven</span>
          <span className="tag">Kafka</span>
        </div>

        <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-sec)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Alternativas a Kubernetes para startups</h3>
          <p style={{ color: 'var(--text-body)', fontSize: '0.9rem', marginBottom: '1rem' }}>Publicado por: cloud_native_guy • Hace 5 horas</p>
          <span className="tag">Docker</span>
          <span className="tag">Infrastructure</span>
        </div>
      </div>
    </div>
  );
}
