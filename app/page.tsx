import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 scrollbar">
      <Navbar />
      <main className="px-4 my-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}