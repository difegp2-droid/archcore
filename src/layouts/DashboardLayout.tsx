import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Code, Cloud, Settings, LogOut, Menu, X } from 'lucide-react';

export default function DashboardLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getNavStyle = ({ isActive }: { isActive: boolean }) => ({
    display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', borderRadius: '8px',
    backgroundColor: isActive ? 'var(--bg-sec)' : 'transparent',
    color: isActive ? 'var(--primary)' : 'var(--text-body)',
    fontWeight: isActive ? 600 : 500,
    textDecoration: 'none'
  });

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="dashboard-layout">
      {/* Mobile Header */}
      <div className="mobile-dashboard-header">
        <Link to="/" className="logo">
          <img src="/assets/logo_teal.jpg" alt="ArchCore Logo" className="logo-img" />
          <span className="logo-text">ArchCore</span>
        </Link>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`dashboard-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="logo sidebar-logo" style={{ marginBottom: '3rem' }}>
          <img src="/assets/logo_teal.jpg" alt="ArchCore Logo" className="logo-img" />
          <span className="logo-text">ArchCore</span>
        </Link>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
          <NavLink to="/portal/simuladores" style={getNavStyle} onClick={closeMenu}>
            <LayoutDashboard size={20} />
            Simuladores
          </NavLink>
          <NavLink to="/portal/plantillas" style={getNavStyle} onClick={closeMenu}>
            <Code size={20} />
            Plantillas IaC
          </NavLink>
          <NavLink to="/portal/despliegues" style={getNavStyle} onClick={closeMenu}>
            <Cloud size={20} />
            Despliegues
          </NavLink>
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid var(--border)' }}>
          <NavLink to="/portal/configuracion" style={getNavStyle} onClick={closeMenu}>
            <Settings size={20} />
            Configuración
          </NavLink>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem', color: 'var(--text-muted)' }}>
            <LogOut size={20} />
            Salir al Sitio
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="dashboard-main">
        <Outlet />
      </main>
    </div>
  );
}
