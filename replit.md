# Personal Portfolio Application

## Overview

This is an elite software engineer portfolio application designed to showcase Petar Nikolić as a top-tier polyglot systems engineer. The portfolio features sophisticated dark theme aesthetics, interactive 3D elements, comprehensive project categorization, and professional-grade micro-interactions that convey technical excellence and attention to detail.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured via Drizzle)
- **Session Management**: In-memory storage with extensible interface

### Design System
- **Typography**: Cormorant Garamond (serif) for headings, Inter (sans-serif) for body text
- **Color Scheme**: Dark theme with navy accents and neutral grays
- **Layout**: Mobile-first responsive design with careful attention to spacing and typography
- **Components**: Consistent component library using Radix UI primitives

## Key Components

### Frontend Components
1. **Hero Section**: Full-viewport introduction with 3D background animations, enhanced micro-interactions, and keyboard shortcuts (R for resume, G for GitHub)
2. **Work/Education Toggle**: Butter-smooth animated pill toggle with professional impact metrics and gradient transitions
3. **Skills Section**: Categorized skill display (Languages, Frameworks, Tooling, CS Fundamentals) with enhanced hover effects
4. **Projects Gallery**: Multi-category showcase featuring Spline 3D, Medical AI, Kernel Work, and Web Applications with performance metrics
5. **Interactive 3D More Projects Tile**: Animated portal to dedicated projects index with particle effects and hover transformations
6. **Enhanced Projects Index**: Category filtering, documentation links, and comprehensive project metrics table

### Backend Infrastructure
1. **Express Server**: RESTful API with middleware for logging and error handling
2. **Database Schema**: Structured data models for users, projects, work experience, and education
3. **Storage Interface**: Abstracted storage layer supporting both in-memory and database persistence
4. **Development Tools**: Hot module replacement and development middleware

### Database Schema
- **Users**: Authentication and user management
- **Projects**: Portfolio project information with technologies and links
- **Work Experience**: Professional history with company details
- **Education**: Academic background and achievements

## Data Flow

1. **Static Content**: Personal information and portfolio data stored in TypeScript modules
2. **Dynamic Content**: Projects and experience data can be managed through database operations
3. **Client-Server Communication**: RESTful API endpoints with JSON data exchange
4. **State Management**: TanStack Query handles caching, synchronization, and optimistic updates
5. **Responsive Design**: CSS Grid and Flexbox for adaptive layouts across devices

## External Dependencies

### Development Dependencies
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety and developer experience
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind CSS

### Runtime Dependencies
- **React Ecosystem**: Core React libraries and hooks
- **UI Libraries**: Extensive Radix UI component collection
- **Database**: Neon serverless PostgreSQL with connection pooling
- **Utilities**: Date manipulation, class name utilities, and form validation

### Design Dependencies
- **Google Fonts**: Cormorant Garamond and Inter font families
- **Lucide Icons**: Consistent icon library
- **React Icons**: Social media and brand icons

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with hot module replacement
- **Database**: Drizzle migrations for schema management
- **Environment Variables**: DATABASE_URL for PostgreSQL connection

### Production Build
- **Frontend**: Static assets built with Vite and served by Express
- **Backend**: Node.js server with bundled dependencies
- **Database**: Serverless PostgreSQL with connection pooling
- **Deployment**: Single-process deployment with static file serving

### Build Process
1. Frontend assets compiled to `dist/public`
2. Backend server bundled to `dist/index.js`
3. Database migrations applied via Drizzle Kit
4. Environment-specific configuration loaded at runtime

## Recent Changes

### June 28, 2025 - Design System Unification & Glow Fix
- **Complete Design System Unification**: All 5 components (Hero, Work/Education, Skills, Projects, Footer) now use canonical design tokens
- **Unified Color Palette**: Converted all hard-coded colors to HSL CSS variables (--bg, --accent-from, --border-color, --brand-sky, --brand-fuchsia)
- **Consistent Layout Structure**: Applied max-w-7xl containers and section-pad spacing across all components
- **Chip System Implementation**: Standardized chip color palette (chip-blue, chip-lime, chip-amber, chip-fuchsia, chip-cyan) across Skills and Projects
- **Typography Hierarchy**: Unified fg-base, fg-subtle, fg-faint text classes for consistent contrast levels
- **Utility Class Adoption**: Implemented canonical toggle-wrap, social-link, timeline-card, and ribbon utility classes
- **Glow Effect Fix**: Restructured HeroEnhanced.tsx layout to prevent background glow clipping at viewport edges
- **Cinematic Flow**: Achieved seamless visual transition from Hero → Work/Education → Skills → Projects → Footer

### June 27, 2025 - CV-Like Structure Migration
- **Removed Featured Work Section**: Eliminated the standalone Featured Work component to create cleaner CV flow
- **Restructured Page Layout**: New section order: Hero → Work/Education → Projects → Skills & Contact
- **Website Showcase Integration**: Moved "Interactive 3D Experience" into regular Projects grid as "Full-Stack Interactive Website Showcase"
- **Category Badge System**: Added "Website Display" badge for the showcase project, maintaining consistent card sizing
- **Clean Vertical Rhythm**: Restored logical CV order with no oversized detours before recruiter reaches experience
- **Project Grid Enhancement**: First card now serves as showcase while maintaining uniform appearance with other project cards

### Previous - Elite Portfolio Transformation  
- **Professional Rebranding**: Updated title from "Freelance Web Developer" to "Software Engineer" with subtitle "Full-stack, distributed systems, real-time data"
- **Enhanced Project Categories**: Added Spline 3D projects, Python AI in Medicine, and Kernel Work with concrete performance metrics
- **Advanced Skills Organization**: Implemented categorized skills display (Languages, Frameworks, Tooling, CS Fundamentals)
- **Interactive 3D Elements**: Added subtle background animations, interactive "More Projects" tile with particle effects
- **Micro-Interactions**: Enhanced button animations, butter-smooth toggle transitions, hover effects with scale and shadow
- **Professional Metrics**: All projects now include concrete impact numbers (accuracy, latency, throughput, performance gains)
- **Documentation Integration**: Added docs links for technical projects, enhanced projects table with category filtering
- **Keyboard Shortcuts**: Implemented R (resume) and G (GitHub) shortcuts for power-user experience
- **Advanced Filtering**: Projects page now supports category, technology, availability, and type filtering

### Project Categories:
1. **Website Display**: Full-stack interactive website showcase (moved from Featured Work)
2. **Spline 3D**: Interactive portfolio explainer, product configurator, data visualization engine
3. **Medical AI**: Melanoma detection CNN (94.2% accuracy), radiograph classifier (96.8% sensitivity), clinical triage bot
4. **Kernel Work**: xv6 shared memory extension, priority scheduler, custom memory allocator
5. **Web Applications**: Enhanced with specific performance metrics and client impact data

## User Preferences

```
Preferred communication style: Simple, everyday language.
Professional positioning: Elite software engineer focused on systems-level work and technical excellence.
```