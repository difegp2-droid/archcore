import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Cncf() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        Cloud Native Computing Foundation (CNCF)
        <HelpPopover text="La CNCF es como la 'ONU' del código abierto en la nube. Reúnen a las mejores empresas del mundo (Google, Amazon, Microsoft) para crear herramientas gratis que todos pueden usar para construir servidores más fuertes." />
      </h1>

      <EasyModeCard description="Imagina que el colegio (la nube) crece tan rápido que ya no sabes en qué salón meter a los niños (los usuarios). 'Kubernetes' es como un súper-director de colegio: si llegan muchos niños de golpe, él solito consigue más carpetas, abre otro salón y llama a otro profesor suplente. Cuando los niños se van, cierra el salón extra para no gastar luz. Todo automático." />

      <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
        La CNCF alberga proyectos críticos del ecosistema global. Aprende cómo estas herramientas conforman la espina dorsal de la infraestructura en la nube moderna y permiten crear sistemas resilientes.
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#326CE5' }}>Kubernetes (K8s)</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            El orquestador de contenedores por excelencia. K8s automatiza el despliegue, escalado y gestión de aplicaciones en contenedores en miles de nodos simultáneamente. 
            Utiliza un panel de control declarativo donde le dices "quiero 5 réplicas del frontend" y K8s se asegura de que existan.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#E6522C' }}>Prometheus & Grafana</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Prometheus es una base de datos de series temporales (TSDB) especializada en recolectar métricas de la infraestructura (CPU, RAM, HTTP errors) en tiempo real, scrapeando endpoints HTTP. Grafana se utiliza para visualizar estos datos en dashboards dinámicos.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#88229B' }}>Envoy Proxy</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Envoy es un proxy C++ de alto rendimiento diseñado para arquitecturas de Service Mesh (como Istio). Se encarga del balanceo de carga L7, terminación TLS, circuit breakers y reintentos automáticos, abstrayendo la complejidad de red del código de la aplicación.
          </p>
        </div>
      </div>
    </div>
  );
}
