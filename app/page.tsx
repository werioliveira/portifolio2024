import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import StarsCanvas from './components/StarBackground'
import { ScrollToTop } from './components/GoTop'
import { WhatsAppFloating } from './components/WhatsAppFloating'


export default function Home() {
  return (
    <div className="relative min-h-full bg-white dark:bg-gray-900 transition-colors duration-300 scrollbar w-full overflow-hidden">

      <ScrollToTop/>
      <div className='z-20' >

      <WhatsAppFloating/>
      </div>
      {/* StarsCanvas com z-index intermediário */}
      <StarsCanvas />
      
      {/* Navbar e outros elementos interativos acima do StarsCanvas */}
      <nav className="relative z-10 ">

      <Navbar  />
      </nav>
      
      <main className="relative z-10 px-4 my-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      <footer className="relative z-10">

      <Footer  />
      </footer>
      
    </div>
  );
}


