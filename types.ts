
export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  bio: string;
}

export interface Skill {
  name: string;
  level: number; 
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  details: string[];
}

export interface AcademicProject {
  title: string;
  description: string;
}

export type Language = 'fr' | 'en';

export interface Translations {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    viewProjects: string;
    contactMe: string;
  };
  sections: {
    experience: string;
    academicProjects: string;
    education: string;
    skills: string;
    githubProjects: string;
    hobbies: string;
    contact: string;
  };
  contact: {
    ready: string;
    sub: string;
    socials: string;
    cvText: string;
    downloadBtn: string;
  };
}
