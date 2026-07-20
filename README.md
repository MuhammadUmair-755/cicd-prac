# Nexovate Technologies — Company Website

A simple, professional React website for **Nexovate Technologies**, a fictional software
development company headquartered in Lahore, Pakistan.

> **Purpose:** This project is intentionally kept simple. It exists as a sample application for
> practicing **Docker containerization, Jenkins CI/CD pipelines and deployment workflows** in
> later tasks. It has no backend, no database and no API calls — everything is static data.

---

## Features

- 🏠 **Home** — hero section, featured services, "Why Choose Us", technologies and CTAs
- 🏢 **About** — company story, mission, vision, core values and statistics
- 🛠️ **Services** — Web Development, Mobile App Development and AI Integrated Solutions
- 📁 **Projects** — six fictional portfolio projects with tech stacks
- 👥 **Team** — six fictional team member profiles
- ✉️ **Contact** — static contact form (shows a thank-you message, no real submission)
- 🚫 **Custom 404 page** for unknown routes
- 📱 Fully responsive with a mobile hamburger menu
- 🎨 Modern styling: card layouts, soft shadows, rounded corners, smooth hover effects

## Tech Stack

| Tool             | Purpose                        |
| ---------------- | ------------------------------ |
| React 19         | UI library                     |
| Vite             | Build tool & dev server        |
| React Router v7  | Client-side routing            |
| Plain CSS        | Styling (CSS variables, no Tailwind) |

No Redux, no TypeScript, no backend, no environment variables — by design.

## Installation

```bash
# 1. Clone / copy the project, then install dependencies
npm install

# 2. Start the development server
npm run dev
```

The app runs at `http://localhost:5173` by default.

## Available Scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the Vite development server            |
| `npm run build`   | Create a production build in `dist/`         |
| `npm run preview` | Preview the production build locally         |

## Folder Structure

```
├── index.html              # HTML entry point
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx            # App bootstrap (React + Router)
    ├── App.jsx             # Layout shell + route definitions
    ├── components/         # Reusable UI components
    │   ├── Navbar.jsx / .css
    │   ├── Footer.jsx / .css
    │   ├── ServiceCard.jsx / .css
    │   ├── ProjectCard.jsx / .css
    │   ├── TeamCard.jsx / .css
    │   ├── SectionHeading.jsx
    │   ├── PageHeader.jsx
    │   └── ScrollToTop.jsx
    ├── pages/              # One component per route
    │   ├── Home.jsx / .css
    │   ├── About.jsx / .css
    │   ├── Services.jsx / .css
    │   ├── Projects.jsx
    │   ├── Team.jsx
    │   ├── Contact.jsx / .css
    │   └── NotFound.jsx / .css
    ├── data/               # All static data (no hardcoding in components)
    │   ├── company.js
    │   ├── services.js
    │   ├── projects.js
    │   ├── team.js
    │   ├── stats.js
    │   └── technologies.js
    └── styles/
        └── global.css      # Variables, reset & shared UI styles
```

## Notes

- All images are loaded from royalty-free sources (Unsplash / RandomUser) via direct URLs —
  nothing is stored in the repo.
- All company details, projects, team members and contact information are **fictional**.
- Next steps (future tasks): Dockerfile, Jenkins pipeline, deployment.
