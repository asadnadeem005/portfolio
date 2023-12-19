import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "projects i've worked on",
  projects: [
    {
      id: getId(),
      name: 'ReME',
      description: 'ReME: Dating, Chat & Meet',
      tasks:
        'I strategically planned project milestones, led a cross-functional team, established a design system, developed the REST APIs, with JWT authentication.',
      url: 'https://play.google.com/store/apps/details?id=com.pentabit.recommend.me.social',
      img: '/images/reme.jpg',
      tags: ['NodeJs', 'TypeScript', 'TailwindCSS', 'Express', 'Prisma'],
    },
    {
      id: getId(),
      name: 'Villa Pads',
      description:
        'A curated collection of Luxurious villa rentals with guaranteed 5-star hospitality ',
      tasks:
        'Implemented Twill authentication, integrated Mailchimp for newsletter subscription, developed a custom website to showcase Villas, created Livewire components in the Dashboard, and used Twill as a CMS for dashboard.',
      url: 'https://villapads.com/',
      img: '/images/villapads.png',
      tags: ['Twill', 'Laravel', 'Livewire', 'TailwindCSS', 'MySql'],
    },
  ],
};

export default featuredProjectsSection;
