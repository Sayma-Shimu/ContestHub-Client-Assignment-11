# 🎯 ContestHub – Creative Contest Management Platform

ContestHub is a modern, full-stack contest management web application where users can explore creative contests, participate by paying an entry fee, creators can host contests, and admins manage the entire ecosystem.  
The platform is designed with a clean UI, secure authentication, role-based dashboards, and a smooth payment flow.

---

## 🔗 Live Website
👉 https://your-live-site-link.com

---
## ✨ Key Features
- 🔐 Secure authentication using Firebase & JWT
- 👥 Three user roles: **Admin, Contest Creator, Normal User**
- 🏠 Beautiful, responsive home page with banner & search
- 🔎 Backend-powered contest search by contest type
- 🏆 Popular contests section sorted by highest participation
- 💳 Secure contest registration with payment integration
- 📈 Live participant count update after successful payment
- ⏳ Real-time contest deadline countdown
- 📝 Task submission system after contest registration
- 🥇 Winner declaration system (only one winner per contest)
- 📊 User dashboard with win percentage chart
- 🧑‍🎨 Creator dashboard for contest management & submissions
- 🛡️ Admin dashboard to manage users & approve contests
- 🏅 Leaderboard page ranked by total contest wins
- 🌗 Dark / Light theme toggle (saved in localStorage)
- 📱 Fully responsive for mobile, tablet & desktop
- 🚫 Protected private routes (no logout on refresh)
- 🔔 SweetAlert & Toast notifications for all actions

---

## 🧭 Pages & Routes Overview

### 🌐 Public Pages
- Home
- All Contests
- Leaderboard
- Extra Static Page
- Login & Registration
- 404 Not Found Page

### 🔒 Private Pages
- Contest Details
- User Dashboard
- Creator Dashboard
- Admin Dashboard

---

## 👤 User Dashboard
- My Participated Contests
- My Winning Contests
- Profile Management
- Win Percentage Chart

---

## 🎨 Contest Creator Dashboard
- Add New Contest (react-hook-form)
- Edit / Delete Pending Contests
- View Submissions
- Declare Winner
- Contest Status Tracking

---

## 🛡️ Admin Dashboard
- Manage Users (Role Change)
- Manage Contests (Approve / Reject / Delete)
- Secure admin-only access

---

## 🧪 Challenge Tasks Implemented

 Dark / Light theme toggle



## 🧰 Tech Stack

### 🔹 Frontend
- React
- React Router DOM
- TanStack Query
- Tailwind CSS / Component Library
- Firebase Authentication
- SweetAlert2 & React Toastify
- Framer Motion / AOS (Animation)

### 🔹 Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication
- Stripe (Payment Integration)

---

## 🔐 Security & Best Practices
- Environment variables for Firebase & MongoDB secrets
- JWT protected private APIs
- Role-based access control
- Clean, modular & maintainable codebase
- Meaningful Git commits (Client & Server)


