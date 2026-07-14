import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'muhammad asad.',
  tagline: 'I build high-performance mobile & web experiences.',
  description:
    'Senior Frontend & React Native Developer with 5+ years of experience delivering cross-platform mobile apps (iOS & Android) and modern web interfaces using React Native, React.js, Next.js, and TypeScript. AI-Augmented Engineer based in Dubai, UAE.',
  specialText: 'Dubai-based · Immediate joiner · Open to opportunities',
  badges: ['React Native', 'TypeScript', 'Next.js', 'AI-Augmented', 'iOS & Android'],
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
