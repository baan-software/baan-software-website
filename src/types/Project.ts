export interface IProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'backend';
  urls?: {
    website?: string;
    appStore?: string;
    playStore?: string;
  };
} 