export const profile = {
  name: "Pallav Burnwal",
  title: "Software Engineer · Full-Stack Developer · AI Builder",
  email: "paburnwal123@gmail.com",
  phone: "+91-7340981451",
  linkedin: "https://www.linkedin.com/in/pallavburnwal",
  github: "https://github.com/developerscoders",
  summary:
    "Results-driven QA Automation Engineer and Software Developer with 2+ years of experience building scalable applications, automated testing frameworks, and conducting web security assessments. 1st place at HackWithUttarPradesh (200+ teams), 5★ HackerRank, and 70% reduction in testing effort through automation. Fluent in Java, Python, React.js, Spring Boot, with deep work in penetration testing, CI/CD, and AI-powered systems.",
  taglines: [
    "Architecting systems from stardust.",
    "Hackathon champion · 200+ teams defeated.",
    "Where AI meets engineering rigor.",
    "Building software the universe would approve of.",
  ],
};

export const stats = [
  { label: "Years Experience", value: "2+" },
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
      { name: "C++", level: 78 },
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
      { name: "Spring Boot", level: 86 },
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
      { name: "Selenium", level: 90 },
      { name: "Postman", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 80 },
    ],
  },
];

export const projects = [
  {
    title: "AI Voice Caller Application",
    year: "2025",
    tech: ["Python", "FastAPI", "Deepgram AI", "Twilio", "MongoDB"],
    bullets: [
      "Real-time AI-powered voice calling system that initiates and manages automated phone calls.",
      "Integrated Deepgram for natural voice synthesis and STT with 95% accuracy.",
      "Built FastAPI backend handling concurrent voice sessions with sub-500ms latency.",
      "MongoDB schema for call logs, conversation history, and user data with efficient indexing.",
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
    role: "QA Automation Engineer & Web Security Tester",
    org: "Hrfy.AI (HR For You)",
    location: "Kharar, Punjab",
    period: "Jan 2026 – Present",
    bullets: [
      "Selenium WebDriver automation framework — reduced manual testing by 70%.",
      "100+ automated test scripts; 85% coverage.",
      "Penetration testing with Nmap, Burp Suite, OWASP ZAP.",
      "Identified 50+ critical vulnerabilities (XSS, CSRF, NoSQL injection).",
      "CI/CD with Jenkins for quality-gated deployments.",
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
  "5★ HackerRank — Problem Solving, Python, Java, C++ (Top 5% globally)",
  "1st Place — HackWithUttarPradesh (1 of 200+ teams)",
  "Cybersecurity Foundations · Deloitte Tech Simulation · Azure Fundamentals",
  "500+ DSA problems solved across competitive platforms",
  "Active open-source contributor with merged PRs on GitHub",
];
