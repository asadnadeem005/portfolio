import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'muhammad asad.',
  tagline: 'I create visually pleasing interfaces & backend for the web.',
  description:
    '🌟 Software Engineer with solid history of doing well in IT industry | MERN Stack | NestJS | Web 3.0 | TypeScript | RESTAPIs | Full Stack Developer | Docker ',
  specialText: 'Currently available for a job & freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
