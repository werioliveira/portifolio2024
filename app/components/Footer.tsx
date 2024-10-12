import { Github, Linkedin, PhoneCall } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 bg-opacity-50 dark:bg-gray-800 py-8  dark:bg-opacity-25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Weri Oliveira</h3>
            <p className="text-gray-600 dark:text-gray-300">Desenvolvedor Web Full Stack</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/werioliveira" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/weri-oliveira-81054a197/" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://wa.me/5574999467851" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-300">
              <PhoneCall className="h-6 w-6" />
              <span className="sr-only">Whatsapp</span>
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} Weri Oliveira. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}