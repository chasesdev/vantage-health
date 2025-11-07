# Vantage Health

Welcome to the Vantage Health landing page - a modern Next.js application built with TypeScript and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Google Fonts (Roboto)
- **Icons**: Material Icons
- **Deployment**: Vercel

## Features

- 🎨 Modern, responsive design with "quiet luxury" aesthetic
- ⚡ Optimized performance with Next.js Image optimization
- 🎭 Smooth scroll animations and loading states
- 🔍 SEO optimized with comprehensive metadata
- 📱 Mobile-first responsive design
- ♿ Accessibility focused
- 🚀 Automatic deployments via Vercel

## Getting Started

### Prerequisites

- Node.js 20+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Linting

```bash
# Run ESLint
npm run lint
```

## Project Structure

```
├── app/                   # Next.js App Router
│   ├── layout.tsx        # Root layout with fonts and metadata
│   ├── page.tsx          # Main landing page
│   └── globals.css       # Global styles and Tailwind
├── components/           # React components
│   ├── Header.tsx        # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── HealthStandard.tsx # Health standard section
│   ├── Experience.tsx    # Experience section
│   ├── Scorecard.tsx     # Scorecard section
│   ├── Research.tsx      # Research program section
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
│   ├── images/          # Optimized images
│   └── logo.svg         # Vantage logo
└── ...config files
```

## Deployment

This project is configured for automatic deployment to Vercel via GitHub Actions:

1. Push to the `develop` branch triggers a production deployment
2. Pull requests to `develop` create preview deployments
3. Deployments are orchestrated through GitHub Actions workflow

### Manual Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Sections

1. **Hero** - Main landing with tagline
2. **Health Standard** - Preventive health information
3. **Experience** - Three key features of Vantage
4. **Scorecard** - Detailed metrics tracking
5. **Research** - Research program information (starting Feb 2026)

## License

© 2025 Vantage. All Rights Reserved.
