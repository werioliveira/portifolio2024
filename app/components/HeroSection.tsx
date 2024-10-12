import Image from 'next/image'
import Terra3D from './Terra3D'

export default function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-24">

      <div className="md:w-1/2 mt-8 md:mt-0">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Olá, eu sou <span className="text-blue-600 dark:text-blue-400">Weri Oliveira</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
          Desenvolvedor Web Full Stack apaixonado por criar experiências digitais incríveis.
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Ver Projetos
        </a>
      </div>
      <div className="md:w-2/3 flex justify-center">
      {/* 
      */}
      
        <div className="relative w-96 h-96 md:w-96 md:h-96 overflow-visible">
        <Terra3D/>
        </div>
      </div>
    </section>
  )
}