import { algorithmOfTheDayProject } from './algorithmOfTheDay';
import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  algorithmOfTheDayProject,
  {
    id: 'portfolio-foundation',
    title: 'Portfolio Foundation',
    subtitle: 'A modern React shell for reusable personal content.',
    summary:
      'The current routed portfolio application that preserves legacy content while preparing for future project, skills, blog, and contact milestones.',
    description:
      'Portfolio Foundation introduces typed local data, route-based pages, responsive cards, and safe public contact defaults for the next publishing iterations.',
    status: 'active',
    tags: ['React', 'TypeScript', 'Vite', 'Portfolio'],
    highlights: [
      'Migrates static legacy content into reusable modules.',
      'Separates private contact information from rendered public channels.',
      'Creates a maintainable base for project case studies and future writing.',
    ],
    links: [
      {
        label: 'Legacy archive',
        url: '/docs/legacy/index.html',
        kind: 'archive',
        isPublic: false,
      },
    ],
  },
];

export const featuredProject =
  projects.find((project) => project.featured) ?? projects[0];
