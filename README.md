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
│   ├── common/         # Reusable components
│   │   ├── Header.tsx  # Navigation header component
│   │   └── index.ts    # Clean exports
│   ├── sections/       # Page sections
│   │   ├── Hero.tsx    # Landing hero section
│   │   ├── About.tsx   # About section
│   │   ├── Values.tsx  # Company values section
│   │   ├── Projects.tsx # Projects showcase
│   │   ├── Contact.tsx # Contact information
│   │   └── index.ts    # Clean exports
│   └── index.ts        # Component exports
├── types/              # TypeScript interfaces
│   ├── SiteData.ts     # Main site data interface
│   ├── Project.ts      # Project-related types
│   ├── Navigation.ts   # Navigation types
│   ├── Value.ts        # Company values types
│   └── index.ts        # Type exports
├── enums/              # Type-safe constants
│   ├── Section.ts      # Section identifiers
│   ├── AnimationState.ts # Animation states
│   └── index.ts        # Enum exports
├── utils/              # Utility functions and data
│   ├── data.ts         # Site content and configuration
│   ├── scrollTo.ts     # Smooth scrolling utility
│   └── index.ts        # Utility exports
├── styles/             # Additional styles (if needed)
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

- **Development**: Every push triggers a build and type checking
- **Production**: Push to `main` branch deploys to S3 and invalidates CloudFront (only if secrets are configured)

### Optional AWS Deployment

**Deployment is completely optional!** The workflow will automatically skip deployment if AWS secrets are not configured, making this template safe to use publicly.

To enable AWS deployment, set up the following secrets in your GitHub repository:

- `AWS_ACCESS_KEY_ID` - AWS access key for deployment
- `AWS_SECRET_ACCESS_KEY` - AWS secret key
- `CLOUDFRONT_DISTRIBUTION_ID` - CloudFront distribution ID

**Note**: The workflow will display helpful messages in the Actions log when deployment is skipped due to missing secrets.

### AWS Infrastructure Setup

If you want to enable automatic deployment, you'll need to set up the following AWS infrastructure:

#### 1. Create S3 Bucket
```bash
# Create an S3 bucket (replace with your desired bucket name)
aws s3 mb s3://your-website-bucket-name

# Block public access (we'll use OAC for security)
aws s3api put-public-access-block \
  --bucket your-website-bucket-name \
  --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true"
```

#### 2. Create CloudFront Distribution with OAC
1. Go to AWS CloudFront console
2. Create a new distribution
3. Set **Origin Domain** to your S3 bucket (select from dropdown)
4. Set **Origin Access** to "Origin access control settings (recommended)"
5. Create a new **Origin Access Control** or select existing one
6. Set **Default Root Object** to `index.html`
7. Configure **Custom Error Pages**:
   - Error Code: 403
   - Response Page Path: `/index.html` 
   - HTTP Response Code: 200
   - Error Code: 404
   - Response Page Path: `/index.html`
   - HTTP Response Code: 200
8. After creating, **copy the bucket policy** that CloudFront suggests and apply it to your S3 bucket
9. Note the **Distribution ID** for GitHub secrets

#### 3. Configure S3 Bucket Policy for OAC
After creating the CloudFront distribution, apply the bucket policy that CloudFront generated (it will look like this):
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowCloudFrontServicePrincipalReadOnly",
      "Effect": "Allow",
      "Principal": {
        "Service": "cloudfront.amazonaws.com"
      },
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-website-bucket-name/*",
      "Condition": {
        "StringEquals": {
          "AWS:SourceArn": "arn:aws:cloudfront::ACCOUNT-ID:distribution/DISTRIBUTION-ID"
        }
      }
    }
  ]
}
```

#### 4. Create IAM User for GitHub Actions
Create an IAM user with the following policy:
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:PutObject",
        "s3:PutObjectAcl",
        "s3:GetObject",
        "s3:DeleteObject",
        "s3:ListBucket"
      ],
      "Resource": [
        "arn:aws:s3:::your-website-bucket-name",
        "arn:aws:s3:::your-website-bucket-name/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": [
        "cloudfront:CreateInvalidation"
      ],
      "Resource": "arn:aws:cloudfront::*:distribution/YOUR_DISTRIBUTION_ID"
    }
  ]
}
```

#### 5. Configure GitHub Secrets
In your GitHub repository settings, add these secrets:
- `AWS_ACCESS_KEY_ID`: The access key for your IAM user
- `AWS_SECRET_ACCESS_KEY`: The secret key for your IAM user  
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID

#### 6. Update Workflow Configuration
In `.github/workflows/deploy.yml`, update the environment variables:
```yaml
env:
  S3_BUCKET_NAME: your-website-bucket-name  # Replace with your bucket name
  AWS_REGION: us-east-1  # Replace with your preferred region
```

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

## 🎯 Use as Template

**Feel free to use this project as a template** for your own portfolio or business website! This repository serves as a solid foundation for modern React/TypeScript websites with professional design and clean architecture.

To customize for your own use:
1. Fork or clone this repository
2. Update the data in `src/utils/data.ts` with your information
3. Replace the logo and favicon files in the `public/` directory
4. Customize colors and styling in `tailwind.config.js` if desired
5. Update the GitHub secrets for deployment (if using AWS)

## 📄 License

MIT License - See LICENSE file for details.

## 📞 Contact

For questions about this project, contact: info@baansoftware.com 