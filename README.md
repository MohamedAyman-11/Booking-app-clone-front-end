# Full-Stack Booking App Frontend

<div align="center">
  <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1400&q=80" alt="Modern booking app banner" width="100%" />
</div>

<div align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite" alt="Vite" />
  <img src="https://img.shields.io/badge/MUI-9-007FFF?style=for-the-badge&logo=mui" alt="Material UI" />
  <img src="https://img.shields.io/badge/TanStack%20Query-5-FF4154?style=for-the-badge&logo=reactquery" alt="TanStack Query" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License" />
</div>

---

## 🌐 Project Overview

This frontend delivers a polished booking experience for browsing properties, viewing detailed listings, reserving stays, and managing account, host, and admin workflows. Built with React, TypeScript, and Material UI, it connects to a backend API through dedicated Axios instances and uses TanStack Query for data fetching and cache management.

---

## 🚀 Live Demo

- Frontend Live Demo: https://your-demo-url.example
- Backend API: https://your-api-url.example
- API Documentation: https://your-api-docs.example

---

## ✨ Features

### 🔐 Authentication

- Local registration and login
- Google OAuth login
- Forgot password, reset password, account activation, and account restore flows
- Protected routes for guest, user, host, and admin roles
- Logout and account removal flows

### 🏡 Property Browsing

- Home page property listing cards
- Property detail pages with gallery, host info, amenities, location, and reviews
- Save and unsave property actions
- Booking widget with date selection and guest count

### 📅 Booking & Payments

- Create bookings with check-in, check-out, and guest selection
- Redirect to payment flow from the frontend
- Payment success and cancellation pages

### 📝 Reviews

- Review display on property details
- User review management in dashboard
- Host and admin review views

### 💾 Saved Properties

- Wishlist/saved properties view in the dashboard

### 🧑‍💼 Host Dashboard

- Create and submit properties for review
- View host-owned properties
- Review management for hosts

### 🛠️ Admin Dashboard

- Dashboard statistics
- Manage properties
- Review property requests
- Manage users
- Review moderation panel

### 📱 Responsive Design

- Mobile and desktop navigation
- Mobile booking experience
- Responsive cards, galleries, and dashboard layouts

### 🎨 UI & Experience

- Custom Material UI theme with branded colors
- Inter font integration
- Toast notifications for feedback
- Interactive image carousels and galleries

### 🧾 Forms & Validation

- React Hook Form for form state
- Zod-based validation schemas

---

## 🧰 Tech Stack

| Category              | Technology                              |
| --------------------- | --------------------------------------- |
| Core                  | React 19                                |
| Language              | TypeScript                              |
| Build Tool            | Vite 8                                  |
| UI                    | Material UI 9                           |
| Routing               | React Router 7                          |
| Data Fetching         | TanStack Query                          |
| HTTP Client           | Axios                                   |
| Forms                 | React Hook Form                         |
| Validation            | Zod                                     |
| Date Handling         | Day.js                                  |
| Carousels / Galleries | Swiper, LightGallery                    |
| Auth                  | Google OAuth                            |
| Notifications         | React Hot Toast                         |
| Cloudinary            | Not used directly                       |
| Stripe                | Not integrated directly in the frontend |

---

## 🗂️ Folder Structure

```text
.
├── public/
│   └── img/
├── src/
│   ├── api/
│   ├── auth/
│   ├── components/
│   │   ├── auth/
│   │   ├── bookings/
│   │   ├── dashboard/
│   │   ├── home/
│   │   ├── layout/
│   │   ├── payment/
│   │   └── ui/
│   ├── config/
│   ├── constants/
│   ├── hooks/
│   │   ├── admin/
│   │   ├── auth/
│   │   ├── booking/
│   │   ├── handlers/
│   │   ├── host/
│   │   ├── property/
│   │   ├── save/
│   │   └── user/
│   ├── interfaces/
│   ├── lib/
│   ├── pages/
│   │   ├── auth/
│   │   └── dashboard/
│   ├── router/
│   ├── styles/
│   ├── svg/
│   ├── types/
│   ├── utils/
│   └── validation/
```

---

## ⚙️ Installation

```bash
git clone <repository-url>
cd full-stack-booking-app-clone-fornt-end
npm install
npm run dev
```

---

## 🔑 Environment Variables

| Variable              | Required | Description                      |
| --------------------- | -------: | -------------------------------- |
| VITE_API_URL          |      Yes | Base URL for the backend API     |
| VITE_GOOGLE_CLIENT_ID |      Yes | Google OAuth client ID for login |

---

## ▶️ Available Scripts

| Script          | Purpose                              |
| --------------- | ------------------------------------ |
| npm run dev     | Start the Vite development server    |
| npm run build   | Create a production build            |
| npm run preview | Preview the production build locally |
| npm run lint    | Run ESLint across the project        |

---

## 🧭 Pages

| Route                                        | Description                            |
| -------------------------------------------- | -------------------------------------- |
| /                                            | Home page with featured property cards |
| /property?property_id=...                    | Property detail page                   |
| /register                                    | Registration screen                    |
| /login                                       | Login screen                           |
| /recovery-email                              | Password recovery request              |
| /reset-password/:token                       | Password reset                         |
| /restore-my-account                          | Restore account flow                   |
| /activate-account                            | Activate account                       |
| /payment-success                             | Payment success state                  |
| /payment-cancel                              | Payment cancellation state             |
| /dashboard/my-account                        | User dashboard home                    |
| /dashboard/my-account/personal-details       | Update personal information            |
| /dashboard/my-account/update-password        | Update password                        |
| /dashboard/my-account/my-wishlist            | Saved properties                       |
| /dashboard/my-account/reviews                | User reviews                           |
| /dashboard/my-account/reservations           | Booking history                        |
| /dashboard/my-account/add-property           | Host property creation                 |
| /dashboard/my-account/my-properties          | Host property list                     |
| /dashboard/my-account/host-reviews           | Host reviews                           |
| /dashboard/my-account/admin/stats            | Admin statistics                       |
| /dashboard/my-account/admin/properties       | Admin properties                       |
| /dashboard/my-account/admin/users            | Admin users                            |
| /dashboard/my-account/admin/property-request | Admin property requests                |
| /dashboard/my-account/admin/reviews          | Admin reviews                          |

---

## 🧩 Components

| Component              | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| Hero                   | Welcome section on the home page               |
| Navbar / MobileNavbar  | Main navigation                                |
| PropertyCard           | Property listing card                          |
| PropertyDetailsContent | Full property detail experience                |
| Booking                | Reservation widget with date picker and guests |
| AddPropertyForm        | Host property creation form                    |
| ResponsiveAppBar       | Dashboard shell navigation                     |
| CustomToaster          | Global toast notifications                     |
| ReviewsCard            | Review presentation UI                         |

---

## 🏗️ Project Architecture

<details>
<summary>How the app is organized</summary>

- Pages contain route-level screens such as Home, Property Details, Auth views, and dashboard experiences.
- Components are split by domain: layout, home, property details, bookings, auth, dashboard, payment, and shared UI.
- Hooks encapsulate React Query mutations and queries for auth, user, booking, host, admin, property, save, and review operations.
- Services are centered around Axios instances from the shared API layer.
- Layouts handle the global shell for the storefront and dashboard.
- Theme configuration is centralized in the MUI theme file.
- Utility functions and validation schemas keep the app consistent and reusable.

</details>

---

## 🧠 State Management

The project uses a lightweight state strategy:

- TanStack Query handles server-state fetching, caching, and mutation invalidation.
- React Hook Form manages form state for authentication, profile updates, property creation, and booking flows.
- Local component state is used for UI interactions such as date selection, guest count, and image previews.
- There is no Redux or Zustand store in the current frontend implementation.

---

## 📱 Responsive Design

The UI is built with MUI breakpoints and adapts for mobile, tablet, and desktop screens. The app includes a dedicated mobile navigation experience, a compact booking bar for small screens, and responsive cards and gallery layouts to keep the experience usable across devices.

---

## 🔌 API Integration

The frontend communicates with the backend through a centralized Axios setup in the API layer. Dedicated instances are used for:

- Authentication
- User profile and account management
- Properties
- Saved properties
- Admin operations
- Bookings
- Reviews

All API clients use cookie-based requests via Axios with credentials enabled, and the base URL is configured through environment variables.

---

## ⚡ Performance Optimizations

The current implementation already includes several practical performance choices:

- TanStack Query caching for repeated data requests
- Responsive rendering for mobile and desktop gallery experiences
- Lightweight component composition for reusable UI blocks
- Swiper-based image carousels for smooth visual loading

---

## 🌱 Future Improvements

Potential next steps for the project:

- Add a dedicated search and filter experience
- Introduce pagination or infinite scrolling for large property lists
- Add optimistic UI updates for save, booking, and review actions
- Improve loading skeletons and empty-state polish
- Add unit and integration tests
- Introduce route-level code splitting for larger dashboard modules

---

## 🤝 Contributing

Contributions are welcome. Please open an issue or submit a pull request with a clear explanation of your changes.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👤 Author

- GitHub: https://github.com/your-username
- LinkedIn: https://linkedin.com/in/your-username
- Email: your.email@example.com
- Portfolio: https://your-portfolio.example
