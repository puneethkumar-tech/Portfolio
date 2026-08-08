/**
 * Central content file for the portfolio.
 * Edit values here — links, project URLs, screenshots, certifications —
 * without touching any component.
 */

export const profile = {
  name: "Thatavarthi Puneeth Kumar",
  shortName: "Puneeth",
  title: "Computer Science Student | Full Stack Developer",
  positioning: "Full Stack AI Developer (long-term goal)",
  tagline: "Building practical AI-powered web applications, one project at a time.",
  status: "Building & Learning",
  email: "puniththatavarthi@gmail.com",
  location: "Kandukuru, Andhra Pradesh, India",
  github: "https://github.com/puneethkumarpec-tech",
  githubUsername: "puneethkumarpec-tech",
  linkedin: "https://www.linkedin.com/in/thatavarthi-puneeth-kumar",
  // TODO: replace with the real resume file (e.g. /resume.pdf placed in /public)
  resumeUrl: "#",
  // TODO: replace with a real photo, e.g. import from src/assets or "/photo.jpg"
  photoUrl: "",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export type ProjectStatus = "live" | "in-development" | "coming-soon";

export type Project = {
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  tech: string[];
  /** Leave empty until a real URL exists — the UI hides the link automatically. */
  liveUrl?: string;
  repoUrl?: string;
  /** Optional screenshot path; a gradient placeholder renders when empty. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "CyberAcademyX",
    status: "live",
    statusLabel: "Live",
    description:
      "An online learning platform with authentication, course management, progress tracking, and a modern responsive interface.",
    tech: ["Authentication", "Course Management", "Progress Tracking", "Responsive UI"],
    liveUrl: "", // TODO: add deployed URL
    repoUrl: "",
    image: "",
  },
  {
    name: "Smart Inventory & Supply Chain Management System",
    status: "in-development",
    statusLabel: "In Development",
    description:
      "An inventory and supply chain platform covering stock monitoring, supplier management, demand forecasting, and automated alerts and reports.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    image: "",
  },
  {
    name: "NexShare",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A secure cloud-based file sharing platform with authentication, file management, public and private sharing, and cloud storage integration.",
    tech: ["Authentication", "File Management", "Cloud Storage"],
    image: "",
  },
  {
    name: "Botivox",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A no-code Telegram bot builder with visual workflow automation, authentication, bot management, and a scalable backend architecture.",
    tech: ["Workflow Automation", "Authentication", "Scalable Backend"],
    image: "",
  },
];

export const skillGroups = [
  { title: "Languages", icon: "Code2", items: ["C", "Java", "Python", "JavaScript", "TypeScript"] },
  {
    title: "Frontend",
    icon: "Layout",
    items: ["HTML5", "CSS3", "React", "Next.js", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: "Server",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },
  { title: "Databases", icon: "Database", items: ["PostgreSQL", "MySQL", "Supabase"] },
  { title: "Deployment", icon: "Cloud", items: ["Vercel", "Render", "Railway", "Docker (basics)"] },
  { title: "Tools", icon: "Wrench", items: ["Git", "GitHub", "VS Code", "Postman", "Figma (basics)"] },
];

export const exploring = [
  "Artificial Intelligence integration",
  "Advanced Next.js",
  "Cloud architecture",
  "System design",
  "DevOps fundamentals",
  "Mobile app development",
];

export const experience = [
  {
    role: "AI Content Creator Intern",
    org: "MediaManager4U",
    duration: "3 months",
    points: [
      "Worked on AI-assisted content generation.",
      "Supported content workflows end to end.",
    ],
  },
  {
    role: "Web Developer Intern",
    org: "CODEC Technologies",
    duration: "1 month",
    points: [
      "Worked across frontend, backend, and database development.",
      "Handled practical full-stack tasks.",
    ],
  },
];

export const education = {
  institution: "Panimalar Engineering College",
  degree: "B.E. Computer Science and Engineering",
  period: "2025 – 2029",
  note: "Currently 2nd year / 3rd semester",
};

export const certifications = [
  { provider: "NPTEL", note: "Course details to be added" },
  { provider: "Simplilearn", note: "Course details to be added" },
];

export const achievements = [
  "Participated in hackathons — event names and outcomes to be added.",
  "Attended technical competitions — event names and outcomes to be added.",
];

export const roadmap = [
  {
    period: "2025",
    title: "Foundations",
    detail: "Started B.E. CSE and built core programming and web fundamentals.",
  },
  {
    period: "2026",
    title: "Building phase (current)",
    detail: "Shipping full-stack projects, interning, and deepening React, Next.js, and backend work.",
  },
  {
    period: "Next",
    title: "AI + cloud depth",
    detail: "Focusing on AI integration, cloud architecture, and system design through real projects.",
  },
];
