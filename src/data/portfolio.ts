export const profile = {
  name: "Pallav Burnwal",
  title: "Full-Stack Developer · Python · FastAPI · React.js · AI Applications",
  email: "pallavburnwal@gmail.com",
  phone: "+91-7340981451",
  linkedin: "https://www.linkedin.com/in/pallavburnwal",
  github: "https://github.com/developerscoders",
  summary:
    "Early-career Full-Stack Developer with 4 months of professional experience building scalable web applications, REST APIs, and AI-powered solutions. Skilled in Python, FastAPI, React.js, TypeScript, and MongoDB, with experience developing LLM-powered applications, computer vision solutions, and cloud-based deployments. Passionate about solving real-world problems, writing clean and efficient code, and collaborating with cross-functional teams. Seeking opportunities to contribute, grow, and build impactful software in a collaborative engineering environment.",
  taglines: [
    "Architecting systems from stardust.",
    "Full-stack engineer · AI applications builder.",
    "Where AI meets engineering rigor.",
    "Building software the universe would approve of.",
  ],
};

export const stats = [
  { label: "Projects Built", value: "7+" },
  { label: "HackWithUP", value: "1st / 200+" },
  { label: "HackerRank", value: "5★" },
  { label: "GPA", value: "3.7 / 4.0" },
];

export type SkillCategory = {
  name: string;
  color: "ice" | "violet" | "amber" | "foreground";
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    color: "ice",
    skills: [
      { name: "Java", level: 92 },
      { name: "Python", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 88 },
      { name: "SQL", level: 82 },
    ],
  },
  {
    name: "Web",
    color: "violet",
    skills: [
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 82 },
      { name: "FastAPI", level: 85 },
      { name: "REST APIs", level: 90 },
    ],
  },
  {
    name: "AI / APIs",
    color: "amber",
    skills: [
      { name: "Deepgram AI", level: 82 },
      { name: "OpenAI", level: 80 },
      { name: "Twilio", level: 78 },
      { name: "Real-time Voice", level: 80 },
    ],
  },
  {
    name: "Cloud · DevOps · Tools",
    color: "foreground",
    skills: [
      { name: "Azure", level: 75 },
      { name: "AWS", level: 70 },
      { name: "Vercel", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Git", level: 92 },
      { name: "Postman", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "AI Real-Time Voice Caller System",
    year: "2025",
    tech: ["Python", "FastAPI", "Deepgram AI", "Twilio", "MongoDB", "WebSockets"],
    bullets: [
      "Real-time voice AI integrating Deepgram for speech recognition and synthesis with Twilio for telephony.",
      "Asynchronous FastAPI backend with WebSocket support for concurrent voice sessions.",
      "MongoDB-based conversation history management with efficient indexing.",
    ],
  },
  {
    title: "BillKaro — GST Billing & Invoice Management Platform",
    year: "2025",
    tech: ["Java 17", "Spring Boot", "MongoDB", "JWT", "React Native (Expo)", "Razorpay", "iText PDF"],
    bullets: [
      "Full-stack GST billing platform for Indian small businesses with secure auth, customer/product management, invoicing, and payment tracking.",
      "REST APIs with Spring Boot + MongoDB, JWT authentication, and downloadable PDF invoices via iText.",
      "Subscription and payment workflows powered by Razorpay.",
      "Cross-platform mobile app in React Native (Expo) with dashboard analytics and WhatsApp invoice sharing.",
    ],
  },
  {
    title: "DevForge — Multi-Agent AI Development Platform",
    year: "2025",
    tech: ["NVIDIA NIM", "OpenRouter", "React.js", "FastAPI", "Redis", "Docker"],
    bullets: [
      "Collaborative AI dev platform orchestrating multiple LLM agents for code generation, review, and documentation.",
      "WebSocket streaming, Redis-based state management, and Dockerized services for scalable workflows.",
    ],
  },
  {
    title: "LinkedIn Automation Tool",
    year: "2025",
    tech: ["Python", "Selenium", "MongoDB"],
    bullets: [
      "Automation framework for authentication, connection management, and messaging.",
      "Cookie-based session persistence across runs.",
      "Intelligent connection requests with custom filters and follow-up flows.",
      "Human-like rate limiting and randomised delays to avoid detection.",
    ],
  },
  {
    title: "AI Startup Solution — HackWithUttarPradesh Winner",
    year: "2025",
    tech: ["Python", "React", "MongoDB", "ML"],
    bullets: [
      "1st place out of 200+ teams at the state-level hackathon.",
      "Led a 4-person team through ideation, build, and pitch in 24 hours.",
      "Integrated ML models into a full-stack product and presented to industry judges.",
    ],
  },
  {
    title: "Full-Stack Student Tracker",
    year: "2024",
    tech: ["Spring Boot", "React.js", "MySQL"],
    bullets: [
      "Academic management platform with role-based access for students, faculty, admins.",
      "20+ Spring Boot REST endpoints for CRUD operations.",
      "Real-time grade tracking and attendance dashboards.",
      "Cloud deployed with automated backups, 99.9% uptime.",
    ],
  },
  {
    title: "Secure Banking Application",
    year: "2024",
    tech: ["Java", "Spring Boot", "MySQL"],
    bullets: [
      "Multi-tier banking system with transactions, accounts, and fund transfers.",
      "SQL injection prevention, XSS protection, encrypted storage.",
      "Concurrent transaction handling with database locks.",
    ],
  },
];

export const timeline = [
  {
    kind: "work" as const,
    role: "Full-Stack Developer",
    org: "Hrfy.AI (HR For You)",
    location: "Kharar, Punjab",
    period: "Jan 2026 – May 2026",
    bullets: [
      "Built recruitment features across frontend and backend using React.js, FastAPI, and MongoDB.",
      "Developed RESTful APIs for candidate management, authentication, and application workflows.",
      "Implemented features for VedaGPT — an LLM-powered recruitment chatbot for job search guidance.",
      "Assisted in building an AI interview platform with LiveKit for real-time audio/video and automated evaluation.",
    ],
  },
  {
    kind: "work" as const,
    role: "Software Developer Intern",
    org: "Hrfy.AI (HR For You)",
    location: "Kharar, Punjab",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "AI-powered recruitment automation — 30% screening efficiency lift.",
      "FastAPI + Node.js REST APIs handling 1000+ daily requests.",
      "40% page-load improvement through code refactoring.",
    ],
  },
  {
    kind: "work" as const,
    role: "Software Development Intern",
    org: "CodeAlpha",
    location: "Sas Nagar, Punjab",
    period: "Sep 2024 – Sep 2025",
    bullets: [
      "Built 3 production Java apps (Student Tracker, Banking, Hotel) — 500+ users.",
      "MySQL schemas with 15+ normalized tables.",
      "JWT auth, MVC, Singleton & Factory patterns.",
    ],
  },
  {
    kind: "edu" as const,
    role: "Bachelor of Computer Applications (BCA)",
    org: "Chandigarh University",
    location: "Kharar, Punjab",
    period: "Aug 2023 – Jul 2026",
    bullets: ["GPA 3.7 / 4.0", "DSA · DBMS · OOP · Software Engineering"],
  },
];

export const achievements = [
  "1st Place — HackWithUttarPradesh Hackathon (200+ teams, 24-hr sprint, team lead)",
  "5★ HackerRank — Problem Solving, Python, Java ",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Certifications: Python for Data Science · AI & Development · Cybersecurity Foundations"
];
