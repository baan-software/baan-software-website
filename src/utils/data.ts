import { INavigationItem, IProject, IValue } from '@/types';
import { Section } from '@/enums';

export const navigationItems: INavigationItem[] = [
  { label: 'Home', section: Section.HOME, href: '#home' },
  { label: 'About', section: Section.ABOUT, href: '#about' },
  { label: 'Values', section: Section.VALUES, href: '#values' },
  { label: 'Projects', section: Section.PROJECTS, href: '#projects' },
  { label: 'Contact', section: Section.CONTACT, href: '#contact' }
];

export const companyValues: IValue[] = [
  {
    title: 'Listening',
    description: 'We believe in understanding our clients\' needs deeply, ensuring their vision is fully realized.'
  },
  {
    title: 'Full Engagement',
    description: 'Our team works like an extension of yours—family-like collaboration, dedication, and care for every product.'
  },
  {
    title: 'Long-Term Support',
    description: 'We are committed to supporting your project well beyond its launch, building lasting partnerships.'
  },
  {
    title: 'Maintainable Code',
    description: 'Our solutions are designed with maintainability in mind, making it easy to scale and adapt.'
  },
  {
    title: 'Latest Technologies',
    description: 'We stay at the forefront of industry trends, integrating cutting-edge concepts and tools to deliver top-notch results.'
  }
];

export const projects: IProject[] = [
  {
    id: 'gymijet-app',
    title: 'Gymijet App (US Only)',
    description: 'A mobile app that guides the user\'s resistance bands workout. The app is using image processing & pose estimations to count exercises repetitions, validating the correctness of execution. The app also record the user\'s workout history, adjusting the resistance band type according to the user\'s performance and summarizing information regarding the results of the workouts.',
    technologies: ['Flutter', 'MLKit'],
    category: 'mobile',
    urls: {
      appStore: 'https://apps.apple.com/il/app/gymijet/id6680193845',
      playStore: 'https://play.google.com/store/apps/details?id=com.gymijet.android&hl=en'
    }
  },
  {
    id: 'gymijet-server',
    title: 'Gymijet Server',
    description: 'A backend server to compliment the application. The backend implementation contains all the workout selection logic and adjusting the plan according to the user\'s performance. Managing user base and authentication, push notifications, subscriptions and more.',
    technologies: ['Node.js', 'MongoDB'],
    category: 'backend'
  },
  {
    id: 'cookbash-app',
    title: 'Cookbash App',
    description: 'A mobile & web app that guides the user through the process of organizing a gathering with great food. The app allow the plan an event, select a preferred cuisine, invite friends, taking into account their food preferences - in order to create an amazing meal.',
    technologies: ['Flutter'],
    category: 'mobile',
    urls: {
      appStore: 'https://apps.apple.com/il/app/cookbash/id6479023085',
      playStore: 'https://play.google.com/store/apps/details?id=com.cookbash&hl=en&pli=1'
    }
  },
  {
    id: 'cookbash-website',
    title: 'Cookbash Website',
    description: 'A marketing website that showcase recipes, chefs and content. The website contains a shop and information',
    technologies: ['NextJS', 'Strapi'],
    category: 'web',
    urls: {
      website: 'https://www.cookbash.com'
    }
  }
]; 