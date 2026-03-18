export interface IProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: 'mobile' | 'web' | 'backend';
  engagement: 'full-development' | 'in-house' | 'dev-as-a-service';
  urls?: {
    website?: string;
    appStore?: string;
    playStore?: string;
    kickstarter?: string;
  };
} 