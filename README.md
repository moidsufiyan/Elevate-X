# ElevateX - India's Premier Entrepreneurship Platform

> **🚀 Connecting ambitious founders with expert mentors to build successful startups across India**

ElevateX is a comprehensive, frontend-only entrepreneurship platform designed specifically for the Indian startup ecosystem. It connects entrepreneurs with experienced mentors, investors, and resources to accelerate business growth and success.

## ✨ Features

### 🎯 **Core Platform Features**

- **Mentor Discovery & Matching** - Find industry experts across 50+ domains
- **Investor Directory** - Connect with VCs, Angel Investors, and Government Funds
- **Startup Showcase** - Browse and discover innovative Indian startups
- **Resource Library** - Access business templates, guides, and documentation
- **Event Management** - Discover startup events, workshops, and networking sessions
- **Community Hub** - Engage with fellow entrepreneurs and industry leaders

### 📱 **User Experience**

- **Responsive Design** - Optimized for mobile, tablet, and desktop
- **Dark/Light Mode** - Toggle between themes for comfortable viewing
- **Advanced Search & Filters** - Find exactly what you need quickly
- **Interactive UI** - Smooth animations and modern design patterns
- **Accessibility** - Built with accessibility best practices

### 🏢 **Business Features**

- **Company Profiles** - Detailed pages for startups, mentors, and investors
- **Career Opportunities** - 6+ job listings with competitive Indian salaries
- **Legal Compliance** - Privacy Policy, Terms of Service, Cookie Policy
- **Contact Management** - Multiple contact methods and support channels

## 🛠 Tech Stack

### **Frontend Framework**

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Vite** - Lightning-fast build tool and development server

### **Styling & UI**

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **shadcn/ui** - High-quality, accessible React components
- **Lucide React** - Beautiful, customizable icons
- **CSS Animations** - Smooth transitions and micro-interactions

### **Routing & Navigation**

- **React Router v6** - Client-side routing with nested routes
- **Dynamic Routing** - Detail pages for mentors, startups, investors, etc.
- **Scroll Management** - Automatic scroll-to-top functionality

### **Data Management**

- **Static Data** - TypeScript-based data files for frontend-only operation
- **Custom Hooks** - Reusable logic for data fetching and state management
- **Type Safety** - Comprehensive TypeScript interfaces and types

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v8 or higher (or **yarn** v1.22+)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/elevate-x.git
cd elevate-x
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. **Start development server:**

```bash
npm run dev
# or
yarn dev
```

4. **Open in browser:**
   Navigate to [http://localhost:8080](http://localhost:8080)

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
ElevateX/
├── public/                     # Static assets
│   ├── favicon.svg            # App favicon
│   ├── placeholder.svg        # Placeholder images
│   └── robots.txt            # SEO robots file
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── cards/           # Card components (MentorCard, StartupCard)
│   │   ├── forms/           # Form components (ProfileForms)
│   │   ├── ui/              # shadcn/ui components
│   │   ├── blog/            # Blog-related components
│   │   ├── mentor/          # Mentor-specific components
│   │   ├── matching/        # Matching algorithm components
│   │   ├── founder/         # Founder dashboard components
│   │   ├── session/         # Session management components
│   │   ├── file/            # File upload components
│   │   └── chat/            # Chat/messaging components
│   ├── pages/               # Route components
│   │   ├── legal/           # Legal pages (Privacy, Terms, etc.)
│   │   └── resources/       # Resource subpages
│   ├── data/                # Static data files
│   │   ├── mentors.ts       # 25+ mentor profiles
│   │   ├── startups.ts      # 20+ startup profiles
│   │   ├── investors.ts     # 8+ investor profiles
│   │   ├── events.ts        # 8+ startup events
│   │   ├── blogs.ts         # Blog posts data
│   │   ├── resources.ts     # Resource library data
│   │   ├── communities.ts   # Community data
│   │   └── home.ts          # Homepage data
│   ├── hooks/               # Custom React hooks
│   │   ├── use-mobile.tsx   # Mobile detection
│   │   ├── use-toast.ts     # Toast notifications
│   │   └── useScrollToTop.ts # Scroll management
│   ├── lib/                 # Utility functions and configurations
│   │   ├── utils.ts         # General utilities
│   │   ├── types.ts         # TypeScript type definitions
│   │   ├── data-utils.ts    # Data processing utilities
│   │   └── empty-states.ts  # Empty state configurations
│   ├── App.tsx              # Root component with routing
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── tailwind.config.ts       # Tailwind CSS configuration
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Project dependencies and scripts
```

## 🎨 Key Pages & Features

### **Homepage (`/`)**

- Hero section with compelling value proposition
- Featured mentors and startups carousel
- Platform statistics and testimonials
- Call-to-action sections

### **Mentors (`/mentors`)**

- Advanced filtering by expertise, experience, location
- Mentor cards with ratings and specializations
- Detailed mentor profiles (`/mentor/:id`)
- Booking system for mentorship sessions

### **Startups (`/startup-showcase`)**

- Startup directory with industry filters
- Funding stage and location-based search
- Detailed startup profiles (`/startup/:id`)
- Success stories and growth metrics

### **Investors (`/investors`)**

- VC funds, Angel Investors, Government schemes
- Investment focus and ticket size filters
- Detailed investor profiles (`/investor/:id`)
- Portfolio companies and investment criteria

### **Resources (`/resources`)**

- Business templates and guides
- Documentation and FAQs
- Success stories and case studies
- Events and workshops (`/resources/events`)

### **Company Pages**

- **About Us** - Company story, values, team
- **Careers** - 6+ job openings with Indian salaries (₹6-30 LPA)
- **Contact** - Multiple contact methods, form, social links
- **Legal** - Privacy Policy, Terms of Service, Cookie Policy

## 🌟 Data & Content

### **Rich Static Data**

- **25+ Mentor Profiles** - Detailed bios, expertise, experience
- **20+ Startup Profiles** - Business descriptions, team, funding
- **8+ Investor Profiles** - Investment thesis, portfolio, criteria
- **8+ Events** - Workshops, conferences, networking sessions
- **Comprehensive Resources** - Guides, templates, documentation

### **Indian Context**

- **Locations** - Major Indian cities (Bangalore, Mumbai, Delhi, etc.)
- **Salaries** - Competitive Indian market rates in INR
- **Legal Compliance** - Indian IT Act, data localization
- **Business Culture** - Tailored for Indian entrepreneurship ecosystem

## 🔧 Development Scripts

```bash
# Development
npm run dev          # Start development server (port 8080)
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking

# Utilities
npm run clean        # Clean build artifacts
```

## 🌐 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📱 Mobile Responsiveness

ElevateX is fully responsive and optimized for:

- **Mobile** (320px - 768px)
- **Tablet** (768px - 1024px)
- **Desktop** (1024px+)
- **Large Screens** (1440px+)

## 🚀 Deployment

The application is ready for deployment to any static hosting service:

- **Vercel** (Recommended)
- **Netlify**
- **GitHub Pages**
- **AWS S3 + CloudFront**

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui** - For the beautiful component library
- **Tailwind CSS** - For the utility-first CSS framework
- **Lucide** - For the comprehensive icon set
- **React** - For the powerful frontend framework

---

<div align="center">

**Built with ❤️ for the Indian startup ecosystem**

[🌐 Live Demo](https://elevate-x-demo.vercel.app) • [📧 Contact](mailto:contact@elevatex.in) • [🐛 Report Bug](https://github.com/yourusername/elevate-x/issues)

</div>
