# ICAINGCIT 2027 Conference Website

Welcome to the official repository for the **International Conference on Next-Gen Computing & Information Technology (ICAINGCIT) 2027**. This project consists of a modern, responsive React frontend and a robust Node.js/Express backend integrated with MongoDB.

## 🌟 Project Architecture

This application is built with a decoupled architecture:

1. **Frontend (`/frontend/icaingcit-react`)**: A single-page application (SPA) built using React and Vite. It utilizes responsive design, intersection observers for scroll animations, and dynamic state management to present conference information cleanly.
2. **Backend (`/backend`)**: A Node.js API server using Express.js. It handles incoming submissions (contact queries, event registrations, and paper submissions) and securely stores them in MongoDB. It uses Multer to handle PDF file uploads securely.

---

## 🛠️ Tech Stack

**Frontend**
- React 18
- Vite
- Tailwind CSS v4 & WebGL Fluid Dynamics

**Backend**
- Node.js & Express.js
- MongoDB & Mongoose (Database & ORM)
- Multer (Multipart/form-data handling for PDF uploads)
- Cors & Dotenv

---

## 📂 Folder Structure

```
ICAINGCIT/
├── backend/                  # Node.js Express API Server
│   ├── models/               # Mongoose Data Models (Contact, Paper, Registration)
│   ├── uploads/              # Local storage for uploaded PDF research papers
│   ├── package.json          # Backend dependencies
│   └── server.js             # API entry point & configuration
│
└── frontend/
    └── icaingcit-react/       # Vite React Application
        ├── public/           # Static assets
        ├── src/
        │   ├── components/   # Modular React Components (Hero, Committee, etc.)
        │   ├── App.jsx       # Main application layout and scroll-reveal logic
        │   ├── index.css     # Global stylesheets and CSS variables
        │   └── main.jsx      # React DOM entry point
        ├── index.html        # HTML template
        └── package.json      # Frontend dependencies
```

---

## 🚀 Functioning of the Website

### Core Features

- **Dynamic Navigation & Scroll Animations**: The website utilizes an `IntersectionObserver` to trigger fade-up animations on elements as they scroll into view, creating a premium feel. The navbar intelligently highlights the current active section.
- **Live Countdown Timer**: A dynamic React `useEffect` hook constantly updates the time remaining until the conference begins.
- **Paper Submission System**: Researchers can submit their papers (in PDF format). The React form sends a `multipart/form-data` request to the backend. The backend `multer` middleware safely saves the file to the `/uploads` directory and stores the paper metadata in MongoDB.
- **Registration & Contact**: Both forms have dynamic error/success feedback states and submit directly to the Express backend where they are logged in the MongoDB Atlas database.

### API Endpoints
- `POST /api/contact` - Saves contact form inquiries.
- `POST /api/register` - Generates a unique Registration ID (`REG-XXXX`) and saves attendee data.
- `POST /api/submit-paper` - Handles PDF file upload, generates a Paper ID (`ICAING-XXXX`), and saves author metadata.

---

## 💻 How to Run Locally

To run this project locally, you will need to open **two separate terminal windows**—one for the backend, and one for the frontend.

### 1. Start the Backend Server

```bash
cd backend
npm install
npm run dev
```
*The server will start on `http://localhost:5000` and confirm connection to MongoDB Atlas.*

### 2. Start the Frontend React App

Open a second terminal window:

```bash
cd frontend
npm install
npm run dev
```
*Vite will start the React development server (typically on `http://localhost:5173`). Open that URL in your browser to view the site.*

---

## 👥 Contributors

- Designed & developed by **CIT Web Team**.
- Supervised by the Department of IT, Chennai Institute of Technology.

© 2027 ICAINGCIT — All rights reserved.
