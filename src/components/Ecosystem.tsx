export default function Ecosystem() {
  return (
    <section id="ecosistema" className="section section-alt">
      <div className="container">
        <div className="section-header slide-up">
          <h2>Aplicaciones de Nueva Generación</h2>
          <p>
            Cómo se estructuran los proyectos de software que dominan el mercado tecnológico moderno.
          </p>
        </div>

        <div className="ecosystem-container">
          <div className="eco-image-wrapper fade-in">
            <img src="/assets/ecosystem_teal.jpg" alt="Ecosistema de Redes y Dispositivos" className="eco-image" />
          </div>
          
          <div className="eco-list">
            <div className="eco-item fade-in">
              <div className="eco-item-icon">📱</div>
              <div>
                <h3>Client-Side Apps (SPA/PWA)</h3>
                <p>Aplicaciones que viven en el navegador del usuario. Escritas en React o Vue, descargan el código una vez y se comunican con el servidor vía APIs JSON, ofreciendo experiencias fluidas sin recargar la página (Ej. Gmail, Spotify Web).</p>
              </div>
            </div>

            <div className="eco-item fade-in">
              <div className="eco-item-icon">🗄️</div>
              <div>
                <h3>API REST & GraphQL Backend</h3>
                <p>La capa lógica invisible. Construidas con Node.js, Go o Python, estas APIs son el puente seguro entre los datos crudos en la base de datos y lo que el usuario ve en su pantalla, aplicando todas las reglas de negocio.</p>
              </div>
            </div>

            <div className="eco-item fade-in">
              <div className="eco-item-icon">☁️</div>
              <div>
                <h3>CI/CD & Cloud Infrastructure</h3>
                <p>Integración y Despliegue Continuo. Cada cambio en el código pasa por pruebas automáticas (GitHub Actions) y se despliega directamente en la nube (AWS, Vercel) mediante contenedores Docker y Kubernetes en minutos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
