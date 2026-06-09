import type { SkillGroup } from '../types/skill';

export const skillGroups: readonly SkillGroup[] = [
  {
    title: 'Languages and foundations',
    description: 'Core languages and concepts used across learning prototypes.',
    skills: [
      {
        name: 'HTML and semantic structure',
        category: 'language',
        level: 'building',
        summary:
          'Used in the original static pages and carried forward into accessible React markup.',
      },
      {
        name: 'CSS and responsive presentation',
        category: 'frontend',
        level: 'practicing',
        summary:
          'Supports the portfolio background, cards, lists, and readable content sections.',
      },
      {
        name: 'JavaScript and TypeScript',
        category: 'language',
        level: 'practicing',
        summary:
          'Turns page shells into typed reusable data, route-aware components, and maintainable content structures.',
      },
      {
        name: 'Python learning environment',
        category: 'language',
        level: 'learning',
        summary:
          'Explored through Google Colab and algorithm-oriented learning resources.',
      },
    ],
  },
  {
    title: 'Tools and workflow',
    description: 'Editors, platforms, and habits represented in the legacy content.',
    skills: [
      {
        name: 'React and Vite',
        category: 'frontend',
        level: 'building',
        summary: 'Power the modern routed portfolio application and fast local iteration.',
      },
      {
        name: 'GitHub project publishing',
        category: 'tooling',
        level: 'practicing',
        summary: 'Hosts code, project links, and the GitHub Pages portfolio workflow.',
      },
      {
        name: 'Notepad++ and browser prototyping',
        category: 'tooling',
        level: 'building',
        summary: 'Part of the original website origin story and educational workflow.',
      },
      {
        name: 'AI-assisted collaboration',
        category: 'collaboration',
        level: 'building',
        summary:
          'Uses Copilot and Gemini as creative partners for text, code, data, and commentary while preserving human direction.',
      },
    ],
  },
  {
    title: 'Creative media practice',
    description: 'Skills tied to the Algorithm of the Day format.',
    skills: [
      {
        name: 'Episode design',
        category: 'creative',
        level: 'practicing',
        summary:
          'Shapes prologue, fact, metaphor, ritual, music, and community question segments.',
      },
      {
        name: 'Community prompts',
        category: 'creative',
        level: 'learning',
        summary: 'Turns listener participation into material for future episodes.',
      },
      {
        name: 'Bilingual content framing',
        category: 'creative',
        level: 'practicing',
        summary:
          'Blends Bulgarian project identity with concise English explanations for a wider audience.',
      },
    ],
  },
];

export const skillPreviewGroups = skillGroups.map((group) => ({
  ...group,
  skills: group.skills.slice(0, 2),
}));
