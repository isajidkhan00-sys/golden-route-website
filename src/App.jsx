import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import CTABanner from './components/sections/CTABanner';
import About from './components/sections/About';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import FloatingWhatsApp from './components/ui/FloatingWhatsApp';

// ==========================================================================
// APP — page assembly. This is the ONLY file you need to touch to add,
// remove, or reorder a section on the homepage.
//
// To remove a section: delete its line below (and its import above).
// To add a section: build it in src/components/sections/, import it,
//                    drop <YourSection /> wherever you want it to appear.
// To reorder: just move the lines.
// ==========================================================================

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <Process />
        <CTABanner />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      <FloatingWhatsApp />
    </>
  );
}

export default App;
