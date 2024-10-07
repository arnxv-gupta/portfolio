import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { motion } from "framer-motion";

const Projects = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeProjectIndex, setActiveProjectIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false); // State for minimizing the modal

  useEffect(() => {
    let interval;
    if (isModalOpen && activeProjectIndex !== null && !isMinimized) {
      interval = setInterval(() => {
        nextImage();
      }, 2000); 
    }
    return () => clearInterval(interval);
  }, [isModalOpen, activeProjectIndex, isMinimized]);

  const openModal = (projectIndex) => {
    setActiveProjectIndex(projectIndex);
    setCurrentImageIndex(0);
    setIsModalOpen(true);
    setIsMinimized(false); // Reset minimized state on open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveProjectIndex(null);
    setIsMinimized(false); // Reset minimized state when closing modal
  };

  const minimizeModal = () => {
    setIsMinimized(!isMinimized); // Toggle minimized state
  };

  const nextImage = () => {
    const totalImages = PROJECTS[activeProjectIndex].image.length;
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const prevImage = () => {
    const totalImages = PROJECTS[activeProjectIndex].image.length;
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Function to detect swipe gesture
  const handleTouchStart = (e) => {
    const touchStartX = e.touches[0].clientX;
    return touchStartX;
  };

  const handleTouchMove = (e) => {
    const touchStartX = handleTouchStart(e);
    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    // If swipe right, close modal
    if (touchDiff > 30) { // Adjust this value for swipe sensitivity
      closeModal();
    }
  };

  return (
    <div className='pb-4'>
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className='my-20 text-center text-4xl text-white'>Projects</motion.h2>
      <div>
        {PROJECTS.map((project, projectIndex) => (
          <div key={projectIndex} className='mb-8 flex flex-wrap lg:justify-center'>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className='w-full lg:w-1/4'>
              <div className="relative">
                <img
                  src={project.image[0]}
                  width={400} 
                  height={500} 
                  alt={project.title}
                  className='mb-6 pr-20 rounded cursor-pointer transition-transform duration-500 ease-in-out transform hover:scale-105'
                  onClick={() => openModal(projectIndex)}
                />
              </div>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className='w-full max-w-xl lg:2-3/4'>
              <h3 className='mb-2 font-semibold text-2xl text-white'>
                {project.title}
              </h3>
              <p className='mb-4 text-stone-400'>{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span className='mr-2 rounded bg-stone-900 p-2 text-sm font-medium text-stone-300' key={index}>
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>

      {isModalOpen && activeProjectIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div className="relative">
            {/* Close button with white "X" */}
            <button
              className="absolute top-4 right-4 text-white text-3xl hover:text-gray-400 transition-colors duration-300"
              onClick={closeModal} // Close modal on click
            >
              &times; {/* White "X" sign */}
            </button>

            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-400 transition-colors duration-300"
              onClick={prevImage}
            >
              &#9664; 
            </button>

            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-400 transition-colors duration-300"
              onClick={nextImage}
            >
              &#9654; 
            </button>

            {/* Only display the image when not minimized */}
            {!isMinimized && (
              <motion.img
                src={PROJECTS[activeProjectIndex].image[currentImageIndex]}
                width={800} 
                height={600}
                alt={PROJECTS[activeProjectIndex].title}
                className="rounded transition-opacity duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
