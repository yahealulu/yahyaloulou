import { useState, useEffect, useRef } from 'react';
import { Project } from '../../types';
import ImageCarousel from './ImageCarousel';

interface ProjectDetailProps {
  project: Project;
  isActive: boolean;
  onImageClick: (images: string[], startIndex: number) => void;
}

const ProjectDetail = ({ project, isActive, onImageClick }: ProjectDetailProps) => {
  const [transitionClass, setTransitionClass] = useState('');
  const detailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      setTransitionClass('transitioning-in');
      const timer = setTimeout(() => {
        setTransitionClass('active');
        // Smooth scroll to the selected project
        detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }, 50);
      return () => clearTimeout(timer);
    } else {
      setTransitionClass('');
    }
  }, [isActive]);

  if (!isActive && !transitionClass) {
    return null;
  }

  return (
    <div
      ref={detailRef}
      className={`project-detail ${transitionClass}`}
      id={project.id}
      style={{ display: isActive || transitionClass ? 'block' : 'none' }}
    >
      <div className="project-header">
        <h3>{project.title}</h3>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <div className="project-preview">
        <ImageCarousel
          images={project.images}
          projectTitle={project.title}
          onImageClick={(startIndex) => onImageClick(project.images, startIndex)}
        />
        <div className="project-description">
          <p>{project.description}</p>
          <ul>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <div className="project-tech">
            {project.techTags.map((tag) => (
              <span key={tag} className="tech-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;

