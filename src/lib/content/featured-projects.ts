import { FeaturedProjectsSectionType } from '@/lib/types/sections';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      name: 'Mai HRMS',
      description:
        'AI-Powered HR Platform (iOS, Android & Web) — dual-platform HRMS with role-based dashboards, real-time attendance, and LLM-powered automated activity summaries.',
      tasks:
        'Delivered dual-platform HRMS (React Native mobile + React.js web) with role-based dashboards, real-time attendance UI, and LLM-powered automated activity summaries. Implemented AI workflow automation — intelligent data presentation and real-time WebSocket-driven payroll and leave management screens.',
      url: 'https://client.maihrms.com/',
      img: '/images/maihrms.png',
      tags: ['React Native', 'React.js', 'TypeScript', 'WebSockets', 'Redux Toolkit', 'React Query'],
    },
    {
      name: 'Kabutus',
      description:
        'AI Brand & Creative Automation Platform — generative logo, image ad, and video ad workflows powered by OpenAI API with a browser-based video editor.',
      tasks:
        'Built AI-powered creative platform integrating OpenAI API for generative logo, image ad, and video ad workflows with natural language prompt pipelines and real-time visual previews. Engineered browser-based video editor UI and AI-driven brand generation flows using Next.js, TypeScript, and Framer Motion.',
      url: 'https://kabutus.com/',
      img: '/images/kabutus.png',
      tags: ['Next.js', 'TypeScript', 'OpenAI API', 'Framer Motion', 'Tailwind CSS'],
    },
    {
      name: 'Jatina Group',
      description:
        'Miami Mansion Rentals — fully responsive luxury villa rental platform with headless CMS integration, giving the marketing team full control over listings without developer involvement.',
      tasks:
        'Built a fully responsive villa rental frontend integrated with a headless CMS, giving the marketing team full control over property listings, pricing, and page content without developer involvement. Engineered an interactive booking/reservation calendar and inquiry form system with real-time availability syncing, reducing manual booking coordination for the operations team.',
      url: 'https://jatinagroup.com/',
      img: '/images/jatina.png',
      tags: ['Next.js', 'React', 'TypeScript', 'Headless CMS', 'Tailwind CSS'],
    },
  ],
};

export default featuredProjectsSection;
