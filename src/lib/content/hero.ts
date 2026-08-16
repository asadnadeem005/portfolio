import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'muhammad asad.',
  tagline: 'I build AI-powered SaaS, fintech & mobile products.',
  description:
    'Senior Full Stack Developer with 5+ years of experience building AI-powered SaaS, digital wallets & payments, and cross-platform mobile apps (iOS & Android) using React Native, React.js, Node.js, NestJS, and TypeScript. OpenAI API / LLM integration specialist based in Dubai, UAE.',
  specialText: 'Dubai-based · Immediate joiner · Open to opportunities',
  badges: ['React Native', 'Node.js', 'OpenAI API', 'TypeScript', 'Next.js'],
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: false,
  },
};
