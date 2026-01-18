import { useState, useEffect, useCallback } from 'react';
import { SectionType } from './types';
import { useIsMobile } from './hooks/useIsMobile';
import IntroOverlay from './components/IntroOverlay';
import Particles from './components/Particles';
import Navigation from './components/Navigation';
import HexPanel from './components/HexPanel';
import AboutSection from './components/sections/AboutSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ResumeSection from './components/sections/ResumeSection';
import ContactSection from './components/sections/ContactSection';
import MobileLayout from './components/mobile/MobileLayout';
import MobileAboutSection from './components/mobile/sections/MobileAboutSection';
import MobileProjectsSection from './components/mobile/sections/MobileProjectsSection';
import MobileResumeSection from './components/mobile/sections/MobileResumeSection';
import MobileContactSection from './components/mobile/sections/MobileContactSection';

function App() {
  const isMobile = useIsMobile();
  const [introComplete, setIntroComplete] = useState(false);
  const [introFadeOut, setIntroFadeOut] = useState(false);
  const [portfolioVisible, setPortfolioVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>('about');
  const [previousSection, setPreviousSection] = useState<SectionType | null>(null);

  // Handle intro animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFadeOut(true);
      setPortfolioVisible(true);
      
      // Wait for fade out animation to complete
      setTimeout(() => {
        setIntroComplete(true);
      }, 800);
    }, 2500); // Wait for 2.5 seconds before transitioning

    return () => clearTimeout(timer);
  }, []);

  // Handle section change with animation
  const handleSectionChange = useCallback((section: SectionType) => {
    if (section === activeSection) return;
    
    if (isMobile) {
      // Mobile: instant change
      setActiveSection(section);
    } else {
      // Desktop: animated change
      setPreviousSection(activeSection);
      setTimeout(() => {
        setActiveSection(section);
        setPreviousSection(null);
      }, 400);
    }
  }, [activeSection, isMobile]);

  // Render mobile layout
  if (isMobile) {
    return (
      <>
        {/* Intro Overlay */}
        {!introComplete && (
          <IntroOverlay fadeOut={introFadeOut} />
        )}

        {/* Mobile Portfolio */}
        <div className={`mobile-portfolio-space ${portfolioVisible ? 'visible' : ''}`}>
          <MobileLayout
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          >
            {activeSection === 'about' && <MobileAboutSection />}
            {activeSection === 'projects' && <MobileProjectsSection />}
            {activeSection === 'resume' && <MobileResumeSection />}
            {activeSection === 'contact' && <MobileContactSection />}
          </MobileLayout>
        </div>
      </>
    );
  }

  // Render desktop layout
  return (
    <>
      {/* Intro Overlay */}
      {!introComplete && (
        <IntroOverlay fadeOut={introFadeOut} />
      )}

      {/* Main Portfolio */}
      <div className={`portfolio-space ${portfolioVisible ? 'visible' : ''}`}>
        <Particles />
        <div className="hex-container">
          <HexPanel 
            id="about" 
            isActive={activeSection === 'about' && previousSection !== 'about'}
          >
            <AboutSection />
          </HexPanel>
          
          <HexPanel 
            id="projects" 
            isActive={activeSection === 'projects' && previousSection !== 'projects'}
          >
            <ProjectsSection />
          </HexPanel>
          
          <HexPanel 
            id="resume" 
            isActive={activeSection === 'resume' && previousSection !== 'resume'}
          >
            <ResumeSection />
          </HexPanel>
          
          <HexPanel 
            id="contact" 
            isActive={activeSection === 'contact' && previousSection !== 'contact'}
          >
            <ContactSection />
          </HexPanel>
        </div>
        
        <Navigation 
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
    </>
  );
}

export default App;

