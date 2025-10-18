import legourmet from '@/assets/projects/legourmet.png';
import panafrimarket from '@/assets/projects/panafrimarket.png';
import peaches from '@/assets/projects/peaches.png';
import ranchersFinest from '@/assets/projects/ranchers-finest.png';
import { IProject } from '@/components/projects/project';
import { NavLink } from '@/lib/definitions';

export const navLinks: NavLink[] = [
  { href: '#intro', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const projects: IProject[] = [
  {
    url: 'https://legourmetkampala.com',
    image: legourmet,
    title: 'Le Gourmet Delicatessen',
    description:
      'Le Gourmet Delicatessen is a specialized food retailer in Kampala, Uganda, that offers a wide selection of European and high-quality food items.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Shopify'],
  },
  {
    url: 'https://www.panafrimarket.com/',
    image: panafrimarket,
    title: 'Panafrimarket',
    description:
      'Panafrimarket is a community-driven marketplace platform that connects buyers and sellers while fostering community engagement.',
    stack: ['TypeScript', 'React', 'Next.js', 'Node.js', 'Nest.js'],
  },
  {
    url: 'https://ranchers-finest.georgeomara.com',
    image: ranchersFinest,
    title: 'Ranchers Finest',
    description:
      "Ranchers Finest is a dynamic and pioneering start-up in the food industry, emerging from the divestment of Sokoni Africa's meat production department. ",
    stack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS'],
  },
  {
    url: 'https://peaches.georgeomara.com',
    image: peaches,
    title: 'Peaches Early Learning Center',
    description:
      'Peaches Early Learning Centre is a fun and vibrant setting where learning and playing are taken seriously!',
    stack: ['TypeScript', 'React', 'Next.js', 'TailwindCSS'],
  },
];
