import { ArrowLeft, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Discord() {
  return (
    <div className="container fade-in" style={{ padding: '6rem 1.5rem', minHeight: '80vh', textAlign: 'center' }}>
      <Link to="/comunidad" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-body)', textDecoration: 'none', marginBottom: '4rem', alignSelf: 'flex-start' }}>
        <ArrowLeft size={16} /> Volver a la Comunidad
      </Link>
      
      <div style={{ maxWidth: '500px', margin: '0 auto', padding: '3rem', backgroundColor: 'var(--bg-sec)', borderRadius: '1rem', border: '1px solid var(--primary)', boxShadow: '0 10px 30px rgba(45, 212, 191, 0.1)' }}>
        <Users size={64} color="var(--primary)" style={{ margin: '0 auto 1.5rem' }} />
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>Servidor Oficial ArchCore</h1>
        <p style={{ color: 'var(--text-body)', marginBottom: '2rem' }}>Únete a más de 10,000 ingenieros de software hablando de sistemas distribuidos 24/7.</p>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <button className="btn btn-primary">Aceptar Invitación</button>
        </div>
      </div>
    </div>
  );
}
