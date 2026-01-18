const AboutSection = () => {
  return (
    <>
      <h2>whoami</h2>
      <p>$ cat about.json</p>
      <p>{'{'}</p>
      <p>  "name": "Yahya Loulou",</p>
      <p>  "title": "Front-End Web Developer",</p>
      <p>  "skills": ["HTML", "CSS (Bootstrap)", "JavaScript", "React", "Next.js", "Python", "C++", "C#", "SQL", "Redux", "WordPress", "Tailwind", "GSAP", "Framer Motion", "Three.js"],</p>
      <p>  "softSkills": ["Problem-Solving", "Teamwork", "Communication", "Time Management", "Adaptability", "Critical Thinking", "Creativity", "Attention to Detail", "Leadership", "Continuous Learning"],</p>
      <p>  "passion": "Passionate Software Developer with 6+ years of programming experience and over 3 years specializing in Frontend Development using React, Next.js, and modern JavaScript frameworks. Skilled in creating responsive, user-friendly applications with clean code and performance in mind."</p>
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
            <path fill="currentColor" d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
        </span>
        Download CV
      </a>
    </>
  );
};

export default AboutSection;

