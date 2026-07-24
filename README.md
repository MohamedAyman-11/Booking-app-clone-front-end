# Full Stack Booking App Frontend

A polished React and TypeScript frontend for a property booking platform with role-based experiences for users, hosts, and administrators.

## Overview

This project is a modern web application for browsing and booking properties. It provides a complete frontend experience for property discovery, wishlist management, reservations, reviews, and role-based dashboard workflows. The app is built with Vite, React, Material UI, and TanStack Query, and it integrates with a backend API through a centralized Axios layer.

## ✨ Features

### Authentication and Account Management

- User registration and login
- Google OAuth authentication
- Password recovery and reset flows
- OTP-based account recovery and activation
- Protected routes for guests, authenticated users, hosts, and admins

### Property Experience

- Browse properties on the home page
- View detailed property pages with galleries, amenities, location details, and reviews
- Save and unsave properties to a personal wishlist

### Booking Flow

- Select check-in and check-out dates
- Choose guest count
- Create a booking reservation
- Redirect to payment-related success or cancel pages

### Reviews

- Submit property reviews with multi-category ratings and comments
- View reviews in the property experience and dashboard views

### Role-Based Dashboards

- User dashboard: update profile details, change password, manage saved properties, view reviews, and track bookings
- Host dashboard: create properties, manage owned listings, and review feedback from guests
- Admin dashboard: view stats, manage users, review property requests, moderate properties, and manage reviews

### UI and UX

- Responsive layout for desktop and mobile experiences
- Modern component-based interface using Material UI
- Toast notifications and loading states for a smoother experience

## 📸 Screenshots / Demo

> Add screenshots in the project docs or assets folder and replace the placeholder paths below.

- Homepage: docs/screenshots/home.png
- Property Details: docs/screenshots/property-details.png
- Dashboard: docs/screenshots/dashboard.png

## 🛠️ Tech Stack

- React 19
- TypeScript
- Vite
- Material UI
- Emotion
- React Router DOM
- TanStack Query
- React Hook Form
- Zod
- Axios
- React Hot Toast
- Day.js
- Google OAuth
- Lucide React

## 🏗️ Architecture Overview

The application follows a modular, feature-oriented frontend architecture:

- Components are organized by domain area such as auth, home, property details, bookings, and dashboard
- API calls are centralized in the src/api layer using dedicated Axios instances
- Data fetching and caching are handled with TanStack Query hooks in src/hooks
- Route access is controlled by guarded routes based on authentication and user role
- Shared type definitions and constants live in src/interfaces, src/types, and src/constants

This structure keeps the codebase maintainable and makes it straightforward to extend the platform with new user roles or booking features.

## 📁 Project Structure

```text
src/
  api/           # API modules for auth, users, properties, bookings, saves, reviews, admin, and host operations
  components/    # Reusable UI components by feature area
  hooks/         # TanStack Query hooks for data fetching and mutations
  pages/         # Route-level pages such as home, auth, property details, payment, and dashboard
  interfaces/    # Shared TypeScript interfaces and models
  constants/     # Route, filter, dashboard, and query key constants
  utils/         # Utility functions
  validation/    # Validation logic and schemas
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm

### Install dependencies

```bash
npm install
```

### Environment variables

Create a .env file in the project root and add the following values:

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

## ▶️ Running Locally

Start the development server:

```bash
npm run dev
```

The app will be available in your browser at the local Vite address shown in the terminal.

## 🧪 Available Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
```

## 🚀 Usage Guide

1. Open the application in your browser.
2. Register or log in to access the full experience.
3. Browse available properties and open a property detail page.
4. Save properties to your wishlist if needed.
5. Create a booking reservation for a property.
6. Use the dashboard to manage your profile, bookings, reviews, and property-related actions depending on your role.

## 🤝 Contributing

Contributions are welcome. If you would like to improve the project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Open a pull request with a clear description

## 📬 Contact

If you would like to connect or discuss the project, feel free to reach out through the repository contact details or via your preferred professional channel.
