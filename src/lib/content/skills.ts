import { SkillsSectionType } from '@/lib/types/sections';

export const skillsSection: SkillsSectionType = {
  title: 'what i do',
  skills: [
    {
      title: 'react native & mobile',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building cross-platform iOS & Android apps with React Native CLI and Expo',
        'Shipping to App Store and Google Play with NFC, FCM push notifications, and deep linking',
        'Delivering 60fps animations with Reanimated 2 and real-time UIs via WebSockets',
      ],
      softwareSkills: [
        { name: 'React Native', icon: 'logos:react' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'Expo', icon: 'simple-icons:expo' },
        { name: 'Redux Toolkit', icon: 'logos:redux' },
        { name: 'React Query', icon: 'logos:react-query-icon' },
        { name: 'Android Studio', icon: 'logos:android-icon' },
        { name: 'Xcode', icon: 'logos:xcode' },
        { name: 'AWS S3', icon: 'logos:aws' },
        { name: 'WebSockets', icon: 'logos:websocket' },
      ],
    },
    {
      title: 'frontend & web',
      lottie: {
        light: '/lotties/fullstack.json',
        dark: '/lotties/designing-dark.json',
      },
      points: [
        'Building modern web UIs with React.js, Next.js, and TypeScript',
        'Cutting server requests by 40% using React Query caching and state optimization',
        'Creating polished animations with Framer Motion and pixel-perfect Tailwind CSS layouts',
      ],
      softwareSkills: [
        { name: 'reactjs', icon: 'logos:react' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'typeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'Framer Motion', icon: 'logos:framer' },
        { name: 'Redux Toolkit', icon: 'logos:redux' },
        { name: 'figma', icon: 'logos:figma' },
        { name: 'Docker', icon: 'vscode-icons:file-type-docker' },
      ],
    },
    {
      title: 'AI-augmented engineering',
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Using Claude AI and Cursor AI for AI-assisted component scaffolding, reducing dev time by 30%',
        'Integrating OpenAI API for generative UI, AI-powered recommendations, and LLM workflows',
        'Building AI-driven creative platforms with natural language prompt pipelines and real-time previews',
      ],
      softwareSkills: [
        { name: 'OpenAI', icon: 'simple-icons:openai' },
        { name: 'Claude AI', icon: 'simple-icons:anthropic' },
        { name: 'GitHub Copilot', icon: 'logos:github-copilot' },
        { name: 'TypeScript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'nextjs', icon: 'logos:nextjs-icon' },
        { name: 'reactjs', icon: 'logos:react' },
      ],
    },
  ],
};
