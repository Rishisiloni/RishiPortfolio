# Portfolio Backend Server

Node.js & Express REST API for Rishi Vijay Siloni's Portfolio Website.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env` (or customize the existing `.env`):
```env
PORT=5000
CLIENT_URL=http://localhost:5173
NODE_ENV=development
```

### 3. Start Development Server
```bash
npm run dev
```
For production:
```bash
npm start
```

---

## 📡 Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/` | API Information |
| `GET` | `/api/health` | Health check endpoint |
| `POST` | `/api/contact` | Submit a message from the contact form |

### Contact Endpoint Payload
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Project Inquiry",
  "message": "Hi Rishi, I'd like to collaborate on a project."
}
```
