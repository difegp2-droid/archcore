import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BentoGrid from './components/BentoGrid';
import Timeline from './components/Timeline';
import Ecosystem from './components/Ecosystem';
import Table from './components/Table';
import CTA from './components/CTA';
import Footer from './components/Footer';
import useFadeIn from './hooks/useFadeIn';

function App() {
  useFadeIn();

  return (
    <>
      <Navbar />
      <Hero />
      <BentoGrid />
      <Timeline />
      <Ecosystem />
      <Table />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
