export default function Timeline() {
  return (
    <section id="ciclo" className="section">
      <div className="container">
        <div className="section-header slide-up">
          <h2>El Ciclo de Vida de una Petición</h2>
          <p>
            ¿Qué sucede en los primeros 200 milisegundos desde que un usuario 
            hace clic hasta que ve la pantalla interactiva?
          </p>
        </div>

        <div className="timeline">
          <div className="timeline-step fade-in">
            <div className="step-number">1</div>
            <div className="timeline-content">
              <h4>Resolución DNS y Edge Cache</h4>
              <p>El navegador resuelve el dominio y se conecta al CDN más cercano. Si el contenido estático (HTML/CSS) está en caché, se sirve en &lt; 50ms.</p>
            </div>
          </div>
          
          <div className="timeline-step fade-in">
            <div className="step-number">2</div>
            <div className="timeline-content">
              <h4>API Gateway & Auth Proxy</h4>
              <p>Las peticiones dinámicas llegan al API Gateway. Se verifica el JWT (JSON Web Token), se aplican reglas de rate-limiting y se enruta la petición al microservicio correspondiente.</p>
            </div>
          </div>

          <div className="timeline-step fade-in">
            <div className="step-number">3</div>
            <div className="timeline-content">
              <h4>Modelado y Base de Datos</h4>
              <p>El servicio Backend consulta la base de datos (Ej. PostgreSQL para relacionales, o Redis/Memcached para respuestas ultra-rápidas en caché). Se serializan los datos.</p>
            </div>
          </div>

          <div className="timeline-step fade-in">
            <div className="step-number">4</div>
            <div className="timeline-content">
              <h4>Renderizado e Hidratación</h4>
              <p>El Frontend recibe el JSON. En aplicaciones SPA o SSR, React/Vue toma el control del DOM (Hidratación), convirtiendo los datos brutos en una interfaz gráfica totalmente interactiva.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
