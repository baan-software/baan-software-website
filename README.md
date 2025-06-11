# Baan Software Website

A modern, professional website for Baan Software - a boutique software development consultancy.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Package Manager**: Yarn
- **Styling**: TailwindCSS with custom design tokens
- **Animations**: CSS animations with Intersection Observer
- **Deployment**: AWS S3 + CloudFront

## 🎨 Design Philosophy

- **Clean & Minimalist**: Sharp, professional aesthetic
- **Modern Typography**: Tight spacing and clear hierarchy
- **Grid-based Layout**: Structured and organized
- **Subtle Animations**: Smooth hover effects and transitions
- **Responsive Design**: Mobile-first approach
- **Professional Palette**: Custom color scheme with primary grays

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd baan-software-website

# Install dependencies
yarn install

# Start development server
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Type checking
yarn type-check

# Linting
yarn lint
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Reusable components (Header, etc.)
│   └── sections/       # Page sections (Hero, About, etc.)
├── types/              # TypeScript interfaces
├── enums/              # Enums and constants
├── utils/              # Utility functions and data
├── index.css           # TailwindCSS imports and custom styles
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## 🎨 TailwindCSS Configuration

The project uses a custom TailwindCSS configuration with:

- **Custom Color Palette**: Professional grays and primary colors
- **Extended Typography**: Tight letter spacing for modern look
- **Custom Animations**: Fade-in-up and slide-in effects
- **Responsive Design**: Mobile-first breakpoints

Key design tokens:
- Primary colors: `primary-50` to `primary-900`
- Gray scale: `gray-50` to `gray-900`
- Custom letter spacing: `tighter`, `tight`, `wide`, `wider`

## 🚀 Deployment

The website is automatically deployed using GitHub Actions:

- **Development**: Every push triggers a build
- **Production**: Push to `main` branch deploys to S3 and invalidates CloudFront

### Required GitHub Secrets

Set up the following secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID` - AWS access key for deployment
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `AWS_REGION` - AWS region (e.g., us-east-1)
- `S3_BUCKET_NAME` - S3 bucket name for hosting
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID

### Manual Deployment

```bash
# Build the project
yarn build

# The built files will be in the `dist/` directory
# Upload to your S3 bucket and invalidate CloudFront
```

## 🛠️ Development Guidelines

- Use TypeScript for all code
- Implement interfaces for classes and props
- Use enums for type-safe constants
- Follow functional programming patterns
- Use TailwindCSS utility classes
- Implement proper animations with Intersection Observer
- Write clean, maintainable code

## 📱 Features

- **Responsive Design**: Works perfectly on all devices
- **Smooth Scrolling**: Navigation with smooth scroll effects
- **Intersection Observer**: Elements animate as they come into view
- **Professional Animations**: Subtle fade-in and slide effects
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized build with Vite

## 🔧 Customization

To customize the design:

1. **Colors**: Edit `tailwind.config.js` to modify the color palette
2. **Typography**: Adjust font sizes and spacing in `src/index.css`
3. **Content**: Update data in `src/utils/data.ts`
4. **Animations**: Modify animation classes in TailwindCSS config

## 📄 License

Private project for Baan Software.

## 📞 Contact

For questions about this project, contact: info@baansoftware.com 