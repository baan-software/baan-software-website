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
  },
  {
    title: 'Transparency',
    description: 'We keep communication open and honest throughout every project, so you always know where things stand.'
  }
];

export const projects: IProject[] = [
  {
    id: 'gymijet',
    title: 'Gymijet (US Only)',
    description: 'A resistance bands workout platform using image processing and pose estimation to count reps, validate form, track history, and adjust training plans based on performance.',
    image: '/projects/gymijet.png',
    engagement: 'full-development',
    components: [
      {
        label: 'App',
        description: 'Mobile app guiding resistance bands workouts with real-time pose estimation, rep counting, workout history, and adaptive training plans.',
        technologies: ['Flutter', 'MLKit']
      },
      {
        label: 'Backend',
        description: 'Workout selection logic, performance-based plan adjustments, user management, authentication, push notifications, and subscriptions.',
        technologies: ['Node.js', 'MongoDB']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/us/app/gymijet/id6680193845',
      playStore: 'https://play.google.com/store/apps/details?id=com.gymijet.android&hl=en'
    },
    screenshots: [
      'projects/screenshots/gymijet/1.0.webp',
      'projects/screenshots/gymijet/2.0.webp',
      'projects/screenshots/gymijet/3.0.webp',
      'projects/screenshots/gymijet/4.0.webp',
      'projects/screenshots/gymijet/5.0.webp'
    ]
  },
  {
    id: 'cookbash',
    title: 'Cookbash',
    description: 'A platform for organizing gatherings with great food. Plan events, choose cuisines, invite friends, and account for food preferences to create the perfect meal.',
    image: '/projects/cookbash.png',
    engagement: 'full-development',
    components: [
      {
        label: 'App',
        description: 'Mobile and web app for planning food-centered events, managing invitations, and handling dietary preferences.',
        technologies: ['Flutter']
      },
      {
        label: 'Website',
        description: 'Marketing website showcasing recipes, chefs, and content with an integrated shop.',
        technologies: ['NextJS', 'Strapi']
      }
    ],
    urls: {
      website: 'https://www.cookbash.com',
      appStore: 'https://apps.apple.com/us/app/cookbash/id6479023085',
      playStore: 'https://play.google.com/store/apps/details?id=com.cookbash&hl=en&pli=1'
    },
    screenshots: [
      '/projects/screenshots/cookbash/01.webp',
      '/projects/screenshots/cookbash/02.webp',
      '/projects/screenshots/cookbash/03.webp'
    ]
  },
  {
    id: 'posty',
    title: 'Posty: AI Content Companion',
    description: 'An AI-powered Instagram content tool for small business owners. Connects to Instagram, learns your voice from past posts, and generates on-brand post ideas, captions, and images you can publish in seconds.',
    image: '/projects/posty.png',
    engagement: 'full-development',
    components: [
      {
        label: 'App',
        description: 'Mobile app delivering tailored post ideas and AI-generated captions and images based on your Instagram style. Sign in with Apple to start instantly, with a freemium model offering free generations and an unlimited subscription tier.',
        technologies: ['Flutter']
      },
      {
        label: 'Backend',
        description: 'API analyzing past Instagram posts to learn voice and tone, generating on-brand ideas, captions, and AI images, with Meta API integration for Instagram connectivity.',
        technologies: ['NestJS', 'Meta API']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/us/app/posty-ai-content-companion/id6758053900'
    },
    screenshots: [
      'projects/screenshots/posty/1.0.webp',
      'projects/screenshots/posty/2.0.webp',
      'projects/screenshots/posty/3.0.webp',
      'projects/screenshots/posty/4.0.webp',
      'projects/screenshots/posty/5.0.webp'
    ]
  },
  {
    id: 'shortica',
    title: 'Shortica',
    description: 'A streaming app for short-form vertical dramas with cinematic episodes, personalized recommendations, and multilingual subtitle support.',
    image: '/projects/shortica.png',
    engagement: 'dev-as-a-service',
    components: [
      {
        label: 'App',
        description: 'Mobile app delivering 60-90 second episodes with a coin-based unlocking system, daily rewards, and personalized recommendations.',
        technologies: ['Flutter']
      },
      {
        label: 'Backend',
        description: 'API powering content delivery, episode unlocking, coin economy, daily rewards, and personalized recommendations.',
        technologies: ['Fastify']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/br/app/shortica/id6754937808',
      playStore: 'https://play.google.com/store/apps/details?id=com.shortica.app&hl=en'
    }
  },
  {
    id: 'storyball',
    title: 'Storyball (Discontinued)',
    description: 'An innovative platform that transforms physical play into digital storytelling. A smart ball captures motion and sound, creating unique stories based on how children play.',
    image: '/projects/storyball.png',
    engagement: 'full-development',
    components: [
      {
        label: 'App',
        description: 'Mobile app featuring story generation, interactive gameplay, and parental controls. No longer available in app stores.',
        technologies: ['Swift', 'Kotlin', 'Java']
      },
      {
        label: 'Backend',
        description: 'Story generation algorithms, user data management, device synchronization, content delivery, and real-time data processing.',
        technologies: ['Node.js', 'MongoDB']
      }
    ],
    urls: {
      kickstarter: 'https://www.kickstarter.com/projects/848480002/storyball-the-screen-free-smart-toy-that-keeps-kid'
    },
    screenshots: [
      'projects/screenshots/storyball/1.0.png',
      'projects/screenshots/storyball/2.0.png',
      'projects/screenshots/storyball/3.0.png',
      'projects/screenshots/storyball/4.0.png'
    ]
  },
  {
    id: 'outfit-check',
    title: 'Outfit Check: Style Matcher',
    description: 'A quick second opinion on your outfit\'s color and style coordination. AI analyzes color harmony and item consistency, then returns a GO / ALMOST / RETHINK verdict with brief notes grounded in color theory and specific swap suggestions.',
    image: '/projects/outfit-check.png',
    engagement: 'full-development',
    components: [
      {
        label: 'App',
        description: 'Mobile app delivering instant AI-powered outfit feedback with no sign-up. Privacy-first: photos are processed only to generate feedback and are not used for training.',
        technologies: ['Flutter']
      },
      {
        label: 'Backend',
        description: 'Serverless image analysis pipeline running color and style consistency checks, returning structured verdicts with reasoning notes.',
        technologies: ['Cloud Functions', 'Firebase']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/us/app/outfit-check-style-matcher/id6762867885'
    },
    screenshots: [
      'projects/screenshots/outfit-check/01.webp',
      'projects/screenshots/outfit-check/02.webp',
      'projects/screenshots/outfit-check/03.webp',
      'projects/screenshots/outfit-check/04.webp',
      'projects/screenshots/outfit-check/05.webp',
    ]
  },
  {
    id: 'punch-oclock',
    title: 'Punch O\'Clock',
    description: 'A time-tracking app for freelancers, contractors, and professionals. Track hours, calculate earnings, export reports, and sync to the cloud.',
    image: '/projects/punch-oclock.png',
    engagement: 'in-house',
    components: [
      {
        label: 'App',
        description: 'Mobile app with multi-project tracking, automatic earnings calculation, CSV/PDF export, live activity support, offline mode, and multi-currency support.',
        technologies: ['Flutter']
      },
      {
        label: 'Backend',
        description: 'Cloud sync, authentication, and cross-device data persistence for tracked hours and project records.',
        technologies: ['Firebase']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/au/app/punch-oclock/id6756803931',
      playStore: 'https://play.google.com/store/apps/details?id=com.baansoftware.clock_punch&hl=en'
    },
    screenshots: [
      'projects/screenshots/punch-oclock/1.0.png',
      'projects/screenshots/punch-oclock/2.0.png',
      'projects/screenshots/punch-oclock/3.0.png',
      'projects/screenshots/punch-oclock/4.0.png',
      'projects/screenshots/punch-oclock/5.0.png',
      'projects/screenshots/punch-oclock/6.0.png',
      'projects/screenshots/punch-oclock/7.0.png',
      'projects/screenshots/punch-oclock/8.0.png',
      'projects/screenshots/punch-oclock/9.0.png'
    ]
  },
  {
    id: 'language-board',
    title: 'Language Board',
    description: 'A word-learning game for toddlers and young children featuring 210 illustrated words across 21 themed categories. Each tap produces audio pronunciation to help build vocabulary naturally through interactive play.',
    image: '/projects/language-board.png',
    engagement: 'in-house',
    components: [
      {
        label: 'App',
        description: 'iOS app with 210 words and audio pronunciation across 21 categories, vintage-style illustrations, and a pressure-free learning experience optimized for small hands.',
        technologies: ['Flutter']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/us/app/language-board/id6760527772'
    },
    screenshots: [
      'projects/screenshots/language-board/1.0.png',
      'projects/screenshots/language-board/2.0.png',
      'projects/screenshots/language-board/3.0.png',
      'projects/screenshots/language-board/4.0.png',
      'projects/screenshots/language-board/5.0.png',
    ]
  },
  {
    id: 'bubble-pop',
    title: 'Bubble Pop: Tap Challenge',
    description: 'A casual arcade game where players tap bubbles to beat the clock. Progressive difficulty with faster, smaller, and denser bubbles keeps the challenge intensifying across stages.',
    image: '/projects/bubble-pop.png',
    engagement: 'in-house',
    components: [
      {
        label: 'App',
        description: 'iOS game featuring time-based tap gameplay, progressive difficulty scaling, and increasingly challenging bubble patterns that test speed and accuracy.',
        technologies: ['Flutter']
      }
    ],
    urls: {
      appStore: 'https://apps.apple.com/us/app/bubble-pop-tap-challenge/id6759165656'
    },
    screenshots: [
      'projects/screenshots/bubble-pop/1.0.webp',
      'projects/screenshots/bubble-pop/2.0.webp',
      'projects/screenshots/bubble-pop/3.0.webp',
      'projects/screenshots/bubble-pop/4.0.webp',
      'projects/screenshots/bubble-pop/5.0.webp',
    ]
  },
  {
    id: 'flutter-animated-transitions',
    title: 'Flutter Animated Transitions',
    description: 'An open-source library providing beautiful, customizable animated transitions for Flutter.',
    image: '/projects/flutter.png',
    engagement: 'in-house',
    components: [
      {
        label: 'Library',
        description: 'Easy to use, customize, and expand animated transition package for Flutter applications.',
        technologies: ['Flutter']
      }
    ],
    urls: {
      website: 'https://pub.dev/packages/animated_transitions'
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
        text: 'Get In Touch',
        action: 'contact'
      },
      secondary: {
        text: 'Why Us?',
        action: 'values'
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
      'Baan Software was founded by Giora Vered, a software developer with over 15 years of experience, who has worked on a wide range of projects, including mobile and web applications, mobile SDKs, server-side systems, and more.',
      'Baan Software focuses on building reliable, well-structured solutions. Whether you\'re starting a new product, improving an existing one, or solving a technical problem, we can help you get it done.'
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