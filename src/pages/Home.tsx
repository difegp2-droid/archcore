import Hero from '../components/Hero';
import BentoGrid from '../components/BentoGrid';
import Timeline from '../components/Timeline';
import Ecosystem from '../components/Ecosystem';
import Table from '../components/Table';
import CTA from '../components/CTA';
import HelpPopover from '../components/HelpPopover';
import EasyModeCard from '../components/EasyModeCard';
import useFadeIn from '../hooks/useFadeIn';

export default function Home() {
  useFadeIn();

  return (
    <>
      {/* Floating Help for the entire landing page */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10 }}>
        <HelpPopover text="¡Hola! Esta es la página principal. Aquí verás un resumen de todo lo que ArchCore puede ofrecerte para aprender sobre arquitectura de software de forma visual e interactiva." />
      </div>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '1rem 2rem 0' }}>
        <EasyModeCard description="¡Hola futura profesora! Imagina que esta página web es como un Nido gigante. Aquí adentro hay salones, directoras, reglas de seguridad y juegos. En cada página te dejaré una notita con este foco 💡 explicándote cómo funciona todo usando ejemplos de tu nido. ¡Bienvenida!" />
      </div>
      <Hero />
      <BentoGrid />
      <Timeline />
      <Ecosystem />
      <Table />
      <CTA />
    </>
  );
}
