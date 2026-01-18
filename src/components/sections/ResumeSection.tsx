import { experiences, education } from '../../data/resume';

const ResumeSection = () => {
  return (
    <>
      <h2>cat resume.txt</h2>
      
      <div className="resume-section">
        <h3>Professional Experience</h3>
        
        {experiences.map((exp, index) => (
          <div key={index} className="resume-item">
            <div className="resume-header">
              <h4>{exp.title}</h4>
              <span className="date">{exp.date}</span>
            </div>
            <div className="institution">{exp.institution}</div>
            <p className="description">{exp.description}</p>
          </div>
        ))}
      </div>

      <div className="resume-section">
        <h3>Education & Certifications</h3>
        
        {education.map((edu, index) => (
          <div key={index} className="resume-item">
            <div className="resume-header">
              <h4>{edu.title}</h4>
              <span className="date">{edu.date}</span>
            </div>
            <div className="institution">{edu.institution}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ResumeSection;

