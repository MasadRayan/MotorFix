# 🚗 MotoFix — Car Doctor Server

🔗 **Live API Link:** [https://car-doctor-nextjs-nu.vercel.app/](https://car-doctor-nextjs-nu.vercel.app/)

---

## 📌 Overview

MotoFix is a complete backend system designed for car servicing applications. It provides fully structured API endpoints for bookings, services, users, authentication, admin management, and more.

This server is built using **Express.js** with a clean folder structure, secure middlewares, environment configuration, and MongoDB operations.

---

## 🚀 Features

### ✅ Authentication & Authorization

* User registration & login
* JWT-based authentication
* Admin role verification
* Protected API routes

### 🔧 Services Management

* Get all services
* Get single service by ID
* Add new service (Admin)
* Update & delete service

### 📅 Booking System

* Create booking
* Get all bookings of a user
* Cancel or update booking
* Admin analytics for total bookings

### 👨‍💼 Admin Dashboard API

* Total Users
* Total Bookings
* Total Revenue
* Total Services
* Aggregated insights for charts

### 🛡️ Security

* CORS
* Rate limiting
* Input validation

### 🔧 Utility & Helpers

* Error handling middleware
* Database connector
* Clean reusable controllers

---

## 📁 Folder Structure

```
root
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   ├── middlewares
│   ├── routes
│   ├── utils
│   └── app.js
├── index.js
├── .env
├── package.json
└── README.md
```

---

## 🛠️ Technologies Used

### **Backend**

* Node.js
* Express.js
* MongoDB
* Mongoose

### **Security & Utilities**

* JSON Web Token (JWT)
* Bcrypt
* CORS
* Helmet
* Morgan

### **Deployment**

* Vercel
* GitHub

---

## 🔗 API Endpoints

### 👤 **Auth Routes**

* POST `/api/auth/register`
* POST `/api/auth/login`
* GET `/api/auth/me`

### 🛠️ **Service Routes**

* GET `/api/services`
* GET `/api/services/:id`
* POST `/api/services` (admin)
* PUT `/api/services/:id`
* DELETE `/api/services/:id`

### 📅 **Booking Routes**

* POST `/api/bookings`
* GET `/api/bookings/user/:email`
* DELETE `/api/bookings/:id`

### 👑 **Admin Routes**

* GET `/api/admin/overview`
* PUT `/api/users/:email/make-admin`

---

## ▶️ Run Locally

```
# Clone the project
https://github.com/MasadRayan/MotorFix.git

# Install dependencies
npm install

# Run development server
npm run dev
```


---

## 🤝 Contributing

Contributions are always welcome! Fork the repo and submit a pull request.

---

## 🧑‍💻 Developer

**Masad Rayan**
*MERN Stack Developer · Problem Solver*

---

## ⭐ Support the Project

If you found this project helpful, please give it a ⭐ on GitHub!
