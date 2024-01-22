import { AboutSectionType } from '@/lib/types/sections';

export const aboutSection: AboutSectionType = {
  title: 'about me',
  // Paragraphs need to be changed from containers/About.tsx
  // Because it wasn't possible to insert anchor tags like this
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'NodeJs',
      'ExpressJs',
      'TypeScript',
      'JavaScript',
      'TailwindCSS',
      'REST API',
      'AWS S3',
      'Unit Testing',
    ],
  },
  img: '/muhammad-asad.jpg',
};
