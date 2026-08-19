import { Users, Calendar, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Community() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '80vh' }}>
      <div className="section-header slide-up" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Comunidad ArchCore</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-body)', maxWidth: '600px', margin: '0 auto' }}>
          Conecta con arquitectos de software de todo el mundo. Comparte conocimientos, resuelve dudas y participa en eventos exclusivos.
        </p>
      </div>

      <div className="bento-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
        <div className="bento-card fade-in" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <MessageSquare size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h3 style={{ marginBottom: '1rem' }}>Foro de Arquitectos</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>Discusiones profundas sobre patrones, infraestructura y diseño de sistemas.</p>
          <Link to="/comunidad/foro" className="btn btn-outline" style={{ display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Entrar al Foro</Link>
        </div>

        <div className="bento-card fade-in" style={{ textAlign: 'center', padding: '3rem 2rem', border: '1px solid var(--primary)', backgroundColor: 'var(--bg-sec)' }}>
          <Users size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h3 style={{ marginBottom: '1rem' }}>Discord Premium</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>Chat en vivo con los creadores y acceso a canales privados de QA.</p>
          <Link to="/comunidad/discord" className="btn btn-primary" style={{ display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Unirse al Servidor</Link>
        </div>

        <div className="bento-card fade-in" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
          <Calendar size={48} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
          <h3 style={{ marginBottom: '1rem' }}>Eventos y Meetups</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>Webinars semanales y conferencias presenciales en tu ciudad.</p>
          <Link to="/comunidad/calendario" className="btn btn-outline" style={{ display: 'block', width: '100%', textAlign: 'center', textDecoration: 'none' }}>Ver Calendario</Link>
        </div>
      </div>
    </div>
  );
}
