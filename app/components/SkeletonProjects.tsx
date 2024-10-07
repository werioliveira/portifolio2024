const SkeletonProjects = () => {
    return (
      <>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <div className="relative w-full h-[400px] pb-[50%] bg-gray-300 dark:bg-gray-600 animate-pulse"></div> {/* Simula a imagem */}
            <div className="p-6">
              <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-2 animate-pulse"></div> {/* Simula o título */}
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-full mb-4 animate-pulse"></div> {/* Simula a descrição */}
              <div className="h-10 bg-blue-300 dark:bg-blue-700 rounded w-1/2 animate-pulse"></div> {/* Simula o botão */}
            </div>
          </div>
        ))}
      </>
    );
  };
  
  export default SkeletonProjects;