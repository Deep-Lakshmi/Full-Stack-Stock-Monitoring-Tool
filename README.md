# Zerodha Clone - Full Stack MERN Trading Platform

A full-stack **Zerodha Clone** application built using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)**.
This project replicates the experience of Zerodha's main website and Kite trading dashboard with a separate frontend application, trading dashboard, and a common backend API.

The application includes secure user authentication, authorization, cookie-based session management, API integration, and interactive trading charts.

---

## 🚀 Project Overview

This project consists of three major modules:

```
ZERODHA CLONE
│
├── frontend
│   └── Main Zerodha Website Clone
│
├── dashboard
│   └── Kite Trading Dashboard Clone
│
└── backend
    └── Common Backend API for frontend & dashboard
```

---

# ✨ Features

## 🌐 Main Website (Frontend)

- Responsive Zerodha landing page
- Home page
- About section
- Product pages
- Pricing page
- Support page
- Signup and Login interface
- API integration using Axios

---

## 📊 Trading Dashboard (Kite Clone)

- Trading dashboard UI inspired by Zerodha Kite
- Watchlist management
- Holdings section
- Orders section
- Positions section
- Funds section
- Portfolio view
- Interactive charts
- Stock data visualization using Chart.js

---

## 🔐 Authentication & Authorization

The project includes complete user authentication and authorization.

Features:

- User Signup
- User Login
- Password encryption using bcrypt
- JWT-based authentication
- Cookie-based token storage
- Protected routes
- User authorization middleware

Authentication Flow:

```
User Signup
      |
      ↓
Password Hashing
      |
      ↓
Store User Data in MongoDB
      |
      ↓
Login Verification
      |
      ↓
Generate JWT Token
      |
      ↓
Store Token in Cookie
      |
      ↓
Access Protected Dashboard
```

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Axios

## Dashboard

- React.js
- JavaScript
- HTML5
- CSS3
- Bootstrap
- Chart.js
- React Components
- Axios
- API Integration

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- bcrypt.js

## Database

- MongoDB

---

# 📦 Libraries Used

### Axios

Used for communication between frontend applications and backend APIs.

Example:

```
React Application
        |
        |
      Axios
        |
        ↓
 Express Backend API
```

---

### Chart.js

Used for creating interactive and dynamic stock charts inside the trading dashboard.

Features:

- Line charts
- Market visualization
- Trading data representation

---

### MongoDB

MongoDB is used as the database for storing:

- User information
- Authentication data
- Application-related data

Mongoose is used as an ODM to interact with MongoDB.

---

# 📁 Folder Structure

```
ZERODHA CLONE

├── frontend
│   ├── public
│   ├── src
│   │   ├── landing_page
│   │   ├── test
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── dashboard
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── data
│   │   ├── index.css
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
└── backend
    ├── controllers
    ├── Middlewares
    ├── model
    ├── Routes
    ├── schemas
    ├── util
    ├── index.js
    ├── .env
    ├── .gitignore
    ├── package.json
    └── package-lock.json
---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone <repository-url>
```

---

## Install Dependencies

### Frontend

```bash
cd frontend
npm install
```

### Dashboard

```bash
cd dashboard
npm install
```

### Backend

```bash
cd backend
npm install
```

---

# 🔑 Environment Variables

Create `.env` file inside backend:

```
MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

PORT=your_port_number
```

Create required environment variables according to your configuration.

---

# ▶️ Running the Project

Run backend:

```bash
cd backend
npm start
```

Run frontend:

```bash
cd frontend
npm start
```

Run dashboard:

```bash
cd dashboard
npm start
```

---

# 🔄 Application Architecture

```
Frontend (Zerodha Website)
              |
              |
              ↓
        Backend API
              |
              |
              ↓
          MongoDB


Dashboard (Kite Clone)
              |
              |
              ↓
        Backend API
```

---

# 🔒 Security Features

- Password hashing using bcrypt
- JWT authentication
- Cookie-based token storage
- Protected routes
- Authorization middleware
- Secure API communication

---

### Environment Configuration

- `.env` files are used to store sensitive information like database URLs, JWT secrets, and API configurations.
- `.gitignore` is used to prevent sensitive files and unnecessary folders like `node_modules` from being pushed to GitHub.

# 🚀 Future Enhancements

- Real-time stock price updates
- Payment gateway integration
- Advanced portfolio analytics
- Live market data API integration
- Order execution simulation
- More trading indicators

---

# 👩‍💻 Author

**Deep Lakshmi Kumari**

Full Stack Developer | MERN Stack Developer

---

## ⭐ If you like this project, consider giving it a star!
