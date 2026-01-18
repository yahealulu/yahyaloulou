import { SectionType } from '../../types';

interface MobileNavigationProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
}

const sections: { id: SectionType; label: string; icon: string }[] = [
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'projects', label: 'Projects', icon: '💼' },
  { id: 'resume', label: 'Resume', icon: '📄' },
  { id: 'contact', label: 'Contact', icon: '📧' },
];

const MobileNavigation = ({ activeSection, onSectionChange }: MobileNavigationProps) => {
  return (
    <nav className="mobile-nav">
      {sections.map((section) => (
        <button
          key={section.id}
          className={`mobile-nav-item ${activeSection === section.id ? 'active' : ''}`}
          onClick={() => onSectionChange(section.id)}
          aria-label={section.label}
        >
          <span className="mobile-nav-icon">{section.icon}</span>
          <span className="mobile-nav-label">{section.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default MobileNavigation;
