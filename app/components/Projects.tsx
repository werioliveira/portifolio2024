'use client'
import Image from "next/image";
import SkeletonProjects from "./SkeletonProjects";
import { useEffect, useState } from "react";
import projectsJson from '../projectsJson.json'

const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const json = projectsJson.projects;
  let link = 'https://via.placeholder.com/400x400'
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
      return(

        projects.map((project)=>(
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
              >
                <div className="relative w-full h-[400px] pb-[50%]"> {/* Proporção de 2:1 (400x200) */}
                  <Image
                    src={
                      projectsJson.projects.find((json) => json.name === project.name)?.image || link
                    }
                    alt={project.title}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{project.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={project.html_url}
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>
          ))
                            
      )

        
    
}
export default Projects;