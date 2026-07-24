# Full Stack Booking App Frontend

A modern React and TypeScript frontend for a property booking platform with role-based dashboards for users, hosts, and admins. The app supports authentication, property discovery, wishlist management, booking reservations, reviews, and admin moderation workflows.

## Overview

This project is a polished booking experience built with Vite, React, TypeScript, Material UI, and TanStack Query. It communicates with a backend API through a centralized Axios layer and uses route guards to provide tailored experiences based on the authenticated user role.

## Key Features

- User registration, login, Google OAuth, password recovery, OTP-based account recovery, and account activation
- Protected routes for guest, authenticated, host, and admin access
- Property listing and detailed property pages with image galleries, amenities, location, and guest reviews
- Save and unsave properties for a personal wishlist
- Booking flow with date selection, guest selection, and redirect to payment
- Review submission and management for properties
- Role-based dashboards for:
  - Users: profile updates, security settings, saved properties, reviews, bookings
  - Hosts: property creation, property management, host reviews, reservations
  - Admins: stats, user management, property moderation, review management, property requests
- Responsive layout with a mobile-friendly navigation experience

## Tech Stack

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

## Project Structure

- src/api: API modules for auth, users, properties, bookings, saves, reviews, admin, and host operations
- src/components: UI components organized by feature area such as auth, home, property details, bookings, dashboard, and layout
- src/hooks: TanStack Query hooks and feature-specific handlers
- src/pages: Main route pages for the home page, auth pages, property details, payment pages, and dashboard pages
- src/interfaces, src/types, src/validation: shared TypeScript types, schemas, and validation logic
- src/constants: centralized route, dashboard, filter, amenity, and query key constants

## Authentication and Roles

The app supports:

- Local authentication with email/password
- Google authentication
- Password reset and recovery flows
- Account activation via OTP
- Role-based access control for user, host, and admin experiences

## Booking and Payments

Users can browse properties, select check-in and check-out dates, choose guests, and create a booking. The booking mutation returns a payment URL, and the app routes users to payment success or cancellation screens after the flow completes.

## Reviews

Guests can leave detailed property reviews with category ratings and comments. Reviews are displayed on the property detail page and are also available in the user, host, and admin dashboard views.

## Admin and Host Workflows

Admins can:

- View platform statistics
- Manage users and toggle account status
- Review and approve or reject property requests
- Manage all properties
- Review platform content

Hosts can:

- Become hosts
- Create properties with images and metadata
- View and manage their properties
- Review guest feedback on their properties

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a .env file based on the example:
   ```bash
   cp .env.example .env
   ```
4. Configure the environment variables:
   - VITE_API_URL: your backend API base URL
   - VITE_GOOGLE_CLIENT_ID: your Google OAuth client ID
5. Start the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- npm run dev: start the Vite development server
- npm run build: build the app for production
- npm run lint: run ESLint
- npm run preview: preview the production build

## Environment Variables

```env
VITE_API_URL=http://localhost:5000/api/v1
VITE_GOOGLE_CLIENT_ID=your_google_oauth_client_id
```

## Notes

This frontend is designed to work with a compatible backend API that exposes the auth, user, property, booking, review, save, and admin endpoints used throughout the application.
