import type { ContactChannel, SocialLink } from '../types/contact';

export const contactChannels: readonly ContactChannel[] = [
  {
    label: 'Preferred public email',
    value: 'aeksandar.kitipov@gmail.com',
    href: 'mailto:aeksandar.kitipov@gmail.com',
    kind: 'email',
    visibility: 'public',
    note: 'Safe default from the legacy site; confirm this remains the preferred publishing email.',
  },
  {
    label: 'Outlook email',
    value: 'aeksandar.kitipov@outlook.com',
    kind: 'email',
    visibility: 'private',
    note: 'Legacy address retained in data for review but not rendered publicly.',
  },
  {
    label: 'ABV email',
    value: 'aleksandar.kitipov@abv.bg',
    kind: 'email',
    visibility: 'private',
    note: 'Legacy address retained in data for review but not rendered publicly.',
  },
  {
    label: 'Phone',
    value: 'Private phone number from legacy contacts',
    kind: 'phone',
    visibility: 'private',
    note: 'Do not render until Aleksandar confirms that a phone number should be public.',
  },
  {
    label: 'Address',
    value: 'Private street address from legacy contacts',
    kind: 'location',
    visibility: 'private',
    note: 'Sensitive street address intentionally excluded from rendering.',
  },
  {
    label: 'Location',
    value: 'Plovdiv, Bulgaria',
    kind: 'location',
    visibility: 'public',
    note: 'City-level location only.',
  },
];

export const publicContactChannels = contactChannels.filter(
  (channel) => channel.visibility === 'public',
);

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'Algorithm of the Day on GitHub',
    url: 'https://github.com/AlexKitipov/-Algorithm-of-the-Day-',
    kind: 'github',
    isPublic: true,
    description: 'Primary public project repository from the legacy site.',
  },
  {
    label: 'Google Colab notebook',
    url: 'https://colab.research.google.com/drive/1QFMujrV8aajNQTwUCzmd_V74PKa_2e4L#scrollTo=eba04bcd',
    kind: 'learning',
    isPublic: true,
    description:
      'Cloud notebook connected to the Algorithm of the Day learning workflow.',
  },
  {
    label: 'Facebook profile name',
    url: 'https://www.facebook.com/',
    kind: 'facebook',
    isPublic: false,
    description:
      'Legacy content listed the name “Aleksandar Kitipov”; no profile URL is published until confirmed.',
  },
  {
    label: 'Copilot Microsoft',
    url: 'https://copilot.microsoft.com',
    kind: 'tool',
    isPublic: true,
    description: 'AI assistant referenced as a collaborator in the legacy pages.',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/',
    kind: 'tool',
    isPublic: true,
    description: 'Platform for code and projects.',
  },
  {
    label: 'Google Colab',
    url: 'https://colab.research.google.com/',
    kind: 'tool',
    isPublic: true,
    description: 'Cloud environment for Python learning.',
  },
  {
    label: 'Notepad++',
    url: 'https://notepad-plus-plus.org/',
    kind: 'tool',
    isPublic: true,
    description: 'Editor used in the legacy site origin story.',
  },
  {
    label: 'Python.org',
    url: 'https://www.python.org/',
    kind: 'tool',
    isPublic: true,
    description: 'Official Python learning resource.',
  },
  {
    label: 'Legacy archive',
    url: '/docs/legacy/index.html',
    kind: 'legacy',
    isPublic: false,
    description:
      'Archived static pages are retained for local review only because they contain private contact details.',
  },
];

export const publicSocialLinks = socialLinks.filter((link) => link.isPublic);
