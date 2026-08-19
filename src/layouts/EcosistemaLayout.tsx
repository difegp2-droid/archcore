import { Globe, Cloud, Code2 } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';

export default function EcosistemaLayout() {
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
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Ecosistema</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <NavLink to="/ecosistema/cncf" style={getLinkStyle}>
            <Cloud size={18} /> CNCF Projects
          </NavLink>
          <NavLink to="/ecosistema/w3c" style={getLinkStyle}>
            <Globe size={18} /> The W3C Specs
          </NavLink>
          <NavLink to="/ecosistema/opensource" style={getLinkStyle}>
            <Code2 size={18} /> Open Source
          </NavLink>
        </nav>
      </aside>
      
      <div style={{ flex: 1 }}>
        <Outlet />
      </div>
    </div>
  );
}
