export const profile = {
  name: "Pallav Burnwal",
  title: "Full-Stack Developer & AI/ML Engineer",
  heroTagline: "9 months building scalable APIs, real-time AI systems and production web apps.",
  email: "pallavburnwal@gmail.com",
  phone: "+91-7340981451",
  linkedin: "https://www.linkedin.com/in/pallavburnwal",
  github: "https://github.com/developerscoders",
  summary:
    "Full-Stack Developer with 9 months of experience in Python (FastAPI), Java (Spring Boot), React.js/TypeScript and MongoDB/MySQL. I also build YOLOv8 computer-vision models, real-time audio/video pipelines with LiveKit and WebSockets, and multi-agent LLM workflows. I deploy on AWS, Azure and Docker, with a focus on clean, low-latency systems.",
  taglines: ["Full-Stack Developer", "AI/ML Engineer", "Computer Vision & LLM Builder"],
};

export const stats = [
  { label: "Professional Experience", value: "9 months" },
  { label: "HackWithUP", value: "1st / 200+" },
  { label: "HackerRank", value: "5★" },
  { label: "GPA", value: "3.7 / 4.0" },
];

export type SkillCategory = {
  name: string;
  color: "ice" | "violet" | "amber" | "foreground";
  skills: { name: string; level: number }[];
};

const skills = (names: string[]) => names.map((name) => ({ name, level: 100 }));

export const skillCategories: SkillCategory[] = [
  { name: "Languages", color: "ice", skills: skills(["Python", "JavaScript", "TypeScript", "Java", "SQL"]) },
  { name: "Backend", color: "violet", skills: skills(["FastAPI", "Spring Boot", "Node.js", "REST", "Microservices", "WebSockets", "Pydantic"]) },
  { name: "Frontend", color: "amber", skills: skills(["React", "Next.js", "React Native", "Tailwind"]) },
  { name: "AI / ML", color: "foreground", skills: skills(["YOLOv8", "OpenCV", "MediaPipe", "DeepFace", "Prompt Engineering", "Multi-Agent AI", "RAG", "NLP", "Vector Search", "OpenAI API", "NVIDIA NIM", "OpenRouter"]) },
  { name: "Speech / Realtime", color: "ice", skills: skills(["Deepgram", "LiveKit", "Twilio"]) },
  { name: "Databases & DevOps", color: "violet", skills: skills(["MongoDB", "MySQL", "Redis", "AWS", "Azure", "Docker", "GitHub Actions", "Vercel"]) },
  { name: "Testing / Security", color: "amber", skills: skills(["PyTest", "unittest", "Postman", "OWASP ZAP", "Burp Suite"]) },
];

export type Project = {
  title: string;
  year: string;
  tech: string[];
  bullets: string[];
  github?: string;
  live?: string;
};

export const projects: Project[] = [
  {
    title: "DevForge — Multi-Agent AI Development Platform",
    year: "Multi-Agent AI",
    tech: ["React", "FastAPI", "Redis", "Docker", "WebSockets", "Tailwind"],
    bullets: [
      "Dockerized orchestration of coder, reviewer and testing LLM agents through FastAPI and Redis Pub/Sub.",
      "Delivered sub-200ms streaming and reduced concurrent task latency by 35%.",
      "Benchmarked NVIDIA NIM against OpenRouter to optimize model selection.",
    ],
  },
  {
    title: "Uvilox AI — Real-Time Voice Caller",
    year: "Voice AI",
    tech: ["Python", "FastAPI", "Twilio", "Deepgram", "WebSockets", "MongoDB"],
    bullets: [
      "Built a FastAPI telephony engine with Twilio WebSockets and Deepgram STT/TTS.",
      "Achieved under 800ms end-to-end audio interaction with stable bi-directional buffering.",
      "Persisted transcripts and multi-turn conversation context in MongoDB.",
    ],
  },
  {
    title: "BillKaro — GST Billing Platform",
    year: "Full-Stack",
    tech: ["Java 17", "Spring Boot", "MongoDB", "JWT", "Razorpay", "iText", "React Native"],
    bullets: [
      "Built GST billing, secure authentication, automated tax calculations and invoice lifecycle management.",
      "Integrated Razorpay payments and generated downloadable PDF invoices with iText.",
      "Created an Expo mobile app with analytics and WhatsApp invoice sharing.",
    ],
  },
  {
    title: "Proctoring & Cheat-Detection Model",
    year: "Computer Vision",
    tech: ["YOLOv8", "OpenCV", "Label Studio", "FastAPI"],
    bullets: [
      "Curated, annotated and augmented custom datasets for restricted-object and behavior detection.",
      "Trained and deployed optimized YOLOv8 weights for low-latency live inference.",
      "Reduced automated proctoring false positives by 22% in live interview workflows.",
    ],
  },
];

export const timeline = [
  {
    kind: "work" as const,
    role: "Full-Stack Developer (AI/ML)",
    org: "Hrfy.AI",
    location: "Kharar",
    period: "Jan 2026 – May 2026",
    bullets: [
      "Built recruitment workflows with React, FastAPI and MongoDB, including secure REST APIs.",
      "Delivered LiveKit and WebSocket audio/video interview sessions for automated evaluation.",
      "Trained and deployed a custom YOLOv8 cheat-detection model using Label Studio, cutting proctoring false positives by 22%.",
      "Tuned prompts for the VedaGPT recruitment assistant and translated Figma designs into production features.",
    ],
  },
  {
    kind: "work" as const,
    role: "Software Developer Intern",
    org: "Hrfy.AI",
    location: "Kharar",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Built FastAPI and MongoDB resume-parsing and NLP services, improving extraction speed by 30%.",
      "Introduced lazy loading and reusable React components.",
      "Developed responsive React and TypeScript interfaces from product designs.",
    ],
  },
  {
    kind: "edu" as const,
    role: "MCA (AI/ML)",
    org: "Vellore Institute of Technology",
    location: "Vellore",
    period: "Aug 2026 – Present",
    bullets: ["Postgraduate study focused on artificial intelligence and machine learning."],
  },
  {
    kind: "edu" as const,
    role: "Bachelor of Computer Applications (BCA)",
    org: "Chandigarh University",
    location: "Kharar",
    period: "Aug 2023 – May 2026",
    bullets: ["GPA 3.7 / 4.0"],
  },
];

export const achievements = [
  "1st Place — HackWithUttarPradesh Hackathon (200+ teams, team lead)",
  "5-Star HackerRank — Python, Problem Solving and Java",
  "Microsoft Azure Fundamentals (AZ-900)",
  "Python for Data Science certification",
];