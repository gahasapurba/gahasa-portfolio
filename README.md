# ⚡ Gahasa Purba — Personal Portfolio & Executive Engineering Showcase

[![Production](https://img.shields.io/badge/Production-gahasapurba.com-f59e0b?style=for-the-badge&logo=googlechrome&logoColor=white)](https://gahasapurba.com)
[![Netlify Status](https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://gahasa-purba-portfolio.netlify.app)
[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

Official personal portfolio website for **Gahasa Timothius B.P. Purba**, Software Engineer Assistant Manager of IT Wholesale Banking Development at **PT Bank Mandiri (Persero) Tbk** and Cum Laude Software Engineering graduate from **Institut Teknologi Del**.

Live URL: **[https://gahasapurba.com](https://gahasapurba.com)** *(mirror: [gahasa-purba-portfolio.netlify.app](https://gahasa-purba-portfolio.netlify.app))*

---

## 🌟 Key Highlights & Architecture

- **Dark Obsidian & Minimalist Light Theme**: Tailored financial-tech aesthetics with custom CSS design tokens, smooth glassmorphism, gold accents, and persistent state (`localStorage`).
- **Comprehensive Career & Leadership Timeline**:
  - **Work Experience**: Bank Mandiri (IT Wholesale Banking), PT. Infosys Solusi Terpadu (BSI Mobile Banking), PT. Investree Radhika Jaya (Fintech Marketplace - Top 3 Best Apprentice).
  - **Organizational Milestones**: Chairman of KPU Del (pioneered the Unique Voting Code/UVC system), Deputy Head of KOMINFO BEM IT Del, GDSC Core Team, and Pimpro Creative Media CNT IT APD.
- **Featured Project Showcase**: Highlighting real-world enterprise banking APIs, event security platforms with geofencing & device fingerprinting, and community web applications with interactive screenshots and live links.
- **Direct Engagement Channels**: Instant WhatsApp direct chat redirection, integrated CV/resume download, Linktree hub, and social channels.
- **Fully Responsive & Fluid**: Adaptive layouts with zero overflow, optimized mobile navigation drawer, and crisp typography.

---

## 🛠️ Tech Stack

| Layer | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) + [Vite 7](https://vitejs.dev/) |
| **Styling & Theming** | Vanilla CSS Design Tokens (Dark / Light Theme, Glassmorphism, CSS Grid) |
| **Icons & Effects** | [Lucide React](https://lucide.dev/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Typography** | Cinzel, Plus Jakarta Sans, JetBrains Mono (Google Fonts) |
| **Deployment & Hosting** | [Netlify](https://www.netlify.com/) with Custom Domain & Automated Edge Routing |

---

## 📁 Project Structure

```text
gahasa-portfolio/
├── public/
│   ├── images/
│   │   ├── gahasa-avatar.png     # Official profile photo
│   │   └── projects/             # High-res project thumbnails & screenshots
│   └── resume.pdf                # Downloadable CV/Resume
├── src/
│   ├── components/
│   │   ├── Navbar.jsx            # Responsive header with theme toggle & mobile drawer
│   │   ├── HeroSection.jsx       # Executive summary, badges & quick actions
│   │   ├── ExperienceSection.jsx # Tabbed Professional & Organizational timeline
│   │   ├── ProjectsSection.jsx   # Filterable showcase with screenshots & demo links
│   │   ├── SkillsAndEducation.jsx# 3-pillar skills, education pedigree & endorsements
│   │   └── ContactFooter.jsx     # Direct WhatsApp & communication channels
│   ├── data/
│   │   └── personalData.js       # Master career data, credentials & project metadata
│   ├── styles/
│   │   └── globals.css           # Design tokens, themes & media queries
│   ├── App.jsx                   # Root application container & theme provider
│   └── main.jsx                  # Application entry point
├── index.html                    # SEO tags, OpenGraph metadata & fonts
├── netlify.toml                  # Netlify build & rewrite configuration
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started Locally

### Prerequisites
- **Node.js** (v18 or newer recommended)
- **npm** or **pnpm**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gahasapurba/gahasa-portfolio.git
   cd gahasa-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```
   The production-ready artifacts will be generated in the `dist/` directory.

---

## 📬 Contact & Connect

- **Website**: [gahasapurba.com](https://gahasapurba.com)
- **LinkedIn**: [linkedin.com/in/gahasapurba](https://www.linkedin.com/in/gahasapurba)
- **Email**: [gahasapurba@gahasapurba.com](mailto:gahasapurba@gahasapurba.com)
- **WhatsApp**: [+62 811-6120-030](https://api.whatsapp.com/send?phone=628116120030)
- **Linktree**: [linktr.ee/gahasapurba](https://linktr.ee/gahasapurba)

---

&copy; 2026 Gahasa Timothius B.P. Purba. All rights reserved.
