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
      title: 'backend & fintech',
      lottie: {
        light: '/lotties/fullstack.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Architecting multi-tenant SaaS backends with NestJS, Node.js, PostgreSQL, MongoDB, and Redis',
        'Building fintech systems — digital wallets, credit ledgers, automated payouts, and idempotent webhook handling',
        'Securing APIs with OAuth 2.0, JWT, RBAC, and MFA; owning CI/CD with Docker and AWS',
      ],
      softwareSkills: [
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'NestJS', icon: 'logos:nestjs' },
        { name: 'PostgreSQL', icon: 'logos:postgresql' },
        { name: 'MongoDB', icon: 'logos:mongodb-icon' },
        { name: 'Redis', icon: 'logos:redis' },
        { name: 'Docker', icon: 'vscode-icons:file-type-docker' },
        { name: 'AWS', icon: 'logos:aws' },
      ],
    },
    {
      title: 'AI-augmented engineering',
      lottie: {
        light: '/lotties/coding.json',
        dark: '/lotties/cloudinfra.json',
      },
      points: [
        'Shipping production OpenAI-powered features — conversational AI, natural-language data querying, and AI-driven pricing',
        'Integrating OpenAI Vision for automated document and identity verification (KYC)',
        'Using Claude AI, Cursor AI, and GitHub Copilot for AI-assisted engineering without loosening review or test standards',
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
