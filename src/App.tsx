import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Extended_Skills from '@/components/Extended_Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BlobBackground from '@/components/ui/BlobBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BlobBackground />
      <Navbar />

      <main className="relative z-10 w-full px-6 pb-24 md:pl-6 md:pr-20 md:pb-0 lg:px-0">
        <Hero />
        <About />
        <Skills />
        <Extended_Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
