import { ArrowLeft, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Calendario() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', minHeight: '80vh' }}>
      <Link to="/comunidad" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-body)', textDecoration: 'none', marginBottom: '2rem' }}>
        <ArrowLeft size={16} /> Volver a la Comunidad
      </Link>
      
      <div className="section-header slide-up">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Calendar size={32} color="var(--primary)" /> Calendario de Eventos
        </h1>
        <p style={{ color: 'var(--text-body)' }}>Próximos meetups y webinars técnicos.</p>
      </div>

      <div style={{ display: 'grid', gap: '1.5rem' }} className="fade-in">
        <div style={{ display: 'flex', gap: '2rem', padding: '1.5rem', backgroundColor: 'var(--bg-sec)', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <div style={{ padding: '1rem', backgroundColor: 'var(--primary)', color: '#0F172A', borderRadius: '0.5rem', textAlign: 'center', minWidth: '80px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>24</div>
            <div style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase' }}>Oct</div>
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Webinar: Edge Computing en 2026</h3>
            <p style={{ color: 'var(--text-body)', fontSize: '0.95rem' }}>Aprende a desplegar código en la red global con latencia cero.</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button className="btn btn-outline">Registrarse</button>
          </div>
        </div>
      </div>
    </div>
  );
}
