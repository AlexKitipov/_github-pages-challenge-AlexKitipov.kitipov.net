export type ContactVisibility = 'public' | 'private';

export type ContactChannel = {
  label: string;
  value: string;
  href?: string;
  kind: 'email' | 'phone' | 'location' | 'social' | 'website' | 'messaging';
  visibility: ContactVisibility;
  note?: string;
};

export type SocialLink = {
  label: string;
  url: string;
  kind: 'github' | 'facebook' | 'learning' | 'tool' | 'legacy' | 'other';
  isPublic: boolean;
  description?: string;
};
