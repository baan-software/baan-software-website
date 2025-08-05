import { INavigationItem, IProject, IValue, ISiteData } from '@/types';
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
  },
  {
    id: 'storyball-app',
    title: 'Storyball App',
    description: 'An innovative mobile app that transforms physical play into digital storytelling. The app connects to a smart ball that captures motion and sound, creating unique stories based on how children play. Features include story generation, interactive gameplay, and parental controls. Note: This app is no longer available in app stores.',
    technologies: ['Swift', 'Kotlin', 'Java'],
    category: 'mobile',
    urls: {
      kickstarter: 'https://www.kickstarter.com/projects/storyball/storyball-the-smart-ball-that-turns-play-into-stories'
    }
  },
  {
    id: 'storyball-server',
    title: 'Storyball Server',
    description: 'A robust backend system that powers the Storyball ecosystem. Handles story generation algorithms, user data management, device synchronization, and content delivery. Implements secure authentication and real-time data processing for seamless interaction between the physical ball and digital storytelling experience.',
    technologies: ['Node.js', 'MongoDB'],
    category: 'backend'
  },
  {
    id: 'flutter-animated-transitions',
    title: 'Flutter Animated Transitions',
    description: 'An open-source library that provides a set of beautiful animated transitions for Flutter. The library is designed to be easy to use and customize and expandable.',
    technologies: ['Flutter'],
    category: 'mobile',
    urls: {
      website: 'https://github.com/baan-software/flutter-animated-transitions'
    }
  }
];

// Site-wide data
export const siteData: ISiteData = {
  company: {
    name: 'Baan Software',
    logoPath: '/baan-software-logo.svg',
    logoAlt: 'Baan Software Logo'
  },
  hero: {
    title: 'Exceptional Software Development',
    subtitle: 'Baan Software',
    description: 'At Baan Software, we are dedicated to providing exceptional software development, product development, and technical solution services. Our mission is to help clients bring their ideas to life with high-quality, sustainable, and innovative technology.',
    buttons: {
      primary: {
        text: 'Get Started',
        action: 'contact'
      },
      secondary: {
        text: 'Learn More',
        action: 'about'
      }
    },
    statistics: {
      experience: {
        value: '15+',
        label: 'Years Experience'
      },
      projects: {
        value: '6',
        label: 'Major Projects'
      },
      satisfaction: {
        value: '100%',
        label: 'Client Satisfaction'
      }
    }
  },
  about: {
    title: 'About Baan Software',
    founder: {
      name: 'Giora Vered',
      linkedin: 'https://www.linkedin.com/in/giora-vered-83b00259/',
      experience: 'over 15 years'
    },
    description: [
      'Baan Software was founded by Giora Vered, a seasoned software developer with over 15 years of experience. Giora has worked on a diverse range of projects, including mobile and web applications, mobile SDKs, server-side systems, and more.',
      'His passion for creating elegant, efficient, and user-friendly solutions drives the company\'s approach to every project. Whether you\'re building a new product, refining an existing one, or tackling complex technical challenges, Baan Software is here to help you achieve your goals with expertise and care.'
    ],
    expertise: [
      {
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications'
      },
      {
        title: 'Web Applications',
        description: 'Modern, responsive web applications'
      },
      {
        title: 'Backend Systems',
        description: 'Scalable server-side architectures'
      }
    ]
  },
  values: {
    title: 'Our Values',
    subtitle: 'These core principles guide everything we do and define how we work with our clients.'
  },
  projects: {
    title: 'Our Projects',
    subtitle: 'Explore some of the innovative projects we\'ve delivered across different platforms and technologies.'
  },
  contact: {
    title: 'Get In Touch',
    subtitle: 'Contact Information',
    description: 'Ready to bring your ideas to life? We\'d love to hear about your project and discuss how we can help you achieve your goals.',
    email: 'info@baansoftware.com',
    buttonText: 'Send us an Email'
  }
}; 