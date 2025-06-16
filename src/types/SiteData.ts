export interface IHeroData {
  title: string;
  subtitle: string;
  description: string;
  buttons: {
    primary: {
      text: string;
      action: string;
    };
    secondary: {
      text: string;
      action: string;
    };
  };
  statistics: {
    experience: {
      value: string;
      label: string;
    };
    projects: {
      value: string;
      label: string;
    };
    satisfaction: {
      value: string;
      label: string;
    };
  };
}

export interface IAboutData {
  title: string;
  founder: {
    name: string;
    linkedin: string;
    experience: string;
  };
  description: string[];
  expertise: {
    title: string;
    description: string;
  }[];
}

export interface IContactData {
  title: string;
  subtitle: string;
  description: string;
  email: string;
  buttonText: string;
}

export interface ICompanyData {
  name: string;
  logoPath: string;
  logoAlt: string;
}

export interface IValuesData {
  title: string;
  subtitle: string;
}

export interface IProjectsData {
  title: string;
  subtitle: string;
}

export interface ISiteData {
  company: ICompanyData;
  hero: IHeroData;
  about: IAboutData;
  values: IValuesData;
  projects: IProjectsData;
  contact: IContactData;
} 