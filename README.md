# Rishi Vijay Siloni - Portfolio Website 🚀

Full-stack personal portfolio website of **Rishi Vijay Siloni** — AI/ML Developer, Full-Stack Developer, and Computer Engineering Student.

---

## 📁 Project Structure

```
Portfolio-Website/
├── frontend/               # React + TypeScript + Three.js frontend application
│   ├── public/             # 3D models, textures, and static assets
│   ├── src/                # React components, styles, and animation logic
│   ├── package.json        # Frontend scripts and dependencies
│   ├── vite.config.ts      # Vite configuration
│   └── tsconfig.json       # TypeScript configuration
├── backend/                # Node.js + Express REST API server
│   ├── src/
│   │   ├── controllers/    # API request handlers (e.g. contact form)
│   │   ├── routes/         # Express API routes
│   │   └── server.js       # Main server entry point
│   ├── .env.example        # Environment variable template
│   └── package.json        # Backend scripts and dependencies
├── package.json            # Root workspace scripts to run both apps
└── README.md               # Project documentation
```

---

## 🛠️ Tech Stack

- **Frontend:** React 18, TypeScript, Vite, Three.js, React Three Fiber, GSAP
- **Backend:** Node.js, Express, CORS, Dotenv

---

## ⚡ Quick Start

### 1. Run the Frontend
```bash
# Option A: From root
npm run dev:frontend

# Option B: Directly inside frontend
cd frontend
npm run dev
```
The frontend will start at `http://localhost:5173`.

### 2. Run the Backend
```bash
# Option A: From root
npm run dev:backend

# Option B: Directly inside backend
cd backend
npm run dev
```
The backend API server will start at `http://localhost:5000`.

---

## 📡 Backend Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API status and route guide |
| `GET` | `/api/health` | Health check endpoint |
| `POST` | `/api/contact` | Handles contact form submissions |

---

## 📄 License & Attribution

Based on the open-source creative portfolio template by Moncy Yohannan, modified and customized for Rishi Vijay Siloni under the Personal Portfolio License (PPL) v1.0.
