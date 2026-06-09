export type BlogPostStatus = 'draft' | 'planned' | 'published';

export type BlogPost = {
  id: string;
  title: string;
  summary: string;
  status: BlogPostStatus;
  tags: readonly string[];
  relatedProjectId?: string;
};

export type EpisodeFormatStep = {
  title: string;
  description: string;
};
