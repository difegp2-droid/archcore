import HelpPopover from '../../components/HelpPopover';
import EasyModeCard from '../../components/EasyModeCard';

export default function W3c() {
  return (
    <div className="fade-in">
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
        Estándares Web (W3C & Modern Web)
        <HelpPopover text="El W3C son las 'reglas de tránsito' de Internet. Son los que deciden cómo funciona el HTML, el CSS y cómo tu navegador de internet (como Chrome o Safari) debe mostrar las páginas web sin que se rompan." />
      </h1>

      <EasyModeCard description="¿Sabes cómo el Ministerio de Educación pone reglas sobre cómo de grandes deben ser las carpetas o cuánta luz debe haber en el aula para que cualquier niño en el país pueda aprender igual? El W3C es exactamente eso: ponen las reglas para que una página de internet se vea bien y funcione igual si la abres en tu celular, en la laptop, o en un televisor inteligente." />

      <p style={{ fontSize: '1.1rem', color: 'var(--text-body)', marginBottom: '2rem', lineHeight: 1.8 }}>
        El Consorcio de la World Wide Web (W3C) desarrolla estándares y directrices que garantizan el crecimiento a largo plazo de la Web. No solo es HTML y CSS, sino protocolos de comunicación avanzados.
      </p>

      <div style={{ display: 'grid', gap: '2rem' }}>
        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#654FF0' }}>WebAssembly (Wasm)</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Un formato de instrucciones binarias para una máquina virtual basada en pila. Wasm está diseñado como un destino portátil para la compilación de lenguajes de alto nivel como C/C++/Rust, permitiendo ejecutar software pesado (como editores de video o simuladores 3D) a velocidades casi nativas en el navegador.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#1E429F' }}>WebSockets</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Provee un canal de comunicación bidireccional y full-duplex sobre una única conexión TCP. A diferencia de HTTP (que es request/response estricto), WebSockets permite a los servidores hacer "push" de datos en tiempo real al cliente, esencial para chats, juegos y trading financiero.
          </p>
        </div>

        <div style={{ backgroundColor: 'var(--bg-sec)', padding: '2rem', borderRadius: '1rem', border: '1px solid var(--border)' }}>
          <h3 style={{ marginBottom: '1rem', color: '#06B6D4' }}>WebRTC</h3>
          <p style={{ color: 'var(--text-body)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Web Real-Time Communication. Permite la transmisión de voz, video y datos genéricos directamente entre navegadores (Peer-to-Peer) sin necesidad de que el flujo de video pase por un servidor central.
          </p>
        </div>
      </div>
    </div>
  );
}
