'use client';
import Image from 'next/image';
import SkeletonProjects from './SkeletonProjects';
import { useEffect, useState } from 'react';
import projectsJson from '../projectsJson.json';
import { motion } from 'framer-motion';

interface Projects {
  id: number;
  title?: string;
  name: string;
  html_url: string;
  description?: string;
  technologies?: string[];
  homepage?: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [loading, setLoading] = useState(true);
  const json = projectsJson.projects;
  const link = 'https://via.placeholder.com/400x400';
  const [isFlipped, setIsFlipped] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/werioliveira/repos`, {
          next: { revalidate: 10 },
        });

        if (!res.ok) throw new Error('Erro ao buscar os projetos');

        const data = await res.json();
        setProjects(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <SkeletonProjects />; // Exibe skeleton enquanto carrega
  }

  if (!projects || projects.length === 0) {
    return <p className="text-center text-gray-600 dark:text-gray-300">Nenhum projeto encontrado.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => {
        const projectJson = json.find((json) => json.name === project.name);
        return (
          <div
            key={project.id}
            className="relative bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            style={{ perspective: '1000px' }}
            onMouseEnter={() => setIsFlipped((prevState) => ({ ...prevState, [project.id]: true }))}
            onMouseLeave={() => setIsFlipped((prevState) => ({ ...prevState, [project.id]: false }))}
          >
            <motion.div
              className="relative w-full h-96 preserve-3d cursor-pointer"
              animate={{ rotateY: isFlipped[project.id] ? 180 : 0 }}
              transition={{ duration: 0.6 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Frente do card */}
              <div className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden" style={{ backfaceVisibility: 'hidden' }}>
                <Image
                  src={projectJson?.image || link}
                  alt={project.name}
                  fill={true}
                  sizes="(max-width: 768px) 500px"
                  style={{ objectFit: 'contain', objectPosition: 'center' }}
                  className="rounded-lg"
                />
              </div>
              {/* Verso do card */}
              <div
                className="absolute inset-0 w-full h-full rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
                style={{ transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}
              >
                <div className="p-6 flex flex-col justify-center items-center h-full bg-gradient-to-b from-sky-600 to-blue-800 text-white">
                  <h3 className="text-2xl font-bold mb-4">{project.name || 'Título indisponível'}</h3>
                  <p className="mb-4">{project.description || 'Descrição indisponível'}</p>
                  {projectJson?.tecnologies && (
                    <ul className="mb-4 list-inside list-disc">
                      {projectJson.tecnologies.map((tech, index) => (
                        <li key={index} className="text-sm">{tech}</li>
                      ))}
                    </ul>
                  )}
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                  >
                    Ver Projeto
                  </a>
                  {project.homepage?
                    <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 mt-2"
                    >
                      Preview
                    </a>
                  :''}
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
