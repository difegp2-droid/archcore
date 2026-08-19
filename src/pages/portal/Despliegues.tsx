import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function Despliegues() {
  const deployments = [
    { name: 'API Gateway (Kong)', region: 'us-east-1', status: 'healthy', version: 'v2.4.1', traffic: '12,450', latency: '45ms' },
    { name: 'Auth Service (OIDC)', region: 'eu-central-1', status: 'warning', version: 'v1.1.0', traffic: '8,200', latency: '180ms' },
    { name: 'Order Processing', region: 'ap-south-1', status: 'healthy', version: 'v3.0.2', traffic: '4,100', latency: '85ms' },
    { name: 'Payment Worker', region: 'us-east-1', status: 'danger', version: 'v1.0.5', traffic: '850', latency: '650ms' },
    { name: 'Database (Primary)', region: 'us-east-1', status: 'healthy', version: 'v15.2 (PG)', traffic: '1,200', latency: '5ms' },
  ];

  return (
    <div className="fade-in">
      <header style={{ marginBottom: '3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-dark)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Despliegues Activos
            <HelpPopover text="'Desplegar' significa agarrar el código que los programadores escribieron en su computadora y subirlo a los servidores públicos para que todos en el mundo puedan usarlo." />
          </h1>
          <p style={{ color: 'var(--text-body)' }}>Monitoreo en tiempo real de los clústeres y servicios en producción.</p>
        </div>
        <button className="btn btn-primary">Nuevo Despliegue</button>
      </header>

      <EasyModeCard description="Hacer un 'Despliegue' (Deployment) es como el Día de la Actuación Final en el nido. Los niños (los programadores) practicaron a escondidas por meses, pero hoy se abre el telón y todos los papás (los usuarios de internet) por fin pueden ver el resultado final en vivo." />

      <div className="bento-card" style={{ padding: '0', overflowX: 'auto', backgroundColor: 'var(--bg-sec)', borderRadius: '1rem', border: '1px solid var(--border)', overflow: 'hidden' }}>
        <table className="tech-table" style={{ margin: 0, width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg)' }}>
              <th style={{ padding: '1.5rem', fontWeight: 600 }}>Servicio / Container</th>
              <th style={{ padding: '1.5rem', fontWeight: 600 }}>Versión</th>
              <th style={{ padding: '1.5rem', fontWeight: 600 }}>Región</th>
              <th style={{ padding: '1.5rem', fontWeight: 600 }}>Estado</th>
              <th style={{ padding: '1.5rem', fontWeight: 600 }}>Req/s</th>
              <th style={{ padding: '1.5rem', fontWeight: 600 }}>P99 Latency</th>
            </tr>
          </thead>
          <tbody>
            {deployments.map((dep, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid var(--border)' }}>
                <td style={{ padding: '1.5rem', fontWeight: 500, color: 'var(--text-dark)' }}>{dep.name}</td>
                <td style={{ padding: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{dep.version}</td>
                <td style={{ padding: '1.5rem', color: 'var(--text-body)' }}>{dep.region}</td>
                <td style={{ padding: '1.5rem' }}>
                  <span className={`latency-badge ${dep.status === 'healthy' ? 'low' : dep.status === 'warning' ? 'medium' : 'high'}`} style={{ display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '1rem', fontSize: '0.8rem', fontWeight: 600, textTransform: 'uppercase' }}>
                    {dep.status === 'danger' ? 'Crítico' : dep.status === 'warning' ? 'Alta Carga' : 'Saludable'}
                  </span>
                </td>
                <td style={{ padding: '1.5rem', color: 'var(--text-body)' }}>{dep.traffic}</td>
                <td style={{ padding: '1.5rem', color: dep.status === 'danger' ? '#EF4444' : 'var(--text-body)' }}>{dep.latency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
