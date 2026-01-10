export interface RuleSubSection {
  title: string;
  content: string;
}

export interface Rule {
  id: string;
  title: string;
  forbidden: string;
  punishment: string;
  extras?: RuleSubSection[];
  note?: string;
  important?: string;
  exception?: string;
}

export interface Section {
  id: string;
  title: string;
  rules: Rule[];
}

export enum HierarchyLevel {
  Trainee = 1,
  JrModerator = 2,
  Moderator = 3,
  Admin = 4,
  HeadAdmin = 5,
}

export interface ModeratorRole {
  stars: number;
  title: string;
  powers: string;
}