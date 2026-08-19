import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function OpenSource() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        Open Source Data Tools
        <HelpPopover text="'Open Source' significa Código Abierto. Es software creado por la comunidad mundial que es gratuito y público. Es como si la receta de la Coca-Cola estuviera en internet y todos ayudaran a mejorarla." />
      </h1>

      <EasyModeCard description="'Open Source' es como si una profesora de inicial inventara un juego increíble para enseñar a sumar, y en vez de cobrar por él, sube las instrucciones gratis a internet. Miles de profesoras de todo el mundo lo descargan, le agregan colores nuevos, canciones y versiones mejoradas, y lo vuelven a subir gratis. Así, el juego original se vuelve perfecto gracias al trabajo de todas. ¡Así hacemos programas los ingenieros!" />

      <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
        El ecosistema Open Source impulsa la innovación. Descubre los motores de datos y colas de mensajería más utilizados por los arquitectos modernos para construir sistemas que soportan millones de operaciones.
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#DC382D' }}>Redis</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Almacén de estructura de datos en memoria ultrarrápido, usado como base de datos, caché y broker de mensajes. Ideal para reducir la carga de la base de datos principal, gestionar sesiones de usuario, o crear tableros de puntuaciones en tiempo real (Leaderboards).
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#231F20' }}>Apache Kafka</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Plataforma de streaming de eventos distribuida capaz de manejar trillones de eventos al día. Kafka proporciona pipelines de datos en tiempo real de baja latencia. Es el estándar de oro para la comunicación asíncrona entre microservicios (Event-Driven Architecture).
          </p>
        </div>
        
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h4 style={{ color: '#336791', marginBottom: '1rem', fontSize: '1.25rem' }}>PostgreSQL</h4>
          <p style={{ color: 'var(--text-body)', lineHeight: 1.6 }}>
            El sistema de base de datos relacional open source más avanzado del mundo. Cumple estrictamente con ACID, posee un sistema de extensiones masivo (como PostGIS o pgvector para IA) y maneja datos no estructurados con soporte JSONB nativo.
          </p>
        </div>
      </div>
    </div>
  );
}
