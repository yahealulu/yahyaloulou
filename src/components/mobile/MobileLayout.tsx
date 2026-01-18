import { ReactNode } from 'react';
import { SectionType } from '../../types';
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
        <h1 className="mobile-header-name">Yahya LouLou</h1>
        <p className="mobile-header-title">Web Developer</p>
      </header>
      
      <main className="mobile-content">
        {children}
      </main>
      
      <MobileNavigation 
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
    </div>
  );
};

export default MobileLayout;
