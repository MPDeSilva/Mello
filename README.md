# Mello - Modern Task Management Platform

A production-ready, full-stack task management application inspired by Trello, built with cutting-edge web technologies. This project demonstrates expertise in modern React development, real-time collaboration features, complex state management, and scalable architecture patterns.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black) ![React](https://img.shields.io/badge/React-19.2-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## 🎯 Project Overview

Mello is a sophisticated Kanban-style project management tool that showcases advanced full-stack development capabilities. It features intuitive drag-and-drop task management, real-time updates, user authentication, and a subscription-based pricing model—all built with modern best practices and scalable architecture.

**Live Demo:** [Add your deployment URL here]

## ✨ Key Features

### 🎨 **Drag & Drop Interface**
- Implemented with `@dnd-kit` for smooth, accessible drag-and-drop functionality
- Tasks can be reordered within columns and moved between columns seamlessly
- Real-time visual feedback and collision detection
- Fully responsive design optimized for mobile and desktop

### 🔐 **Enterprise Authentication**
- Clerk integration for secure, production-ready user authentication
- Social login support and passwordless authentication
- Protected routes with middleware-level security
- Session management with automatic token refresh

### 💳 **Subscription & Monetization**
- Multi-tier pricing system (Free, Pro, Enterprise)
- Integrated Clerk Pricing Tables for seamless payment processing
- Plan-based feature gating with React Context
- Upgrade prompts and limit enforcement for free users

### 📊 **Advanced Task Management**
- Customizable boards with color coding and descriptions
- Task cards with priorities (low, medium, high), due dates, and assignees
- Column organization with drag-to-reorder functionality
- Task filtering and search capabilities
- Real-time task count badges

### 🗄️ **Robust Backend Architecture**
- Supabase integration for scalable PostgreSQL database
- TypeScript models for type-safe data operations
- Server-side rendering (SSR) for optimal performance
- Custom React hooks for data fetching and state management

### 🎨 **Modern UI/UX**
- Built with Radix UI primitives for accessibility
- Tailwind CSS for responsive, utility-first styling
- shadcn/ui components for consistent design system
- Lucide React icons for crisp, scalable iconography
- Smooth animations with `tw-animate-css`

## 🛠️ Technical Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 16, React 19, TypeScript 5 |
| **Styling** | Tailwind CSS 4, Radix UI, shadcn/ui |
| **State Management** | React Context API, Custom Hooks |
| **Authentication** | Clerk (with middleware protection) |
| **Database** | Supabase (PostgreSQL) |
| **Drag & Drop** | @dnd-kit (core, sortable, utilities) |
| **Dev Tools** | ESLint, React Compiler, PostCSS |

## 🏗️ Architecture Highlights

### Component Architecture
- **Client Components**: Interactive UI with `"use client"` directive
- **Server Components**: Optimized data fetching and SEO
- **Reusable UI Library**: Modular component system in `/components/ui`
- **Custom Hooks**: Abstracted business logic (`useBoards`, `usePlan`)
- **Context Providers**: Global state management for plans and auth

### Project Structure
```
mello/
├── app/                    # Next.js App Router
│   ├── boards/[id]/       # Dynamic board pages with drag-drop
│   ├── dashboard/         # User dashboard with board management
│   ├── pricing/           # Subscription pricing page
│   └── page.tsx           # Landing page
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui component library
│   └── navbar.tsx        # Navigation component
├── lib/
│   ├── contexts/         # React Context providers
│   ├── hooks/            # Custom React hooks
│   └── supabase/         # Database client and models
└── middleware.ts         # Route protection with Clerk
```

## 💡 What This Project Demonstrates

### Full-Stack Proficiency
- End-to-end application development from authentication to data persistence
- RESTful API integration with Supabase
- Server-side and client-side rendering strategies

### Advanced React Patterns
- Custom hooks for encapsulating complex logic
- Context API for global state management
- Compound components and render props patterns
- Optimistic UI updates for better UX

### Modern Development Practices
- TypeScript for type safety and better developer experience
- Responsive design with mobile-first approach
- Accessibility-first component library (Radix UI)
- Performance optimization with Next.js 16 features

### Complex UI Interactions
- Drag-and-drop with collision detection and sorting
- Modal dialogs and form validation
- Dynamic routing with Next.js App Router
- Real-time data updates and filtering

### Production-Ready Features
- Authentication and authorization
- Subscription management and payment processing
- Error handling and loading states
- Database schema design and relationships

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ and npm/yarn/pnpm
- Supabase account and project
- Clerk account for authentication

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/mello.git
cd mello
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
# Create .env.local file with:
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🗃️ Database Schema

The application uses a relational database with three main tables:

- **Boards**: User-owned project boards with title, description, and color
- **Columns**: Sortable columns within boards (e.g., "To Do", "In Progress", "Done")
- **Tasks**: Individual tasks with priority, assignee, due dates, and sort order

## 🎓 Key Learnings & Achievements

- Implemented complex drag-and-drop functionality with accessibility in mind
- Integrated multiple third-party services (Clerk, Supabase) seamlessly
- Built a scalable component architecture using modern React patterns
- Designed and implemented a subscription-based business model
- Optimized performance with Next.js App Router and React Server Components
- Created a fully responsive UI that works across all device sizes

## 📈 Future Enhancements

- [ ] Real-time collaboration with WebSockets
- [ ] Team workspaces and role-based permissions
- [ ] Activity logs and audit trails
- [ ] File attachments and comments on tasks
- [ ] Email notifications and reminders
- [ ] Dark mode support
- [ ] Advanced filtering and search with full-text search
- [ ] Data export functionality (CSV, PDF)

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Connect

Built by [Your Name] - [Your LinkedIn](https://linkedin.com/in/yourprofile) | [Portfolio](https://yourportfolio.com) | [Email](mailto:your@email.com)

---

⭐ If you found this project interesting, please consider giving it a star!
