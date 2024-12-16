import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-emerald-950">
        <div className= "max-w-screen mx-auto px-4">
          <Navbar />
          <Hero />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;