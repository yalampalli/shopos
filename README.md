# Shop OS - AI-Powered E-commerce Platform

A modern, AI-driven e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.

## Features

### Core Functionality
1. **Store Management**
   - Create new stores with custom names and descriptions
   - Upload store assets (images, documents)
   - Generate AI-powered store content
   - View store examples and templates

2. **Product Management**
   - Dynamic product table with images and details
   - Product categorization
   - Price management
   - Product description generation

3. **AI Agents & Tools**
   - Background removal and editing
   - Video generation
   - Image batch processing
   - Smart cropping
   - Description generation
   - Avatar creation
   - AI model integration

4. **Workflow Management**
   - Predefined workflow templates
   - Custom workflow creation
   - Integration with various AI services
   - Real-time workflow status

### Technical Features
1. **Architecture**
   - Atomic Design Pattern
   - Component-based architecture
   - Context-based state management
   - Type-safe development with TypeScript

2. **UI/UX**
   - Responsive design
   - Mobile-first approach
   - Dark/Light theme support
   - Smooth transitions and animations
   - Interactive components

3. **Navigation**
   - Side menu navigation
   - Dynamic routing
   - Breadcrumb navigation
   - Back button functionality

4. **Filtering & Search**
   - Real-time search functionality
   - Category-based filtering
   - Tag-based filtering
   - Dynamic filter chips

### Components
1. **Atomic Components**
   - Buttons (Action, Icon)
   - Input fields
   - Filter chips
   - Menu items

2. **Molecules**
   - Search bar
   - Navigation links
   - Service cards
   - Product cards

3. **Organisms**
   - Side menu
   - Product table
   - Service section
   - Workflow grid

4. **Templates**
   - Main layout
   - Store layout
   - Agent layout

### State Management
- Context API for theme management
- Store context for store data
- Real-time state updates
- Persistent state management

## Technology Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- Heroicons
- React Context API

## Performance
- Optimized images
- Lazy loading
- Component code splitting
- Server-side rendering
- Client-side navigation

## Getting Started
1. Clone the repository
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure 

## Current Best Practices

### Component Architecture
1. **Atomic Design Implementation**
   - `atoms/`: Basic components like ActionButton
   - `molecules/`: Composite components like ActionButtons
   - Clear separation of concerns between component levels
   - Consistent component naming

2. **TypeScript Usage**
   - Strong typing for component props
   - `.tsx` extension for React components
   - Type-safe component development

3. **Styling Approach**
   - Tailwind CSS utility-first methodology
   - Consistent spacing with gap utilities
   - Responsive design classes
   - Standardized icon sizing (w-5 h-5)

4. **Component Structure**
   - Functional components with arrow functions
   - Clean prop interfaces
   - Logical grouping of related components
   - Clear component exports

5. **Import Organization**
   - Grouped imports by type:
     - Component imports first
     - Third-party imports (Heroicons) second
   - Clear import paths
   - Minimal dependencies

6. **UI Consistency**
   - Heroicons as the standard icon library
   - Consistent button patterns
   - Uniform navigation approach
   - Standard layout structures

7. **Navigation Pattern**
   - Consistent href prop usage
   - Clear route naming (/stores, /agents)
   - Organized route structure