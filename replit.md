# Personal Portfolio Application

## Overview

This is a modern single-page personal portfolio application designed with minimalist aesthetics inspired by premium business card design. The application showcases professional information, work experience, education, skills, and projects in an elegant, responsive interface.

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
1. **Hero Section**: Full-viewport introduction with personal branding
2. **Work/Education Toggle**: Dynamic timeline displaying professional background
3. **Skills Section**: Interactive skill badges with hover effects
4. **Projects Gallery**: Masonry grid layout with filtering capabilities
5. **Footer**: Social links and contact information

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

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```