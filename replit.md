# Portfolio Application - replit.md

## Overview

This is a modern personal portfolio website built as a full-stack web application showcasing a Java developer's professional experience and projects. The application features a clean, responsive design with smooth animations and is built using a React frontend with an Express.js backend, configured for easy deployment and development on Replit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development practices
- **Styling**: Tailwind CSS with custom design system using warm color palette (beige, gray, charcoal)
- **UI Components**: Comprehensive component library using Radix UI primitives with shadcn/ui styling
- **Animations**: Framer Motion for smooth page transitions and scroll-based animations
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules for modern JavaScript features
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Database Provider**: Neon serverless PostgreSQL for cloud hosting
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Hot reload and development middleware integration

### Design System
- **Component Library**: Custom implementation of shadcn/ui components
- **Color Scheme**: Warm, professional palette with CSS custom properties for theming
- **Typography**: Clean, readable font hierarchy optimized for professional presentation
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints
- **Accessibility**: ARIA-compliant components with keyboard navigation support

## Key Components

### Frontend Components
1. **Portfolio Sections**:
   - Hero section with personal introduction
   - About section with professional background
   - Skills section with technology icons and descriptions
   - Projects section with detailed project showcases
   - Experience section highlighting work history
   - Contact section with social links

2. **UI Components**: Complete set of reusable components including buttons, cards, dialogs, forms, navigation, and data display elements

3. **Layout Components**: Responsive navigation, section dividers, and consistent spacing system

### Backend Components
1. **Server Setup**: Express application with middleware for JSON parsing, logging, and error handling
2. **Database Integration**: Drizzle ORM configuration for PostgreSQL with migration support
3. **Storage Interface**: Abstracted storage layer with in-memory implementation for development
4. **Route Registration**: Modular route system for API endpoints

### Shared Components
1. **Database Schema**: User model with Zod validation schemas
2. **Type Definitions**: Shared TypeScript types between frontend and backend

## Data Flow

### Development Workflow
1. Frontend served by Vite development server with HMR
2. Backend API routes prefixed with `/api` for clear separation
3. Proxy configuration routes API calls to Express server
4. Database operations through Drizzle ORM with type safety

### Production Workflow
1. Frontend built as static assets by Vite
2. Backend compiled to single JavaScript bundle with esbuild
3. Static files served by Express in production mode
4. Database migrations applied via Drizzle Kit

### Data Models
- **User Model**: Basic user structure with username and password fields
- **Extensible Schema**: Foundation for adding portfolio-specific data models

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL client for Neon database
- **drizzle-orm**: Type-safe ORM with excellent TypeScript integration
- **@tanstack/react-query**: Powerful data fetching and caching library
- **framer-motion**: Production-ready motion library for React

### UI Dependencies
- **@radix-ui/***: Comprehensive set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid UI development
- **class-variance-authority**: Type-safe variant API for component styling
- **lucide-react**: Beautiful, customizable icon library

### Development Dependencies
- **vite**: Next-generation frontend tooling for fast development
- **tsx**: TypeScript execution engine for development server
- **esbuild**: Fast JavaScript bundler for production builds

## Deployment Strategy

### Development Environment
- **Local Development**: Vite dev server with Express backend proxy
- **Hot Reload**: Full-stack hot reload with Vite HMR and tsx watch mode
- **Database**: Neon serverless PostgreSQL for consistent dev/prod environments

### Production Deployment
- **Build Process**: 
  1. Frontend assets built and optimized by Vite
  2. Backend compiled to single bundle with esbuild
  3. Static files served directly by Express
- **Database**: Production Neon PostgreSQL with migrations
- **Environment**: Node.js runtime with process.env configuration

### Replit Integration
- **Development Banner**: Automatic Replit development banner for external access
- **Cartographer Plugin**: Enhanced debugging and development tools in Replit environment
- **Runtime Error Overlay**: Development-time error handling and display

### Key Architectural Decisions

1. **Monorepo Structure**: Single repository with shared types and clear separation of concerns between client, server, and shared code

2. **Type Safety**: End-to-end TypeScript with shared schemas and strict type checking

3. **Database Choice**: PostgreSQL with Drizzle ORM chosen for type safety, performance, and excellent developer experience

4. **Component Architecture**: Radix UI primitives provide accessibility and flexibility while maintaining design consistency

5. **State Management**: TanStack Query handles server state while keeping client state minimal and local

6. **Build Strategy**: Vite for frontend and esbuild for backend provide fast development and optimized production builds

7. **Styling Approach**: Tailwind CSS with custom design tokens enables rapid development while maintaining design consistency