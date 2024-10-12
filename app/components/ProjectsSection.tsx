import Projects from './Projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Meus Projetos</h2>
      <div className="max-h-[600px] overflow-y-auto p-4">
        <Projects />
      </div>
    </section>
  );
}
