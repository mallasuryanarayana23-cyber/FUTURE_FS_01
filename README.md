# Premium Cinematic Full-Stack Developer Showcase Portfolio

An award-winning, premium, interactive developer portfolio combining high-fidelity visual storytelling with a robust backend architecture. Engineered for recruiters and technical leaders, it delivers a production-grade showcase of both front-end creative engineering (Awwwards-level transitions) and back-end service integration.

🌐 **Live Front-End (Vercel):** [https://suryadev-portfolio.vercel.app](https://suryadev-portfolio.vercel.app)  
⚙️ **Live Back-End API (Render):** [https://suryadev-api.onrender.com](https://suryadev-api.onrender.com)

---

## ⚡ Tech Stack & Architecture

### Front-End (Vite Client)
*   **Core Logic:** React.js (v18.2) & ESM module architecture
*   **Motion & Easing:** Framer Motion (v11) & GSAP (v3) for fine-grained scroll staggers
*   **Smooth Inertia Scrolling:** Lenis Scroll engine for elite page navigation
*   **Responsive Styling:** Tailwind CSS (v3) custom glassmorphic utility tokens
*   **Background Visuals:** HTML5 Canvas 2D drifting starfield engine with mouse-attraction dynamics
*   **SEO Optimization:** React Helmet Async for rich meta, OpenGraph, JSON-LD, and crawling maps

### Back-End (Express API Server)
*   **Environment:** Node.js, Express.js (ESM Module type)
*   **Object Modeling:** Mongoose & MongoDB Atlas
*   **Notification Engine:** Nodemailer with secure SMTP transport
*   **Middleware:** CORS, Express JSON Parser, and custom error handlers
*   **observability:** Standard request logs with timestamps

---

## 💎 Premium Design Features

1.  **Mouse-Reactive Glowing Blobs:** Radial color spots that track cursor movement inside the Hero section.
2.  **3D Tilt Profile Card:** Physical perspective rotation reacting to cursor angle on hover.
3.  **Simulated CSS Mockups:** Live CSS dashboards, interactive agricultural soil gauges, and map search frames in place of static screenshots.
4.  **Floating Label Form Fields:** Text inputs with labels that lift, scale, and change color using custom spring motion.
5.  **Tactile Magnetic Elements:** Quick action buttons that pull slightly towards the mouse on hover.
6.  **Ambient Star Constellations:** Drifting background stars that pulse, twinkle, and drift with mouse coordinates.
7.  **Sleek Preloader Screen:** Cinematic percentage load tracker (0 to 100) detailing system status compiling tasks.
8.  **Scroll Spy Tracking:** Floating sticky glass navbar with layout pills that transition seamlessly to reflect active sections.

---

## 📂 Project Directory Structure

```
portfolio/
 ├── backend/                        # Express Server & Database Configs
 │    ├── config/                    # DB connection helpers
 │    ├── controllers/               # Contact message submission route logic
 │    ├── models/                    # MongoDB Mongoose schemas
 │    ├── routes/                    # API endpoints (/api/contact)
 │    ├── utils/                     # SMTP Nodemailer notifications
 │    ├── .env.example               # Template environment configuration
 │    └── server.js                  # Main server entrypoint
 ├── public/                         # Static Assets
 │    ├── sitemap.xml                # SEO search indexing map
 │    ├── robots.txt                 # Search bot crawling rules
 │    ├── profile.png                # Brand profile photograph
 │    └── malla_surya_resume.pdf     # Developer CV
 └── src/                            # Upgraded Front-End source code
      ├── assets/                    # Image & Vector details
      ├── components/                # Reusable widgets (Cursor, Toast, Magnetic wrappers)
      ├── constants/                 # Centralized portfolio dataset
      ├── layouts/                   # Global page visual wrapper (Scroll, starfield)
      ├── pages/                     # Main landing page view (Home.jsx)
      ├── sections/                  # Modular visual layers (Hero, Skills, Projects, Resume, Contact)
      ├── services/                  # Network HTTP service client
      ├── styles/                    # Global Tailwind styling presets (index.css)
      ├── App.jsx                    # Primary app coordinator & SEO Helmet
      └── main.jsx                   # React initialization entrypoint
```

---

## 🛠️ Installation & Setup Guide

Ensure you have [Node.js](https://nodejs.org/) (v16+) and [MongoDB](https://www.mongodb.com/) installed locally.

### 1. Clone and Navigate
```bash
git clone https://github.com/mallasuryanarayana23-cyber/portfolio.git
cd portfolio
```

### 2. Configure Back-End Secrets
1. Navigate to the `backend/` folder.
2. Duplicate `.env.example` and rename to `.env`.
3. Configure your MongoDB connection string and SMTP details:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/portfolio
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_gmail_app_password
RECEIVER_EMAIL=mallasurya189489@gmail.com
```
*Note: If no SMTP details are supplied during local development, the server logs submissions directly to the console so form functionality never crashes.*

### 3. Run Local Services

**Launch Back-End Server (Port 5000):**
```bash
cd backend
npm install
npm run dev
```

**Launch Front-End Client (Port 5173):**
```bash
# In a new terminal window at the project root
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Deployment Instructions

### Front-End (Vercel)
The front-end integrates seamlessly with Vercel:
1. Connect your GitHub repository to Vercel.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Set Environment Variables:
   *   `VITE_API_URL` = Deployed Backend API URL (e.g. `https://suryadev-api.onrender.com`)

### Back-End (Render or Railway)
Deploy the server as a Web Service:
1. Connect your repository to Render.
2. Set Root Directory: `backend`
3. Set Build Command: `npm install`
4. Set Start Command: `npm start`
5. Configure Environment Variables in the Render Dashboard matching `.env` settings (set `NODE_ENV` to `production`).
