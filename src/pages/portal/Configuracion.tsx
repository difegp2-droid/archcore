import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Configuracion() {
  return (
    <div className="fade-in">
      <header style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '10px' }}>
          Configuración
          <HelpPopover text="Gestiona los detalles de tu cuenta, preferencias de seguridad y configuraciones de acceso al entorno." />
        </h1>
        <p style={{ color: 'var(--text-body)' }}>Gestiona tu cuenta, facturación y preferencias de entorno.</p>
      </header>

      <EasyModeCard description="Esta es la 'Dirección del Nido'. Aquí es donde decides a qué hora se abren las puertas, quién tiene llaves de qué salón, y cuánto se le paga a los proveedores. En sistemas, esto se llama Panel de Configuración y Control de Accesos." />

      <div className="config-grid">
        <div className="bento-card" style={{ padding: '2rem' }}>
          <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>Perfil del Arquitecto</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-body)', fontSize: '0.9rem' }}>Nombre Completo</label>
              <input type="text" value="Usuario Demo" readOnly style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-sec)', color: 'var(--text-dark)' }} />
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-body)', fontSize: '0.9rem' }}>Correo Electrónico</label>
              <input type="email" value="demo@archcore.dev" readOnly style={{ width: '100%', padding: '0.75rem', borderRadius: '0.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-sec)', color: 'var(--text-dark)' }} />
            </div>
            
            <button className="btn btn-primary" style={{ marginTop: '1rem', alignSelf: 'flex-start' }}>Actualizar Perfil</button>
          </div>
        </div>
      </div>
    </div>
  );
}
