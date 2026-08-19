import { BookOpen, Shield, FlaskConical } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

export default function DocsLayout() {
  const getLinkStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    color: isActive ? 'var(--primary)' : 'var(--text-body)',
    fontWeight: isActive ? 600 : 400,
    textDecoration: 'none',
    padding: '0.5rem 0'
  });

  return (
    <div className="container page-layout">
      <aside className="page-sidebar">
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Documentación</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavLink to="/docs/patrones" style={getLinkStyle}>
            <BookOpen size={18} /> Patrones de Diseño
          </NavLink>
          <NavLink to="/docs/seguridad" style={getLinkStyle}>
            <Shield size={18} /> Seguridad Web
          </NavLink>
          <NavLink to="/docs/testing" style={getLinkStyle}>
            <FlaskConical size={18} /> Testing Distribuido
          </NavLink>
        </nav>
      </aside>
      
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
