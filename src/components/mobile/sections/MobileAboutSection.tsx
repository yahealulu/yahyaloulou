import { aboutProfile } from '../../../data/about';

const MobileAboutSection = () => {
  return (
    <div className="mobile-section">
      <div className="mobile-card hero-card">
        <h2 className="mobile-card-title">About Me</h2>
        <p className="mobile-card-text">{aboutProfile.profile}</p>
      </div>

      <div className="mobile-card">
        <h3 className="mobile-card-subtitle">Technical Skills</h3>
        <div className="skills-grid">
          {aboutProfile.technicalSkills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mobile-card">
        <h3 className="mobile-card-subtitle">Soft Skills</h3>
        <div className="skills-grid">
          {aboutProfile.softSkills.map((skill) => (
            <span key={skill} className="skill-chip">
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="mobile-card">
        <a
          href="/assets/cv.pdf"
          className="mobile-download-cv"
          download="Yahya_Loulou_CV.pdf"
          type="application/pdf"
        >
          <span className="download-icon">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
            </svg>
          </span>
          Download CV
        </a>
      </div>
    </div>
  );
};

export default MobileAboutSection;
