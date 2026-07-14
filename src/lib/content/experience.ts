import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Softbuilders Software Design LLC',
      shortName: 'Softbuilders',
      companyUrl: 'https://softbuilders.com/',
      role: 'Senior Frontend & React Native Developer',
      started: 'May 2024',
      upto: 'present',
      tasks: [
        'Shipped multiple production React Native apps (iOS & Android) on App Store and Play Store for UAE enterprise clients — featuring NFC flows, animated digital wallets, and real-time WebSocket screens.',
        'Built React.js and Next.js web UIs with TypeScript and React Query, cutting frontend server requests by 40% via intelligent caching and state optimization.',
        'Used Claude AI and Cursor AI for AI-assisted component scaffolding and prompt-engineered UI generation, reducing feature development time by 30%.',
        'Delivered multi-language (i18n), accessibility compliance, and 60fps animations using Reanimated 2 across all mobile and web platforms.',
      ],
    },
    {
      company: 'ConsoliAds Pte Ltd',
      shortName: 'ConsoliAds',
      companyUrl: 'https://consoliads.com/',
      role: 'Frontend Engineer',
      started: 'Nov 2022',
      upto: 'Mar 2024',
      tasks: [
        'Built scalable frontend interfaces using React.js, TypeScript, and Redux Toolkit for platforms serving 1M+ active users.',
        'Increased user engagement by 20% through AI-informed recommendation UI and personalized referral system components.',
        'Integrated REST APIs, third-party SDKs, and webhook-driven UI updates ensuring seamless real-time data rendering.',
      ],
    },
    {
      company: 'DevsSpace Ltd',
      shortName: 'DevsSpace',
      companyUrl: 'https://devsspace.com/',
      role: 'Junior Frontend Developer',
      started: 'Feb 2022',
      upto: 'Nov 2022',
      tasks: [
        'Developed responsive React.js web interfaces and mobile UI components, improving frontend rendering performance by 15%.',
        'Built trading platform using TradingView library and designed SHMTH Capital website with Next.js, TypeScript & TailwindCSS.',
        'Awarded Team of the Month for delivering UI features ahead of schedule in an Agile environment.',
      ],
    },
    {
      company: 'EvonicSoft Ltd',
      shortName: 'EvonicSoft',
      companyUrl: 'https://www.evonicsoft.com/',
      role: 'Junior Software Engineer',
      started: 'April 2021',
      upto: 'April 2022',
      tasks: [
        'Built static frontend UI from the ground up using Next.js and Figma handover designs.',
        'Architected the folder structure and initial setup of the app.',
        'Reviewed and approved multiple Pull requests.',
        'Worked remotely with a distributed team from around the globe, collaborating closely using screen-sharing.',
      ],
    },
  ],
};
