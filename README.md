# 📚 BookVerse – Online Book Store Management System

BookVerse is a full-stack **MERN CRUD** application that allows users to manage their personal book collection. The application provides a clean, responsive interface for creating, viewing, updating, and deleting book records with real-time UI updates.

---

## ✨ Features

- 📖 Add new books
- 📚 View all books
- ✏️ Update existing book details
- 🗑️ Delete books
- 🔄 Real-time UI updates after CRUD operations
- 📱 Responsive and user-friendly interface
- ⚠️ Client-side and server-side error handling
- 🌐 RESTful API integration using Axios

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- Axios
- CSS3
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose

---

## 📂 Project Structure

```
BookVerse/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── services/
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    └── package.json
```

---

## 📖 Book Model

Each book contains the following information:

| Field | Type |
|------|------|
| Title | String |
| Author | String |
| Category | String |
| Price | Number |

---

## 🚀 REST API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/books` | Get all books |
| GET | `/api/books/:id` | Get a single book |
| POST | `/api/books` | Add a new book |
| PUT | `/api/books/:id` | Update a book |
| DELETE | `/api/books/:id` | Delete a book |

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone (https://github.com/Syeda-wafa/bookverse-MERN-CRUD.git)
```

```bash
cd bookverse-mern-crud
```

---

### 2️⃣ Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Run the backend

```bash
npm run dev
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Run the React application

```bash
npm run dev
```

---

## 🌍 Live Demo

**Frontend**

```
https://bookverse-mern-crud.vercel.app/
```

**Backend API**

```
https://artistic-intuition-production-ea49.up.railway.app/
```

---

