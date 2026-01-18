import { useState, useRef } from 'react';
import { FrameworkType } from '../../types';
import { reactProjects, nextjsProjects } from '../../data/projects';
import FrameworkTabs from '../projects/FrameworkTabs';
import ProjectTabs from '../projects/ProjectTabs';
import ProjectDetail from '../projects/ProjectDetail';
import ImageModal from '../projects/ImageModal';

const ProjectsSection = () => {
  const [activeFramework, setActiveFramework] = useState<FrameworkType>('react');
  const [activeProjectId, setActiveProjectId] = useState<string>('react4');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    images: string[];
    currentIndex: number;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });
  const contentRef = useRef<HTMLDivElement>(null);

  const currentProjects = activeFramework === 'react' ? reactProjects : nextjsProjects;

  const handleFrameworkChange = (framework: FrameworkType) => {
    setActiveFramework(framework);
    // Reset scroll position when switching frameworks
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    // Set the first project of the new framework as active
    const firstProject = framework === 'react' ? reactProjects[0] : nextjsProjects[0];
    setActiveProjectId(firstProject.id);
  };

  const handleProjectChange = (projectId: string) => {
    setActiveProjectId(projectId);
  };

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
    <>
      <h2>ls ./projects</h2>
      <div className="filter-container">
        <FrameworkTabs
          activeFramework={activeFramework}
          onFrameworkChange={handleFrameworkChange}
        />
        <div className="projects-container" ref={contentRef}>
          {/* React Projects */}
          <div className={`project-group ${activeFramework === 'react' ? 'active' : ''}`} data-framework="react">
            <ProjectTabs
              projects={reactProjects}
              activeProjectId={activeProjectId}
              onProjectChange={handleProjectChange}
            />
            <div className="project-details">
              {reactProjects.map((project) => (
                <ProjectDetail
                  key={project.id}
                  project={project}
                  isActive={activeProjectId === project.id && activeFramework === 'react'}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          </div>
          
          {/* Next.js Projects */}
          <div className={`project-group ${activeFramework === 'nextjs' ? 'active' : ''}`} data-framework="nextjs">
            <ProjectTabs
              projects={nextjsProjects}
              activeProjectId={activeProjectId}
              onProjectChange={handleProjectChange}
            />
            <div className="project-details">
              {nextjsProjects.map((project) => (
                <ProjectDetail
                  key={project.id}
                  project={project}
                  isActive={activeProjectId === project.id && activeFramework === 'nextjs'}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalState.isOpen && (
        <ImageModal
          images={modalState.images}
          currentIndex={modalState.currentIndex}
          onClose={handleCloseModal}
          onNavigate={handleModalNavigate}
        />
      )}
    </>
  );
};

export default ProjectsSection;

