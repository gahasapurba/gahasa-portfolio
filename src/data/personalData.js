export const PERSONAL_DATA = {
  fullName: "Gahasa Timothius B.P. Purba",
  shortName: "Gahasa Purba",
  headline: "Software Engineer Assistant Manager of IT Wholesale Banking Development at PT Bank Mandiri (Persero) Tbk",
  location: "Jakarta, Indonesia",
  subLocation: "Lebak, Banten & Jakarta Metropolitan",
  email: "gahasapurba.tech@gmail.com",
  linkedin: "https://www.linkedin.com/in/gahasapurba",
  github: "https://github.com/gahasapurba",
  portfolio: "http://gahasapurba.com",
  twitter: "@gahasa_purba",
  status: "Available for High-Impact Enterprise Projects & Tech Collaborations",
  avatar: "/images/gahasa-avatar.png",
  about: "Software Engineer with deep expertise in enterprise wholesale banking architectures, mission-critical financial systems, and modern fullstack applications. Graduated Cum Laude in Software Engineering Technology from Institut Teknologi Del. Currently driving core digital solutions at PT Bank Mandiri (Persero) Tbk across IT Wholesale Banking Development, enterprise integrations (CES Ekosistem v2), and high-visibility corporate digital initiatives.",
  summaryNote: "Specialized in translating mission-critical banking business logic into high-performance, resilient, and elegant digital products.",
  
  stats: [
    { label: "Role & Level", value: "Asst. Manager", highlight: "IT Wholesale Banking" },
    { label: "Graduation", value: "Cum Laude", highlight: "IT Del (GPA 3.65+)" },
    { label: "Enterprise Scale", value: "Millions+ CIF", highlight: "Bank Mandiri CES & Livin" },
    { label: "Stack Reach", value: "Full Lifecycle", highlight: "Spring Boot, Laravel, React" }
  ],

  experiences: [
    {
      period: "Current Role",
      role: "Software Engineer Assistant Manager",
      department: "IT Wholesale Banking Development",
      company: "PT Bank Mandiri (Persero) Tbk",
      type: "Full-time Enterprise",
      location: "Jakarta, Indonesia",
      badge: "Assistant Manager",
      isCurrent: true,
      description: "Spearheading backend and fullstack software development for Bank Mandiri's Wholesale Banking division. Designing resilient APIs, financial ecosystem modules, and mission-critical corporate tools.",
      bullets: [
        "Architecting and delivering CES Wholesale Ekosistem v2 API contracts for corporate value-chain and multi-segment portfolio analytics.",
        "Engineering high-throughput data processing endpoints handling ENDBAL, CIF tracking, and multi-period financial reconciliation (MTD, MOM, YTD, YOY).",
        "Collaborating across Relationship Managers, Product Owners, and Enterprise Architects to elevate enterprise banking user experiences."
      ],
      tags: ["Java", "Spring Boot", "Enterprise Microservices", "REST API", "SQL", "CES Wholesale", "Banking Architecture"]
    },
    {
      period: "Strategic Initiative",
      role: "Creative Media Lead & Tech Contributor",
      department: "Culture Network Team (CNT) — Group IT APD",
      company: "PT Bank Mandiri (Persero) Tbk",
      type: "Corporate Leadership Role",
      location: "Jakarta, Indonesia",
      badge: "Pimpro Creative Media",
      isCurrent: true,
      description: "Leading creative technology, digital event architecture, and internal media branding for Group IT APD (Application Development & Delivery).",
      bullets: [
        "Engineered the Livin' Food & Bullion Project Appreciation Dinner Web Platform with anti-titip device-locking, 500m geofencing, and real-time interactive lucky draw.",
        "Built the CNT IT APD Interactive Presentation Deck & Cloud Sync portal serving leadership executive advisory.",
        "Designed the Mandirian Gallery Challenge corporate digital poster suite and multimedia workflows."
      ],
      tags: ["React", "Next.js", "Geofencing", "Web Audio API", "Realtime WebSocket", "Branding Design"]
    },
    {
      period: "Academic Foundations",
      role: "Software Engineering Researcher & Developer",
      department: "Faculty of Informatics & Computer Science",
      company: "Institut Teknologi Del",
      type: "Undergraduate Degree",
      location: "Toba, North Sumatra",
      badge: "Cum Laude Honors",
      isCurrent: false,
      description: "Completed Diploma IV in Software Engineering Technology with top academic honors (Cum Laude). Active in campus IT leadership and software delivery.",
      bullets: [
        "Developed SIP Del (Sistem Informasi Pengadaan) for tracking campus commodities, logistics, and multi-stage approval workflows.",
        "Built community-driven digital platforms including MeatNauli (tourism & e-commerce for Lake Toba village) and KawanPeduli (COVID-19 info hub).",
        "Mastered enterprise object-oriented programming, relational schema normalization, and secure SDLC principles."
      ],
      tags: ["D4 TRPL", "Cum Laude", "Laravel", "Vue.js", "Java", "PostgreSQL", "BEM IT Del"]
    }
  ],

  projects: [
    {
      id: "ces-wholesale",
      title: "CES Wholesale Ekosistem v2 Engine",
      subtitle: "Enterprise Wholesale Banking API Gateway & Analytics",
      category: "Fintech & Enterprise",
      featured: true,
      metrics: "Multi-Segment Corporate Portfolio",
      description: "Next-generation corporate ecosystem microservices connecting Relationship Managers with comprehensive performance indicators across Payroll, Value Chain, Endbal, and CIF metrics.",
      highlights: [
        "Standardized multi-currency English JSON contract schema across microservices.",
        "Multi-timeframe period comparisons: MTD, MOM, YTD, and YOY analytics.",
        "Zero-downtime wire deserialization ensuring backwards compatibility with existing legacy dashboards."
      ],
      tech: ["Spring Boot", "Java 17", "Enterprise SQL", "REST Gateway", "Wholesale Banking"],
      links: {
        demo: null,
        github: null,
        internal: true,
        badge: "Bank Mandiri Enterprise Core"
      }
    },
    {
      id: "livin-bullion",
      title: "Livin' Bullion & Food Appreciation Engine",
      subtitle: "Realtime Geofenced Attendance & Grand Prize Lucky Draw",
      category: "Fintech & Enterprise",
      featured: true,
      metrics: "325+ Live Attendees • Zero Spoofing",
      description: "High-stakes event management platform deployed at Mandiri Digital Tower Jakarta. Features dual-level security to prevent proxy attendance and high-speed randomizer animations for prizes.",
      highlights: [
        "Hardware-level Device Lock & Fingerprinting: strictly 1 device = 1 employee NIP.",
        "GPS Geofencing radius (500m strict boundary around MDT Jakarta).",
        "Secret admin portal with 10s suspense soundscapes built directly via browser Web Audio API (zero audio lag)."
      ],
      tech: ["Next.js", "React 19", "Web Audio API", "Geolocation", "Canvas Confetti", "TailwindCSS"],
      links: {
        demo: "http://localhost:3005",
        github: "https://github.com/gahasapurba",
        internal: false,
        badge: "Mandiri Digital Tower Event"
      }
    },
    {
      id: "gahasa-finance",
      title: "Gahasa Personal Wealth & Financial OS",
      subtitle: "Multi-Wallet Asset Ledger with Client-Side Encryption",
      category: "Personal Software",
      featured: true,
      metrics: "Zero-Knowledge Security • Multi-Currency",
      description: "High-privacy personal finance tracking platform featuring AES client-side encryption, biometric PIN lock, multi-asset allocation (BCA, Mandiri, Saham, Crypto), and automated budget thresholds.",
      highlights: [
        "Zero-cloud leakage: data secured via salted hashing & PIN vault.",
        "Cashflow breakdown, interactive burn-rate analytics, and category budgets.",
        "Instant backup & import functionality with real-time currency formatting (IDR)."
      ],
      tech: ["React", "Vite", "Web Crypto API", "LocalStorage / Supabase Sync", "Oxlint"],
      links: {
        demo: null,
        github: "https://github.com/gahasapurba",
        internal: false,
        badge: "Active Financial Engine"
      }
    },
    {
      id: "cnt-presentation",
      title: "CNT IT APD Strategic Portal & Deck",
      subtitle: "Corporate Culture Network Organigram & Budget Cloud Sync",
      category: "Enterprise System",
      featured: false,
      metrics: "Live Sync • Dual Mode (Deck & Web)",
      description: "Interactive executive portal for Group IT APD's Culture Network Team. Unifies organizational structures, Pimpro budget allocations (RAB), and digital presentation slides.",
      highlights: [
        "Dual presentation mode: responsive web view and high-impact 16:9 full-screen slide deck.",
        "Cloud sync fallback engine with local storage offline persistence.",
        "Interactive organigram nodes with division badges and portfolio metrics."
      ],
      tech: ["Vite", "React", "Netlify Blobs", "CSS Glassmorphism"],
      links: {
        demo: null,
        github: "https://github.com/gahasapurba",
        internal: false,
        badge: "Internal Executive Tool"
      }
    },
    {
      id: "quick-drop",
      title: "QuickDrop — Cross-Device Cloud Clipboard",
      subtitle: "Instant P2P Clipboard & File Sync Across Networks",
      category: "Tool & Utility",
      featured: false,
      metrics: "Sub-50ms Latency • Cross-Network",
      description: "Lightweight cross-device utility enabling seamless text, screenshot, and file sharing between mobile and workstation across disparate Wi-Fi networks.",
      highlights: [
        "Direct image paste from clipboard with instant download buttons.",
        "Peer-to-peer fast syncing with zero cloud retention.",
        "Ultra-responsive minimalist interface tailored for power users."
      ],
      tech: ["Node.js", "WebSockets", "Vanilla JS", "TailwindCSS"],
      links: {
        demo: null,
        github: "https://github.com/gahasapurba",
        internal: false,
        badge: "Productivity Utility"
      }
    },
    {
      id: "meat-nauli",
      title: "MeatNauli Tourism & Artisan Commerce",
      subtitle: "Community Tourism & E-Commerce for Toba Regency",
      category: "Fullstack Web",
      featured: false,
      metrics: "National Impact • Toba Lake Culture",
      description: "Comprehensive tourism ecosystem for Desa Meat in Toba, North Sumatra, featuring local homestay guides, artisan ulos marketplace, and logistics API integrations.",
      highlights: [
        "RajaOngkir automated shipping rate calculation for regional postal codes.",
        "Community discussion forums and tourism storytelling blogs.",
        "Full backend CRUD architecture with robust relational schemas."
      ],
      tech: ["PHP", "Laravel", "MySQL", "RajaOngkir API", "Bootstrap"],
      links: {
        demo: "https://gahasapurba.github.io",
        github: "https://github.com/gahasapurba/MeatNauli",
        internal: false,
        badge: "Community Initiative"
      }
    }
  ],

  skills: {
    backend: [
      { name: "Java (Spring Boot)", level: "Enterprise Specialist", proficiency: 95 },
      { name: "PHP (Laravel)", level: "Production Expert", proficiency: 92 },
      { name: "Node.js / Express", level: "Advanced", proficiency: 88 },
      { name: "Microservices Architecture", level: "Enterprise Specialist", proficiency: 92 },
      { name: "RESTful API Contract Design", level: "Expert", proficiency: 96 },
      { name: "SQL & Relational DBs (PostgreSQL, MySQL, Oracle)", level: "Advanced", proficiency: 90 }
    ],
    frontend: [
      { name: "React / Next.js", level: "Advanced Expert", proficiency: 94 },
      { name: "Vue.js", level: "Proficient", proficiency: 86 },
      { name: "Modern CSS / Glassmorphism / UI Aesthetics", level: "Craftsman", proficiency: 95 },
      { name: "TailwindCSS & Design Tokens", level: "Advanced", proficiency: 92 },
      { name: "Web Audio API & Canvas Graphics", level: "Specialist", proficiency: 88 }
    ],
    architecture: [
      { name: "Wholesale Banking & Financial Tech", level: "Domain Expert", proficiency: 94 },
      { name: "System Security & Device Fingerprinting", level: "Production Proven", proficiency: 90 },
      { name: "Geofencing & Location Verification", level: "Advanced", proficiency: 92 },
      { name: "CI/CD & Cloud Deployments (Netlify, Docker, Git)", level: "Advanced", proficiency: 89 }
    ]
  },

  recommendations: [
    {
      author: "Raymond Gandi Saor Simamora",
      role: "Business System Testing & Implementation Staff",
      company: "Mandiri Utama Finance",
      text: "Gahasa is a passionate and talented individual who brings a unique perspective and strong work ethic to every task he takes on. I am confident he will succeed in any professional environment and am happy to recommend Gahasa for any opportunities he pursues.",
      date: "August 2024",
      relation: "Professional Peer & Collaborator"
    }
  ],

  education: [
    {
      institution: "Institut Teknologi Del (IT Del)",
      degree: "Sarjana Terapan (D4) Teknologi Rekayasa Perangkat Lunak",
      honor: "Graduated with Cum Laude Honors",
      period: "2019 – 2023",
      location: "Laguboti, Toba, Sumatera Utara",
      details: "Top percentile graduate with specialization in Software Engineering, relational database systems, enterprise programming, and leadership in student government (BEM IT Del)."
    },
    {
      institution: "SMA Swasta Budi Mulia Pematangsiantar",
      degree: "High School Diploma (Science & Mathematics)",
      honor: "Alumnus 2019",
      period: "2016 – 2019",
      location: "Pematangsiantar, Sumatera Utara",
      details: "Rigorous analytical training in exact sciences, computer science basics, and extracurricular activities."
    }
  ]
};
