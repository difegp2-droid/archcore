export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content fade-in">
          <div className="badge">
            <span className="badge-dot"></span>
            ArchCore System v2.0
          </div>
          <h1 className="hero-title">
            El Ecosistema de la <span className="text-gradient">Web Moderna</span>
          </h1>
          <p className="hero-subtitle">
            Arquitectura distribuida en tiempo real, interfaces hidratadas
            dinámicamente y computación perimetral de latencia ultra baja. 
            El futuro del desarrollo de software a escala global.
          </p>
          <div className="hero-buttons">
            <a href="#arquitectura" className="btn btn-primary">Ver Arquitectura</a>
            <a href="#documentacion" className="btn btn-outline">Leer Docs</a>
          </div>
        </div>
        
        <div className="hero-visual slide-up">
          <div className="hero-image-wrapper">
            <img src="/assets/hero_teal.jpg" alt="Arquitectura Web Abstracta" className="hero-image" />
          </div>
        </div>
      </div>
    </section>
  );
}
