# 🚀 Nitesh — AI/ML Engineer Portfolio Website

A modern, animated personal portfolio website built with React, Three.js, and Framer Motion. Features a cinematic loader, 3D robot model, particle effects, cursor trail, and smooth section transitions — deployed live on GitHub Pages.

🌐 **Live Site:** [nithu0035.github.io/Portfolio-Website](https://nithu0035.github.io/Portfolio-Website)

---

## ✨ Features

- 🎬 **Cinematic Loader** — "ACCESS GRANTED" boot-up animation before the site loads
- 🤖 **3D Robot Hero** — Animated robot GIF + Three.js 3D model in the Hero section
- ✨ **Cursor Trail Effect** — Custom glowing cursor trail throughout the site
- 💫 **Particle Background** — tsParticles floating particle system
- 🎞️ **Framer Motion Animations** — Smooth page transitions and section reveals with AOS scroll effects
- 👤 **About Section** — Stats showcase (94% CNN · 90% ML · ~40% RAG Boost · 4 Projects)
- 🧠 **Skills Section** — Grouped skill pills: Languages, AI/ML, LLM & Vector DB, Backend & DevOps, Data & Analytics
- 🗂️ **Projects Section** — 4 detailed AI/ML project cards with tech stack, highlights, and GitHub links
- 📜 **Certificates Section** — Deloitte, Microsoft, Google GenAI, Tata certificates (PDF viewer)
- 📬 **Contact Section** — Contact form
- 💬 **Feedback Section** — User feedback/testimonials panel
- 📄 **Resume Download** — Direct PDF resume download

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | React 18, Vite |
| 3D Graphics | Three.js, @react-three/fiber, @react-three/drei |
| Animations | Framer Motion, AOS |
| Particles | tsParticles, react-tsparticles |
| Charts | Chart.js, react-chartjs-2 |
| Styling | Tailwind CSS, PostCSS |
| Icons | react-icons |
| Deployment | GitHub Pages (gh-pages) |

---

## 📁 Project Structure
```
Portfolio-Website/
├── public/
│   ├── certificates/        # PDF certificates
│   ├── models/              # 3D robot model
│   └── my_resume.pdf        # Downloadable resume
├── src/
│   ├── assets/              # Robot GIF, images
│   ├── components/
│   │   ├── Hero.jsx         # Landing section with typing animation & taglines
│   │   ├── About.jsx        # Stats cards & bio
│   │   ├── SkillsAnimated.jsx  # Grouped skill pills with hover effects
│   │   ├── Projects.jsx     # Project cards with GitHub links
│   │   ├── Certificates.jsx # Certificate viewer
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Feedback.jsx     # Feedback/testimonials
│   │   ├── Footer.jsx       # Footer
│   │   ├── Loader.jsx       # Cinematic boot loader
│   │   ├── CursorTrail.jsx  # Glowing cursor trail
│   │   ├── BackgroundParticles.jsx
│   │   ├── ThreeDRobot.jsx  # Three.js 3D robot
│   │   ├── QuantumOrb.jsx   # Decorative orb
│   │   └── WelcomeAI.jsx    # AI welcome message
│   ├── data/
│   │   └── projects.js      # Project data (title, tech, highlights, repo)
│   ├── App.jsx              # Root component with AnimatePresence loader
│   └── main.jsx
├── dist/                    # Production build
├── package.json
├── vite.config.js
└── tailwind.config.cjs
```

---

## 🚀 Run Locally
```bash
# Clone the repo
git clone https://github.com/nithu0035/Portfolio-Website.git
cd Portfolio-Website

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173` in your browser.

---

## 🌐 Deploy to GitHub Pages
```bash
npm run deploy
```

This builds the project and pushes the `dist/` folder to the `gh-pages` branch automatically.

---

## 🗂️ Projects Showcased

| Project | Tech | Highlights |
|---|---|---|
| AI Chatbot | FastAPI · ChromaDB · Whisper · Docker | ~40% RAG relevance boost |
| Smart Irrigation | XGBoost · FastAPI · Weather API | ~90% classification accuracy |
| Hair Disease Detection | TensorFlow · CNN · OpenCV | ~94% accuracy, <200ms inference |
| Placement Intelligence | Random Forest · Streamlit · Scikit-learn | ~82% placement prediction accuracy |

---

## 📄 License

[MIT](https://choosealicense.com/licenses/mit/)

## 👤 Author

**Gudipatoju Nitesh**  
Final-Year B.Tech (AI & ML) · 2026  
GitHub: [@nithu0035](https://github.com/nithu0035)
