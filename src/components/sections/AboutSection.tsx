import { aboutProfile } from '../../data/about';

const AboutSection = () => {
  const skillsJson = JSON.stringify(aboutProfile.technicalSkills);
  const softSkillsJson = JSON.stringify(aboutProfile.softSkills);

  return (
    <>
      <h2>whoami</h2>
      <p>$ cat about.json</p>
      <p>{'{'}</p>
      <p>  "name": "{aboutProfile.name}",</p>
      <p>  "title": "{aboutProfile.title}",</p>
      <p>  "skills": {skillsJson},</p>
      <p>  "softSkills": {softSkillsJson},</p>
      <p>  "profile": "{aboutProfile.profile}"</p>
      <p>{'}'}</p>
      <p>$ wget resume.pdf</p>

      <a
        href="/assets/cv.pdf"
        className="download-cv"
        download="Yahya_Loulou_CV.pdf"
        type="application/pdf"
      >
        <span className="download-icon">
          <svg viewBox="0 0 24 24" width="18" height="18">
            <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
          </svg>
        </span>
        Download CV
      </a>
    </>
  );
};

export default AboutSection;
