import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BlobBackground from '@/components/ui/BlobBackground';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <BlobBackground />
      <Navbar />

      <main className="relative z-10 w-full pl-6 pr-20 md:px-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
