import type { EpisodeFormatStep } from '../types/blog';
import type { Project } from '../types/project';

export const algorithmOfTheDayProject: Project = {
  id: 'algorithm-of-the-day',
  title: 'Алгоритъмът на деня | Algorithm of the Day',
  subtitle: 'A ritual media experiment where people and algorithms learn together.',
  summary:
    'An educational web page, digital business card, and creative learning prototype created by Aleksandar Kitipov with AI collaborators.',
  description:
    'Algorithm of the Day turns current facts, news, and ideas into concise poetic rituals that combine commentary, metaphor, music, and a question for the community.',
  status: 'featured',
  featured: true,
  tags: ['AI collaboration', 'Education', 'Media ritual', 'Community', 'Prototype'],
  highlights: [
    'Frames Aleksandar as the conductor and architect of the project vision.',
    'Combines facts, metaphors, rituals, music, and community prompts into an episode format.',
    'Preserves the educational spirit of the original Notepad++ static website while moving toward typed React content.',
  ],
  links: [
    {
      label: 'GitHub repository',
      url: 'https://github.com/AlexKitipov/-Algorithm-of-the-Day-',
      kind: 'repository',
      isPublic: true,
    },
    {
      label: 'Google Colab notebook',
      url: 'https://colab.research.google.com/drive/1QFMujrV8aajNQTwUCzmd_V74PKa_2e4L#scrollTo=eba04bcd',
      kind: 'notebook',
      isPublic: true,
    },
  ],
};

export const episodeFormat: readonly EpisodeFormatStep[] = [
  {
    title: 'Prologue',
    description: 'A short sound or musical motif that opens the episode.',
  },
  {
    title: 'Fact',
    description: 'A current news item, idea, or piece of knowledge.',
  },
  {
    title: 'Metaphor',
    description: 'A translation of the fact into an image, legend, or poetic frame.',
  },
  {
    title: 'Ritual',
    description: 'A small action listeners can try or reflect on.',
  },
  {
    title: 'Music',
    description: 'A song or playlist connected to the theme.',
  },
  {
    title: 'Community question',
    description: 'A prompt whose responses can shape the next episode.',
  },
];

export const projectArchiveStructure = [
  '/episodes/ — Markdown episode scripts',
  '/audio/ — completed MP3 audio recordings',
  '/journal/ — CSV episode index',
  '/community/ — collected responses and comments',
  '/assets/ — musical motifs and graphics',
] as const;
