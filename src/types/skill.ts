export type SkillLevel = 'learning' | 'practicing' | 'building';

export type Skill = {
  name: string;
  category:
    | 'language'
    | 'frontend'
    | 'tooling'
    | 'workflow'
    | 'collaboration'
    | 'creative';
  level: SkillLevel;
  summary: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  skills: readonly Skill[];
};
