import { Project } from '../types';

export const reactProjects: Project[] = [
  {
    id: 'react1',
    title: 'Ministry of Communications - Admin Dashboard',
    description:
      'Full-stack admin dashboard with role-based access control (Admin, Staff, Scanner) and JWT authentication for managing ministerial appointments.',
    features: [
      'Engineered analytics dashboard tracking KPIs (meetings, visitors, completion rates) and calendar scheduling with time-slot management',
      'Implemented English/Arabic multilingual support with dynamic RTL layout switching',
      'Built file upload/download system for meeting attachments',
      'Developed visitor check-in/check-out with real-time status tracking',
    ],
    techTags: ['React 19', 'TypeScript', 'Zustand', 'Tailwind CSS', 'Framer Motion', 'React Router v7', 'Axios', 'Vite'],
    links: [{ label: 'Live Site', url: 'https://meet.moct.gov.sy/admin' }],
    images: [
      '/myprojectsdata/react/admindashboard/1.png',
      '/myprojectsdata/react/admindashboard/2.png',
      '/myprojectsdata/react/admindashboard/3.png',
    ],
    framework: 'react',
  },
  {
    id: 'react2',
    title: 'Middle East Platform',
    description:
      'Multi-platform web application built with React 19 and TypeScript combining e-commerce marketplace, used-goods marketplace, video streaming, social networking, and digital asset trading.',
    features: [
      'E-Commerce Marketplace: scalable product catalog with categories, variants, bundles, and stock management',
      'Image optimization, lazy loading, and performance optimizations across platforms',
      'Real-time messaging and notifications via Pusher; video/voice calls via Agora RTC SDK',
      'Client-side video processing with FFmpeg for multimedia experiences',
    ],
    techTags: [
      'React 19',
      'TypeScript',
      'Vite',
      'React Router v7',
      'Zustand',
      'Axios',
      'Framer Motion',
      'GSAP',
      'Tailwind CSS',
      'Ant Design',
      'Material-UI',
      'i18next',
      'Pusher',
      'Agora RTC SDK',
      'FFmpeg',
      'React Leaflet',
      'Zod',
      'React Hook Form',
      'Lucide Icons',
      'Swiper',
      'Three.js',
      'Recharts',
      'SweetAlert2',
    ],
    links: [{ label: 'Live Site', url: 'https://uat.middleeastcommerce.net/en' }],
    images: [
      '/myprojectsdata/react/mobilestore/1.png',
      '/myprojectsdata/react/mobilestore/2.png',
      '/myprojectsdata/react/mobilestore/3.png',
    ],
    framework: 'react',
  },
  {
    id: 'react3',
    title: 'Astro Codez',
    description:
      'Premium animated portfolio with GSAP ScrollTrigger parallax, magnetic cursor effects, 3D ambient particle scenes, and glassmorphism UI components.',
    features: [
      'Achieved top SEO scores via React Helmet Async, JSON-LD structured data, Open Graph, and manual code-splitting with Vite',
      'Built cosmic-themed loading animation with GSAP-powered transitions',
      'Integrated contact form with EmailJS, Google reCAPTCHA v3, and real-time validation',
    ],
    techTags: ['React 18', 'TypeScript', 'Vite', 'GSAP', 'Lenis', 'Tailwind CSS', 'React Helmet Async', 'Three.js'],
    links: [{ label: 'Live Site', url: 'https://astrocodez.com/' }],
    images: [
      '/myprojectsdata/react/mobilestore/1.png',
      '/myprojectsdata/react/mobilestore/2.png',
      '/myprojectsdata/react/mobilestore/3.png',
    ],
    framework: 'react',
  },
  {
    id: 'react4',
    title: 'SetAlkel Dashboard',
    description:
      'Real-time order tracking and analytics dashboard with complete product management and protected routing.',
    features: [
      'Built scalable React application with TypeScript, Redux Toolkit, and React Query',
      'Implemented complete product management system with CRUD operations',
      'Role-based user administration with JWT authentication',
      'Integrated multi-language support with i18next and Firebase',
    ],
    techTags: [
      'React 18',
      'TypeScript',
      'Redux Toolkit',
      'Zustand',
      'Tailwind CSS',
      'Material-UI',
      'React Query',
      'Axios',
      'Vite',
      'i18next',
      'Firebase',
    ],
    links: [{ label: 'Live Site', url: 'https://setalkel.com/dashboard/' }],
    images: [
      '/myprojectsdata/react/setalkeldahsboard/1.png',
      '/myprojectsdata/react/setalkeldahsboard/2.png',
      '/myprojectsdata/react/setalkeldahsboard/3.png',
      '/myprojectsdata/react/setalkeldahsboard/4.png',
      '/myprojectsdata/react/setalkeldahsboard/5.png',
    ],
    framework: 'react',
  },
  {
    id: 'react5',
    title: 'Ministry of Communications - Visitor Website',
    description:
      'Public-facing appointment booking platform for the Minister of Communications with multi-step workflows and RTL support.',
    features: [
      'Implemented multi-step appointment booking with stepper navigation (Visitor Info → Meeting Details → Date/Time → Confirmation)',
      'Created visitor information collection system with attendee management',
      'Developed meeting type selection (standard and special meetings) with conditional workflows',
    ],
    techTags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'React Router v7', 'Axios', 'Vite'],
    links: [{ label: 'Live Site', url: 'https://meet.moct.gov.sy/' }],
    images: [
      '/myprojectsdata/react/admindashboard/1.png',
      '/myprojectsdata/react/admindashboard/2.png',
      '/myprojectsdata/react/admindashboard/3.png',
    ],
    framework: 'react',
  },
  {
    id: 'react6',
    title: 'One Door Website',
    description:
      'Corporate portfolio website with dynamic project showcase, team section, and API-driven content.',
    features: [
      'Created dynamic project showcase with API integration and detail pages',
      'Developed interactive team members section with pagination and featured members',
      'Added loading states, error handling, and skeleton loaders for better UX',
    ],
    techTags: [
      'React 18',
      'TypeScript',
      'Vite',
      'React Router',
      'TanStack React Query',
      'Axios',
      'Framer Motion',
      'Tailwind CSS',
      'shadcn/ui',
    ],
    links: [{ label: 'Live Site', url: 'https://onedoorit.com/' }],
    images: [
      '/myprojectsdata/react/mobilestore/1.png',
      '/myprojectsdata/react/mobilestore/2.png',
      '/myprojectsdata/react/mobilestore/3.png',
    ],
    framework: 'react',
  },
];

export const nextjsProjects: Project[] = [
  {
    id: 'next1',
    title: 'SetAlkel E-Commerce website',
    description:
      'Full e-commerce storefront supporting 6 languages (English, Arabic, French, Korean, Polish, Turkish) with RTL Arabic support for a frozen-foods company with international reach.',
    features: [
      'Integrated Firebase Authentication, real-time notifications (FCM), and Google Maps for geographic features',
      'Dual customer/agent access model with secure role-based flows',
      'Product catalog with categories, search, filtering, and order management from cart to checkout',
    ],
    techTags: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Firebase Auth', 'next-intl', 'TanStack Query', 'Google Maps API'],
    links: [{ label: 'Live Site', url: 'https://setalkel.com/' }],
    images: [
      '/myprojectsdata/nextjs/setalkelwebsite/1.png',
      '/myprojectsdata/nextjs/setalkelwebsite/2.png',
      '/myprojectsdata/nextjs/setalkelwebsite/3.png',
      '/myprojectsdata/nextjs/setalkelwebsite/4.png',
      '/myprojectsdata/nextjs/setalkelwebsite/5.png',
    ],
    framework: 'nextjs',
  },
  {
    id: 'next2',
    title: 'Car Game',
    description:
      'A Car Game using one HTML file with inline styles and JavaScript. Reach the finish line before time runs out.',
    features: [
      'To win the race you must reach the finish line before time runs out',
      '3D model for the car',
      'Open world driving',
    ],
    techTags: ['Vanilla JavaScript', 'HTML', 'Inline CSS'],
    links: [{ label: 'Live Demo', url: 'https://car-game-one-coral.vercel.app' }],
    images: [
      '/myprojectsdata/nextjs/cargame/1.png',
      '/myprojectsdata/nextjs/cargame/2.png',
      '/myprojectsdata/nextjs/cargame/3.png',
    ],
    framework: 'nextjs',
  },
];

export const allProjects = [...reactProjects, ...nextjsProjects];

export const getProjectsByFramework = (framework: 'react' | 'nextjs'): Project[] => {
  return framework === 'react' ? reactProjects : nextjsProjects;
};

export const getProjectById = (id: string): Project | undefined => {
  return allProjects.find((project) => project.id === id);
};
