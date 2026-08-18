export default function BentoGrid() {
  return (
    <section id="arquitectura" className="section section-alt">
      <div className="container">
        <div className="section-header slide-up">
          <h2>Pilares de Arquitectura</h2>
          <p>
            Construimos sobre la abstracción de infraestructura. Las aplicaciones
            modernas combinan microservicios, funciones perimetrales y renderizado
            híbrido para escalar de 1 a 1,000,000 de usuarios sin fricción.
          </p>
        </div>

        <div className="bento-grid">
          <div className="bento-card card-large fade-in">
            <div className="card-icon icon-purple">µ</div>
            <h3>Monolitos vs Microservicios</h3>
            <p>
              La evolución de bases de código unificadas a ecosistemas
              distribuidos. Los microservicios permiten a equipos gigantescos
              escalar partes independientes del sistema (ej. facturación
              separado de autenticación). Requieren una orquestación compleja
              pero ofrecen resiliencia total frente a fallos aislados.
            </p>
            <div className="code-snippet">
              {`// Comunicación inter-servicio vía API Gateway
const response = await gateway.fetch('/api/v2/users', {
  headers: { 'X-Microservice-Auth': token }
});`}
            </div>
          </div>

          <div className="bento-card fade-in">
            <div className="card-icon icon-cyan">⚡</div>
            <h3>Serverless & Edge</h3>
            <p>
              Ejecución de lógica de negocio directamente en nodos perimetrales
              (edge) distribuidos globalmente, reduciendo la latencia a
              milisegundos y eliminando la gestión de servidores.
            </p>
            <div className="tags">
              <span className="tag">Edge Functions</span>
              <span className="tag">V8 Isolates</span>
              <span className="tag">Zero Cold-Start</span>
            </div>
          </div>

          <div className="bento-card fade-in">
            <div className="card-icon icon-blue">❄️</div>
            <h3>Renderizado Híbrido</h3>
            <p>
              Combinación de SSR (Server-Side Rendering) para SEO y CSR
              (Client-Side Rendering) para interactividad. La hidratación
              progresiva domina el frontend moderno.
            </p>
            <div className="tags">
              <span className="tag">React Server Components</span>
              <span className="tag">Partial Hydration</span>
            </div>
          </div>

          <div className="bento-card card-wide fade-in">
            <div className="card-icon icon-purple">🔄</div>
            <h3>Sistemas Event-Driven (MQ)</h3>
            <p>
              Desacoplamiento de servicios mediante colas de mensajes y
              eventos asíncronos. Kafka, RabbitMQ o SQS actúan como el sistema
              nervioso central de la plataforma.
            </p>
            <div className="tags">
              <span className="tag">Pub/Sub</span>
              <span className="tag">Event Sourcing</span>
              <span className="tag">Dead Letter Queues</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
