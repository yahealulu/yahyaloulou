import { SectionType } from '../types';

interface NavigationProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const sections: SectionType[] = ['about', 'projects', 'resume', 'contact'];

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  return (
    <nav className="nav-buttons">
      {sections.map((section) => (
        <button
          key={section}
          className={`nav-button ${activeSection === section ? 'active' : ''}`}
          data-section={section}
          onClick={() => onSectionChange(section)}
        >
          {section}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;

