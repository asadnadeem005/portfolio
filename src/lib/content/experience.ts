import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'Softbuilders Software Design LLC',
      shortName: 'Softbuilders',
      companyUrl: 'https://softbuilders.com/',
      role: 'Senior Full Stack Developer',
      started: 'August 2024',
      upto: 'present',
      tasks: [
        'Sole engineer on Effora, a multi-tenant AI SaaS platform for the salon & wellness industry — owned architecture, backend, web, and React Native apps end to end.',
        'Engineered eight production OpenAI-powered tools: a 24/7 AI phone receptionist, a chatbot with smart escalation, a natural-language business assistant querying live data, voice booking, AI-driven pricing, recommendations, and content generation.',
        'Integrated OpenAI Vision for automated document and identity verification (KYC), replacing manual onboarding review.',
        'Built digital wallet & rewards backend — credit ledger, automated payouts, transaction history — in NestJS, PostgreSQL, and Redis with idempotent webhook handling to prevent duplicate credits.',
        'Delivered NFC contactless card activation and Shopify-triggered payout reconciliation for a UAE membership platform, plus multiple React Native apps shipped to the App Store and Google Play.',
        'Secured multi-tenant APIs with OAuth 2.0, JWT, RBAC, OTP/MFA, and tenant-level data isolation (OWASP Top 10); improved API performance 20% and cut client-side requests 40% with React Query and Redux Toolkit.',
      ],
    },
    {
      company: 'ConsoliAds Pte Ltd',
      shortName: 'ConsoliAds',
      companyUrl: 'https://consoliads.com/',
      role: 'Software Engineer',
      started: 'Nov 2022',
      upto: 'June 2024',
      tasks: [
        'Built and scaled Node.js, Express, and TypeScript backend services handling 1M+ production requests, with MongoDB data modelling and AWS-hosted deployment.',
        'Architected REST APIs supporting 10,000+ active platform users, and a responsive admin dashboard in React, TypeScript, and Tailwind CSS.',
        'Improved data retrieval efficiency 23% through ERD-led database design, schema normalisation, and a Redis caching layer.',
        'Shipped recommendation and referral systems that increased user engagement 20%, and reduced scheduling conflicts 70% via an automated calendar module.',
      ],
    },
    {
      company: 'DevsSpace Ltd',
      shortName: 'DevsSpace',
      companyUrl: 'https://devsspace.com/',
      role: 'Associate Software Engineer',
      started: 'April 2022',
      upto: 'Nov 2022',
      tasks: [
        'Developed PrimaryLeap, a UK EdTech SaaS platform for parents, tutors, and schools, using Laravel, PHP, MySQL, and Bootstrap 4.',
        'Implemented multi-role access (student, parent, educator, school) with scoped dashboards, permissions, and subscription tiers.',
        'Built the curriculum-aligned worksheet & activity library with search and filtering across thousands of resources, plus subscription sign-up and payment flows.',
        'Improved page load times and backend throughput 15%; recognised as Team of the Month for delivering a client project ahead of schedule.',
      ],
    },
    {
      company: 'EvonicSoft Ltd',
      shortName: 'EvonicSoft',
      companyUrl: 'https://www.evonicsoft.com/',
      role: 'Associate Software Engineer',
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
