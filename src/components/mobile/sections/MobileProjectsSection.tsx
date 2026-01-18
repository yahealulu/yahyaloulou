import { useState } from 'react';
import { FrameworkType } from '../../../types';
import { reactProjects, nextjsProjects } from '../../../data/projects';
import ImageModal from '../../projects/ImageModal';

const MobileProjectsSection = () => {
  const [activeFramework, setActiveFramework] = useState<FrameworkType>('react');
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const currentProjects = activeFramework === 'react' ? reactProjects : nextjsProjects;

  const handleImageClick = (images: string[], startIndex: number) => {
    setModalState({
      isOpen: true,
      images,
      currentIndex: startIndex,
    });
  };

  const handleCloseModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  const handleModalNavigate = (direction: 'prev' | 'next') => {
    setModalState(prev => {
      const newIndex = direction === 'next'
        ? (prev.currentIndex + 1) % prev.images.length
        : (prev.currentIndex - 1 + prev.images.length) % prev.images.length;
      return { ...prev, currentIndex: newIndex };
    });
  };

  return (
    <div className="mobile-section">
      <div className="mobile-card">
        <h2 className="mobile-card-title">Projects</h2>
        
        <div className="mobile-framework-tabs">
          <button
            className={`mobile-framework-tab ${activeFramework === 'react' ? 'active' : ''}`}
            onClick={() => {
              setActiveFramework('react');
              setExpandedProject(null);
            }}
          >
            React
          </button>
          <button
            className={`mobile-framework-tab ${activeFramework === 'nextjs' ? 'active' : ''}`}
            onClick={() => {
              setActiveFramework('nextjs');
              setExpandedProject(null);
            }}
          >
            Next.js
          </button>
        </div>
      </div>

      <div className="mobile-projects-grid">
        {currentProjects.map((project) => (
          <div key={project.id} className="mobile-project-card">
            <div 
              className="mobile-project-image-container"
              onClick={() => handleImageClick(project.images, 0)}
            >
              <img 
                src={project.images[0]} 
                alt={project.title}
                className="mobile-project-image"
              />
              <div className="mobile-project-image-overlay">
                <span>View Gallery</span>
              </div>
            </div>
            
            <div className="mobile-project-content">
              <h3 className="mobile-project-title">{project.title}</h3>
              
              <div className="mobile-project-tech">
                {project.techTags.slice(0, 3).map((tech, index) => (
                  <span key={index} className="mobile-tech-tag">
                    {tech}
                  </span>
                ))}
                {project.techTags.length > 3 && (
                  <span className="mobile-tech-tag">+{project.techTags.length - 3}</span>
                )}
              </div>

              {expandedProject === project.id ? (
                <div className="mobile-project-expanded">
                  <p className="mobile-project-description">{project.description}</p>
                  
                  <div className="mobile-project-features">
                    <h4>Features:</h4>
                    <ul>
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mobile-project-links">
                    {project.links.map((link, index) => (
                      <a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mobile-project-link"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>

                  <button
                    className="mobile-project-toggle"
                    onClick={() => setExpandedProject(null)}
                  >
                    Show Less
                  </button>
                </div>
              ) : (
                <button
                  className="mobile-project-toggle"
                  onClick={() => setExpandedProject(project.id)}
                >
                  View Details
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {modalState.isOpen && (
        <ImageModal
          images={modalState.images}
          currentIndex={modalState.currentIndex}
          onClose={handleCloseModal}
          onNavigate={handleModalNavigate}
        />
      )}
    </div>
  );
};

export default MobileProjectsSection;
