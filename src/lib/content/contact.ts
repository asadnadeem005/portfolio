import { author } from '@/lib/content/portfolio';
import { ContactSectionType } from '@/lib/types/sections';

export const contactSection: ContactSectionType = {
    title: 'get in touch',
    subtitle: "what's next",
    paragraphs: [
    "I'm a Dubai-based Senior Frontend & React Native Developer — available immediately for full-time roles or freelance projects.",
    'Whether you have a product to build, a team to scale, or just want to connect, my inbox is always open!',
    ],
    link: `mailto:${author.email}`,
};