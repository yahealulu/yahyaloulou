import { Experience, Education } from '../types';

export const experiences: Experience[] = [
  {
    title: 'AI/RAG Systems Intern',
    date: 'April 2026 - June 2026',
    institution: 'Accordev AI, Damascus, Syria',
    description:
      '• Built a production RAG pipeline for "Syria Doctors" platform using real-world data, covering the full ML lifecycle: data collection, cleaning, chunking, and embedding with Google/HuggingFace models\n' +
      '• Stored and queried vector embeddings using ChromaDB, integrated Groq LLM API for fast inference, achieving low-latency AI responses\n' +
      '• Delivered a full-stack AI application with a React frontend and FastAPI backend, enabling users to query doctor data via natural language',
  },
  {
    title: 'Front-End Team Lead',
    date: 'October 2025 - April 2026',
    institution: 'Middle East, Beirut, Lebanon-USA',
    description:
      '• Led a frontend team of 5 engineers across a multi-platform ecosystem (e-commerce, used-goods marketplace, video streaming, social network, digital asset trading), delivering all 5 platforms on schedule\n' +
      '• Architected a reusable component system in React 19 + TypeScript that reduced feature development time by ~30% and maintained consistency across platforms\n' +
      '• Integrated real-time capabilities (Pusher messaging, Agora RTC video/voice calls) and client-side video processing with FFmpeg, enabling seamless multimedia experiences for 10,000+ potential users\n' +
      '• Established code review standards and pull-request workflows, reducing bug escape rate by ~40% in production releases\n' +
      '• Collaborated with backend, design, and product teams across 3 time zones to align technical deliverables with business milestones',
  },
  {
    title: 'React, Next.js Front-End Web Developer',
    date: 'December 2024 - September 2025',
    institution: 'One Door company, Damascus, Syria',
    description:
      '• Engineered 3+ enterprise web platforms for clients including the Syrian Ministry of Communications, achieving 90+ Google Lighthouse performance scores\n' +
      '• Built a multi-language corporate website (English, Arabic, Turkish) with React 18, TypeScript, and TanStack React Query, supporting full RTL layout and server-side data fetching\n' +
      '• Built and optimized the company\'s main website with a focus on performance, scalability, and UI consistency\n' +
      '• Delivered responsive, pixel-perfect UI components with Tailwind CSS and Framer Motion, reducing client design-revision cycles by ~50%',
  },
  {
    title: 'React, Next.js Front-End Web Developer',
    date: 'October 2023 - November 2024',
    institution: 'Noname company, Syria-Qatar',
    description:
      '• Delivered 4+ client-facing web applications with GPU-accelerated animations (GSAP ScrollTrigger, Framer Motion, Three.js 3D scenes)\n' +
      '• Implemented server-side rendering and static generation strategies that improved page load speed by ~45% compared to the client\'s prior solution',
  },
  {
    title: 'Backend Odoo Developer',
    date: 'December 2022 - August 2023',
    institution: 'Noptechs, Istanbul, Turkey',
    description:
      '• Developed and customized 10+ Odoo modules (sales, inventory, accounting) for enterprise clients, improving operational efficiency and reducing manual workflows by ~35%\n' +
      '• Integrated Odoo with 5+ third-party APIs and systems, streamlining business processes and cutting manual data entry by ~60%\n' +
      '• Optimized database queries and backend logic, achieving ~25% faster system response times on high-volume datasets\n' +
      '• Contributed to the company\'s Odoo Gold Partner status through high-quality technical delivery and long-term client retention',
  },
  {
    title: 'IT support specialist',
    date: 'November 2021 - June 2022',
    institution: 'house of colors - Syria, Damascus, Syria',
    description:
      '• Maintained and supported printing systems and mobile applications for a design company, achieving 99%+ uptime on critical production hardware\n' +
      '• Assisted in deploying a mobile printing services application, contributing to a 20% improvement in customer order turnaround time',
  },
];

export const education: Education[] = [
  {
    title: 'Bachelor of Information Technology Engineering',
    date: 'April 2019 - Present',
    institution: 'Syrian Virtual University, Damascus, Syria - Specialized in AI Machine Learning',
  },
  {
    title: 'Building website using WordPress',
    date: 'August 2023',
    institution: 'Mamdouh Kaldas, Edrak platform',
    url: 'https://drive.google.com/file/d/17SFEbafI5F8jAow3QHlIjOFIxMX0W-dY/view?usp=sharing',
  },
  {
    title: 'Front End Developer Certificate',
    date: 'May 2022',
    institution: 'Meta, Coursera platform',
  },
  {
    title: 'CEH V11',
    date: 'May 2021',
    institution: 'Hani alsayes coach',
  },
];
