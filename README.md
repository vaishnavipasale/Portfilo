# Portfolio — React + Node/Express

A full-stack developer portfolio. React (Vite) frontend, Express backend serving
project data and handling the contact form.

## Project structure

```
portfolio-project/
├── client/                      # React frontend (Vite)
│   ├── src/
│   │   ├── api/
│   │   │   └── api.js           # fetch helpers for the backend API
│   │   ├── components/
│   │   │   ├── Nav.jsx
│   │   │   ├── Hero.jsx         # boot-sequence typing animation
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx       # animated skill meters
│   │   │   ├── Projects.jsx     # fetches project list from API
│   │   │   ├── Timeline.jsx     # career changelog
│   │   │   ├── Contact.jsx      # working contact form
│   │   │   └── Footer.jsx
│   │   ├── hooks/
│   │   │   └── useReveal.js     # scroll-triggered reveal animation hook
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css            # design tokens + all styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .env.example
│
├── server/                      # Node/Express backend
│   ├── src/
│   │   ├── config/
│   │   │   └── mailer.js        # optional SMTP transporter
│   │   ├── controllers/
│   │   │   ├── projects.controller.js
│   │   │   └── contact.controller.js
│   │   ├── data/
│   │   │   └── projects.js      # project data (swap for a DB later)
│   │   ├── middleware/
│   │   │   └── errorHandler.js
│   │   ├── routes/
│   │   │   ├── projects.routes.js
│   │   │   └── contact.routes.js
│   │   └── index.js             # server entry point
│   ├── package.json
│   └── .env.example
│
└── .gitignore
```

## Getting started

You'll need Node.js 18+ installed.

### 1. Backend

```bash
cd server
cp .env.example .env
npm install
npm run dev
```

Runs on `http://localhost:5000`. Contact form emails are optional — without
SMTP credentials in `.env`, submissions are just logged to the console so
the form still works in local dev.

### 2. Frontend

In a second terminal:

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

Runs on `http://localhost:5173` and proxies `/api` requests to the backend.

### 3. Customize

- **Your info**: edit the content directly in `client/src/components/`
  (`Hero.jsx`, `About.jsx`, `Skills.jsx`, `Timeline.jsx`, `Contact.jsx`)
- **Projects**: edit `server/src/data/projects.js` — the frontend fetches
  this live from `GET /api/projects`
- **Colors/fonts**: edit the CSS variables at the top of `client/src/index.css`
- **Contact email delivery**: fill in `SMTP_*` values in `server/.env` (Gmail
  app passwords work well for this)

## Deploying

- **Frontend**: `npm run build` in `client/` produces a static `dist/`
  folder — deploy to Vercel, Netlify, or any static host.
- **Backend**: deploy `server/` to Render, Railway, Fly.io, or similar.
  Update `VITE_API_URL` in the client's `.env` to point at the deployed
  API URL, and `CLIENT_ORIGIN` in the server's `.env` to your deployed
  frontend URL.
