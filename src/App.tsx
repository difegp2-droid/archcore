import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DocsLayout from './layouts/DocsLayout';
import Patrones from './pages/docs/Patrones';
import Seguridad from './pages/docs/Seguridad';
import Testing from './pages/docs/Testing';
import EcosistemaLayout from './layouts/EcosistemaLayout';
import Cncf from './pages/ecosistema/Cncf';
import W3c from './pages/ecosistema/W3c';
import OpenSource from './pages/ecosistema/OpenSource';
import Community from './pages/Community';
import Foro from './pages/comunidad/Foro';
import Discord from './pages/comunidad/Discord';
import Calendario from './pages/comunidad/Calendario';
import DashboardLayout from './layouts/DashboardLayout';
import Simuladores from './pages/portal/Simuladores';
import Plantillas from './pages/portal/Plantillas';
import Despliegues from './pages/portal/Despliegues';
import Configuracion from './pages/portal/Configuracion';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          
          <Route path="docs" element={<DocsLayout />}>
            <Route index element={<Navigate to="patrones" replace />} />
            <Route path="patrones" element={<Patrones />} />
            <Route path="seguridad" element={<Seguridad />} />
            <Route path="testing" element={<Testing />} />
          </Route>

          <Route path="ecosistema" element={<EcosistemaLayout />}>
            <Route index element={<Navigate to="cncf" replace />} />
            <Route path="cncf" element={<Cncf />} />
            <Route path="w3c" element={<W3c />} />
            <Route path="opensource" element={<OpenSource />} />
          </Route>
          
          <Route path="comunidad">
            <Route index element={<Community />} />
            <Route path="foro" element={<Foro />} />
            <Route path="discord" element={<Discord />} />
            <Route path="calendario" element={<Calendario />} />
          </Route>
        </Route>
        
        <Route path="/portal" element={<DashboardLayout />}>
          <Route index element={<Navigate to="simuladores" replace />} />
          <Route path="simuladores" element={<Simuladores />} />
          <Route path="plantillas" element={<Plantillas />} />
          <Route path="despliegues" element={<Despliegues />} />
          <Route path="configuracion" element={<Configuracion />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
