import { ReactNode } from 'react';
import { SectionType } from '../../types';
import { aboutProfile } from '../../data/about';
import MobileNavigation from './MobileNavigation';

interface MobileLayoutProps {
  activeSection: SectionType;
  onSectionChange: (section: SectionType) => void;
  children: ReactNode;
}

const MobileLayout = ({ activeSection, onSectionChange, children }: MobileLayoutProps) => {
  return (
    <div className="mobile-layout">
      <header className="mobile-header">
        <h1 className="mobile-header-name">{aboutProfile.name}</h1>
        <p className="mobile-header-title">{aboutProfile.title}</p>
      </header>

      <main className="mobile-content">{children}</main>

      <MobileNavigation activeSection={activeSection} onSectionChange={onSectionChange} />
    </div>
  );
};

export default MobileLayout;
