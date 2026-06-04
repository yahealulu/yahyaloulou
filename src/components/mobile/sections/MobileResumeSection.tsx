import { experiences, education } from '../../../data/resume';

const MobileResumeSection = () => {
  return (
    <div className="mobile-section">
      <div className="mobile-card">
        <h2 className="mobile-card-title">Resume</h2>
      </div>

      <div className="mobile-card">
        <h3 className="mobile-card-subtitle">Professional Experience</h3>
        <div className="mobile-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="mobile-timeline-item">
              <div className="mobile-timeline-date">{exp.date}</div>
              <div className="mobile-timeline-content">
                <h4 className="mobile-timeline-title">{exp.title}</h4>
                <p className="mobile-timeline-institution">{exp.institution}</p>
                <p className="mobile-timeline-description">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mobile-card">
        <h3 className="mobile-card-subtitle">Education & Certifications</h3>
        <div className="mobile-timeline">
          {education.map((edu, index) => (
            <div key={index} className="mobile-timeline-item">
              <div className="mobile-timeline-date">{edu.date}</div>
              <div className="mobile-timeline-content">
                <div className="mobile-timeline-title-row">
                  <h4 className="mobile-timeline-title">{edu.title}</h4>
                  {edu.url && (
                    <a
                      href={edu.url}
                      className="cert-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View certificate: ${edu.title}`}
                    >
                      View certificate
                    </a>
                  )}
                </div>
                <p className="mobile-timeline-institution">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileResumeSection;
