export interface IProjectComponent {
  label: string;
  description: string;
  technologies: string[];
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  engagement: 'full-development' | 'in-house' | 'dev-as-a-service';
  components: IProjectComponent[];
  urls?: {
    website?: string;
    appStore?: string;
    playStore?: string;
    kickstarter?: string;
  };
  screenshots?: string[];
}
