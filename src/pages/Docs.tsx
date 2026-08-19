import { BookOpen, Shield, FlaskConical } from 'lucide-react';

export default function Docs() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', display: 'flex', gap: '4rem', minHeight: '80vh' }}>
      <aside style={{ width: '250px', flexShrink: 0 }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Documentación</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>
            <BookOpen size={18} /> Patrones de Diseño
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-body)' }}>
            <Shield size={18} /> Seguridad Web
          </a>
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-body)' }}>
            <FlaskConical size={18} /> Testing Distribuido
          </a>
        </nav>
      </aside>
      
      <div style={{ flex: 1 }} className="fade-in">
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Patrones de Diseño</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
          En la web moderna, los patrones arquitectónicos determinan cómo el código escala.
          Aprende a implementar patrones como Event Sourcing, CQRS y Saga Pattern para sistemas altamente distribuidos.
        </p>
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem' }}>Saga Pattern</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem' }}>
            Gestiona transacciones largas y distribuidas dividiéndolas en una secuencia de transacciones locales.
          </p>
          <div className="code-snippet">
            {`function createOrderSaga(order) {
  try {
    const payment = await paymentService.process(order);
    const inventory = await inventoryService.reserve(order);
    return { status: 'CONFIRMED' };
  } catch (error) {
    await compensationService.rollback(order);
  }
}`}
          </div>
        </div>
      </div>
    </div>
  );
}
