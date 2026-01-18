import { Project } from '../../types';

interface ProjectTabsProps {
  projects: Project[];
  activeProjectId: string;
  onProjectChange: (projectId: string) => void;
}

const ProjectTabs = ({ projects, activeProjectId, onProjectChange }: ProjectTabsProps) => {
  return (
    <div className="project-tabs">
      {projects.map((project) => (
        <button
          key={project.id}
          className={`project-tab ${activeProjectId === project.id ? 'active' : ''}`}
          data-project={project.id}
          onClick={() => onProjectChange(project.id)}
        >
          {project.title.split(' - ')[0].split(' ⭐')[0]}
        </button>
      ))}
    </div>
  );
};

export default ProjectTabs;

