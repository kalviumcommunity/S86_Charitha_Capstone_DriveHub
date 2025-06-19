# 🚗 DriveHub – Vehicle Rental Management System

**Start the Drive. Own the Road.**  
A full-stack MERN application that simplifies and streamlines vehicle rentals for customers, vehicle owners, and administrators.

---

## 📌 Overview

### 🔴 The Problem
Managing vehicle rentals traditionally involves fragmented systems and manual processes — leading to delays, errors, and poor customer experiences.

### 🟢 The Solution
**DriveHub** centralizes the vehicle rental experience on a modern web platform. With role-based dashboards, real-time booking management, and a sleek UI, DriveHub offers seamless coordination for all users.

---

## ✨ Features

### 🔐 Role-Based Authentication
Secure login system for three roles:
- **Admin**
- **Vehicle Owner**
- **Customer**

### 🚘 For Vehicle Owners
- Register and manage multiple vehicles
- Set pricing, availability, and details
- View upcoming bookings and rental history

### 📍 For Customers
- Browse vehicles by location, type, price, and date
- Book, cancel, or modify bookings
- View vehicle details with photos and availability calendar

### 🛠️ For Admins
- Manage users and vehicles
- Flag and investigate suspicious activity
- View overall bookings and platform metrics

---

## 🏗️ Tech Stack

| Layer         | Technologies                       |
|---------------|------------------------------------|
| Frontend      | React.js, Tailwind CSS, Framer Motion |
| Backend       | Node.js, Express.js (ESM)          |
| Database      | MongoDB with Mongoose              |
| Authentication| JWT + Role-Based Middleware        |
| Deployment    | Vercel (Frontend), Render (Backend)|
| UI Components | Recharts, React Icons, QR Libraries |

---

## 👥 User Roles & Capabilities

| Role         | Capabilities |
|--------------|--------------|
| **Admin**    | Manage users & listings, approve/flag vehicles |
| **Owner**    | Add/manage vehicles, view bookings |
| **Customer** | Browse, book, update/cancel reservations |

---

## 🗓️ 45-Day Development Plan

### 🏗️ Phase 1: Core Setup & Authentication (Days 1–7)

| Day | Task | Deliverable | Testing |
|-----|------|-------------|---------|
| 1 | Initialize Vite + React + Tailwind frontend | Base UI setup | `npm run dev` |
| 2 | Setup Node.js + Express + MongoDB backend | API server with DB connection | Postman/ThunderClient |
| 3 | Implement JWT authentication (Login/Register) | Secure login/signup APIs | Token and session test |
| 4 | Create Admin, Owner, and Customer roles | Role-based access control | Manual route validation |
| 5 | Build dashboard placeholders for all roles | Separate dashboard UIs | UI route check |
| 6 | Develop role-based protected routes | Backend middleware auth | Role access checks |
| 7 | Deploy backend on Render | Live API link ready | Smoke test |

### ⚙️ Phase 2: Core Functionality (Days 8–21)

| Day | Task | Deliverable | Testing |
|-----|------|-------------|---------|
| 8 | Vehicle Owner: Add/manage vehicle listings | CRUD functionality | DB entry check |
| 9 | Customer: Browse/filter vehicle listings | Filter UI + API integration | Search + filter validation |
| 10 | Customer: View detailed vehicle profile | Dynamic route page | Info render test |
| 11 | Booking System: Add booking flow | Date/time picker + availability | Booking collision test |
| 12 | Owner: View bookings & rental history | Dashboard booking logs | Data match test |
| 13 | Customer: Cancel/update booking | Booking management | Update/cancel test |
| 14 | Admin: Manage users and vehicles | User table + delete/edit | Admin role check |
| 15 | Admin: Flag/report suspicious activity | Reporting feature | Flag + notes check |
| 16 | Add email confirmation for bookings | Email notifications | Inbox test |
| 17 | Implement QR-based check-in system | QR generator + scan view | QR scan test |
| 18 | Role-based dashboard content | Display only relevant data | Role view test |
| 19 | Performance optimization with MongoDB indexes | Index on vehicle/date fields | Query speed test |
| 20 | Secure backend routes & implement rate limiting | AuthGuard + spam protection | Repeated request check |
| 21 | Deploy frontend on Vercel/Netlify | Live fullstack frontend | E2E smoke test |

### 🎨 Phase 3: UI/UX Enhancements (Days 22–35)

| Day | Task | Deliverable | Testing |
|-----|------|-------------|---------|
| 22 | Add Framer Motion animations | Page transitions | Visual feedback |
| 23 | Dark/light theme toggle | Theme persistence | Toggle check |
| 24 | Add skeleton loaders & spinners | Loading feedback | Network delay simulation |
| 25 | Form validation + error handling (Yup, Toasts) | UX-friendly forms | Wrong input test |
| 26 | Role-based sidebar/header navigation | Dynamic navigation | Menu condition test |
| 27 | Ensure mobile-first responsiveness | Tablet/Mobile layout | Cross-device test |
| 28 | Pagination, filtering, sorting in dashboards | Efficient data views | UI controls |
| 29 | Optimize image uploads (vehicle photos) | Size limit + preview | Upload speed/format |
| 30 | Availability calendar for owners | Select/book blocked dates | Date picker sync |
| 31 | Clipboard feature for booking IDs | Quick booking info sharing | Copy-paste test |
| 32 | Dashboard analytics (Recharts) | Metrics for Admin/Owner | Visual test |
| 33 | Accessibility: tooltips, ARIA labels, modals | Screen-reader support | Keyboard nav |
| 34 | Consistent spacing, color tokens, fonts | Visual brand polish | UI audit |
| 35 | Peer review of UI/UX | Feedback incorporation | Peer walkthrough |

### 🚀 Phase 4: Testing, Documentation & Launch (Days 36–45)

| Day | Task | Deliverable | Testing |
|-----|------|-------------|---------|
| 36 | Write backend unit tests (Jest) | API test coverage | `npm run test` |
| 37 | Perform E2E tests (Cypress/Playwright) | User flow automation | Flow success/failure |
| 38 | Implement rate limiting on key endpoints | Prevent abuse | Stress test |
| 39 | Add Mongoose schema validations | Strict DB inserts | Invalid input test |
| 40 | Implement 404 and error fallback pages | Smooth error routing | Broken link test |
| 41 | Final full-stack deployment | Production-ready build | E2E walkthrough |
| 42 | Record demo video (3–5 mins) | Platform tour | Peer review |
| 43 | Finalize README, setup guide, API docs | Clear onboarding docs | Markdown lint |
| 44 | Conduct user testing & gather feedback | Feedback form/report | Bug list |
| 45 | Plan version 2 features (e.g. mobile app, AI recommendations) | Expansion doc | Team sync |

---

## 🔗 Resources

- 🔥 [Live Frontend URL (Vercel)](https://your-frontend.vercel.app)
- 🔌 [Live Backend API (Render)](https://your-backend.onrender.com)
- 🎨 [Figma Design](https://figma.com/file/your-design-link)
- 📽️ [Demo Video](https://drive.google.com/your-demo-link)

---

## 🧩 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/kalviumcommunity/S86_Charitha_Capstone_DriveHub.git

# Install frontend dependencies
cd client
npm install
npm run dev

# Install backend dependencies
cd ../server
npm install
npm run dev

