# Web & Dashboard Boilerplate - Next.js 16

A modern, full-featured web application boilerplate built with Next.js 16, featuring a complete admin dashboard, user dashboard, and public-facing pages. This project provides a solid foundation for building scalable web applications with TypeScript, Tailwind CSS v4, and a component-based architecture.

## 🚀 Features

### Public Pages

- **Home Page** - Landing page with modern design
- **About Us** - Professional about page with company information
- **Contact Us** - Contact form and support information

### User Dashboard

- **Dashboard Overview** - User dashboard with stats and overview cards
- **Profile Management** - View and update personal information
- **Settings** - Account settings, password management, and preferences
- **Reports** - Generate and manage user reports with advanced filtering

### Admin Dashboard

- **Admin Overview** - Comprehensive admin dashboard with key metrics
- **User Management** - Complete user CRUD operations with data tables
- **Product Management** - Product inventory management system
- **Analytics** - Analytics dashboard with charts and insights
- **Settings** - Admin account and store settings management
- **Profile** - Admin profile management with access controls

### Technical Features

- ✅ **Next.js 16** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS v4** for modern styling
- ✅ **Component-based Architecture** - Reusable, maintainable components
- ✅ **Responsive Design** - Mobile-first, fully responsive layouts
- ✅ **shadcn/ui** - Beautiful, accessible UI components
- ✅ **Data Tables** - Advanced tables with search, sort, and pagination
- ✅ **Dark Mode Ready** - Theme support with next-themes
- ✅ **Route Groups** - Organized routing structure
- ✅ **Layout System** - Shared layouts for dashboard and client pages

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18.x or higher
- **Bun** (recommended) or npm/yarn/pnpm
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd web-and-dashboard-boilerplate-next.js.16
   ```

2. **Install dependencies**

   ```bash
   bun install
   # or
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**

   ```bash
   bun dev
   # or
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── (client)/                 # Public-facing pages
│   │   ├── about-us/            # About Us page
│   │   ├── contact-us/          # Contact Us page
│   │   ├── layout.tsx           # Client layout
│   │   └── page.tsx             # Home page
│   ├── (dashboard)/              # Dashboard pages
│   │   ├── admin-dashboard/     # Admin dashboard routes
│   │   │   ├── analytics/       # Analytics page
│   │   │   ├── products/        # Products management
│   │   │   ├── profile/         # Admin profile
│   │   │   ├── settings/        # Admin settings
│   │   │   ├── users/           # User management
│   │   │   └── page.tsx         # Admin dashboard home
│   │   ├── dashboard/           # User dashboard routes
│   │   │   ├── profile/         # User profile
│   │   │   ├── reports/         # Reports page
│   │   │   ├── settings/        # User settings
│   │   │   └── page.tsx         # User dashboard home
│   │   └── layout.tsx           # Shared dashboard layout
│   ├── globals.css               # Global styles
│   └── layout.tsx                # Root layout
├── components/                    # React components
│   ├── common/                   # Shared components
│   │   ├── data-table.tsx       # Reusable data table
│   │   └── theme-toggle.tsx     # Theme switcher
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── AdminDashboard/      # Admin components
│   │   │   ├── analytics/       # Analytics components
│   │   │   ├── products/        # Product components
│   │   │   ├── profile/         # Profile components
│   │   │   ├── settings/        # Settings components
│   │   │   └── users/           # User management components
│   │   └── UserDashboard/       # User components
│   │       ├── profile/         # Profile components
│   │       ├── reports/         # Reports components
│   │       └── settings/        # Settings components
│   ├── layout/                   # Layout components
│   │   ├── DashboardHeader.tsx  # Dashboard header
│   │   ├── DashboardSidebar.tsx # Dashboard sidebar
│   │   ├── MainHeader.tsx       # Public header
│   │   └── SiteFooter.tsx       # Footer component
│   └── ui/                       # shadcn/ui components
│       ├── button.tsx
│       ├── input.tsx
│       ├── table.tsx
│       └── ...
├── lib/                          # Utility functions
│   └── utils.ts                 # Helper utilities
├── services/                     # API services
│   └── apiService.ts            # API client
├── types/                        # TypeScript type definitions
│   ├── index.d.ts
│   └── user.d.ts
├── public/                       # Static assets
├── components.json               # shadcn/ui configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies and scripts
```

## 🎯 Available Scripts

- `bun dev` - Start development server
- `bun build` - Build for production
- `bun start` - Start production server
- `bun lint` - Run ESLint

## 🎨 Tech Stack

### Core

- **Next.js 16.0.6** - React framework with App Router
- **React 19.2.0** - UI library
- **TypeScript 5** - Type safety

### Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **tw-animate-css** - Animation utilities
- **next-themes** - Dark mode support

### UI Components

- **shadcn/ui** - Accessible component library
- **Radix UI** - Headless UI primitives
- **Lucide React** - Icon library

### Development Tools

- **ESLint** - Code linting
- **Babel React Compiler** - React compiler plugin

## 🔑 Key Features Explained

### Component-Based Architecture

All pages are built using reusable, modular components. Each major feature is split into smaller components for better maintainability and easier API integration.

### Responsive Data Tables

The `DataTable` component provides:

- Search functionality
- Column sorting
- Pagination
- Responsive horizontal scrolling on mobile
- Customizable columns and data

### Layout System

- **Client Layout** - Public pages with header and footer
- **Dashboard Layout** - Shared layout for admin and user dashboards
- Dynamic sidebar and header based on user role

### Route Organization

- Route groups `(client)` and `(dashboard)` for organized routing
- Separate admin and user dashboard routes
- Clean URL structure

## 🚦 Getting Started Guide

### 1. Explore the Public Pages

- Visit `/` for the home page
- Visit `/about-us` for the about page
- Visit `/contact-us` for the contact page

### 2. Access User Dashboard

- Navigate to `/dashboard` for the user dashboard
- Explore profile, settings, and reports pages

### 3. Access Admin Dashboard

- Navigate to `/admin-dashboard` for the admin dashboard
- Manage users, products, view analytics, and configure settings

## 📝 Customization

### Adding New Pages

1. Create a new page file in the appropriate route group
2. Use existing components or create new ones
3. Follow the component-based architecture pattern

### Styling

- Modify `app/globals.css` for global styles
- Use Tailwind utility classes for component styling
- Customize theme colors in Tailwind config

### API Integration

- Update `services/apiService.ts` with your API endpoints
- Modify component data fetching logic
- Update TypeScript types in `types/` directory

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)

---

**Note**: This is a boilerplate project. Make sure to update environment variables, API endpoints, and customize the design according to your project requirements.
