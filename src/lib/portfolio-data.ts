/**
 * Central content file for the portfolio.
 *
 * Edit values here — links, project URLs, screenshots, certifications —
 * without touching any component.
 */

export const profile = {
  name: "Thatavarthi Puneeth Kumar",
  shortName: "Puneeth",
  title: "Computer Science Student | Full Stack Developer",
  positioning: "Full Stack AI Developer",
  tagline: "Building practical AI-powered web applications, one project at a time.",
  status: "Building & Learning",
  email: "puniththatavarthi@gmail.com",
  location: "Kandukuru, Andhra Pradesh, India",
  locationShort: "Kandukuru, AP · India",

  github: "https://github.com/puneethkumar-tech",
  githubUsername: "puneethkumar-tech",

  linkedin: "https://www.linkedin.com/in/thatavarthi-puneeth-kumar",

  // TODO: replace with the real resume file, e.g. /resume.pdf placed in /public
  resumeUrl: "#",

  // TODO: replace with a real photo, e.g. /photo.jpg placed in /public
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

/** Drives the abstract product-preview mockup shown until a real screenshot exists. */
export type ProjectVisualKind = "platform" | "inventory" | "files" | "workflow";

export type Project = {
  name: string;
  status: ProjectStatus;
  statusLabel: string;
  description: string;
  tech: string[];
  /** Visual treatment for the placeholder preview. */
  kind: ProjectVisualKind;
  /** Leave empty until a real URL exists — the UI hides the link automatically. */
  liveUrl?: string;
  repoUrl?: string;
  /** Optional screenshot path; a designed mockup renders when empty. */
  image?: string;
};

export const projects: Project[] = [
  {
    name: "CyberAcademyX",
    status: "live",
    statusLabel: "Live",
    description:
      "An online learning platform with authentication, course management, progress tracking, and a modern responsive learning experience.",
    tech: ["Next.js", "FastAPI", "Supabase", "React Native"],
    kind: "platform",
    liveUrl: "https://cyberacademyx.com/",
    repoUrl: "", // TODO: add repository URL
    image: "/projects/cyberacademyx-preview.png",
  },

  {
    name: "Smart Inventory & Supply Chain Management System",
    status: "in-development",
    statusLabel: "In Development",
    description:
      "An inventory and supply chain platform focused on stock monitoring, supplier management, demand forecasting, automated alerts, and reports.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis"],
    kind: "inventory",
    image: "",
  },

  {
    name: "NexShare",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A secure cloud-based file sharing platform with authentication, file management, public and private sharing, and cloud storage integration.",
    tech: ["Authentication", "File Management", "Cloud Storage"],
    kind: "files",
    image: "",
  },

  {
    name: "Botivox",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    description:
      "A no-code Telegram bot builder with visual workflow automation, authentication, bot management, and a scalable backend architecture.",
    tech: ["Workflow Automation", "Authentication", "Scalable Backend"],
    kind: "workflow",
    image: "",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    items: ["C", "Java", "Python", "JavaScript", "TypeScript"],
  },

  {
    title: "Frontend",
    items: ["HTML5", "CSS3", "React", "Next.js", "React Native", "Tailwind CSS"],
  },

  {
    title: "Backend",
    items: ["Node.js", "Express.js", "FastAPI", "REST APIs"],
  },

  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "Supabase"],
  },

  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },

  {
    title: "Cloud / Deployment",
    items: ["Vercel", "Render", "Railway", "Docker"],
  },
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
    role: "AI Content Creation Intern",
    org: "MediaManager4U",
    duration: "22 Jan 2026 — 22 Apr 2026 · 3 months",
    points: ["AI-assisted content generation and content workflows."],
    certificateUrl: "/certificates/media-manager-internship.pdf",
  },

  {
    role: "Web Developer Intern",
    org: "CODEC Technologies Pvt. Ltd.",
    duration: "07 Jul 2026 — 07 Aug 2026 · 1 month",
    points: ["Worked across frontend, backend, and database development."],
    certificateUrl: "/certificates/codec-internship.pdf",
  },
];

export const education = {
  institution: "Panimalar Engineering College",
  degree: "B.E. Computer Science and Engineering",
  period: "2025 – 2029",
  note: "Currently 2nd year · 3rd semester",
};

export type Certification = {
  /** Issuing organization, e.g. NPTEL. Leave empty when unknown. */
  provider: string;

  /** Exact course / credential name. */
  course: string;

  /** Date or session, e.g. "03 May 2026" or "Jan–Apr 2026 · 12 weeks". */
  date: string;

  /** Credential detail, e.g. "Elite Certification · 76%". */
  detail: string;

  /** Link to the certificate file when available. */
  url?: string;

  /** True when the certificate is not available yet — hides the CTA. */
  comingSoon?: boolean;
};

export const certifications: Certification[] = [
  {
    provider: "NPTEL",
    course: "The Joy of Computing using Python",
    date: "Jan–Apr 2026 · 12 weeks",
    detail: "Elite Certification · 76%",
    url: "/certificates/nptel-joy-of-computing-python.pdf",
  },

  {
    // Issuing organization is not confirmed on this certificate, so the
    // visible title doubles as the provider.
    provider: "",
    course: "C Programming Basics",
    date: "03 May 2026",
    detail: "Certificate Code: 10182682",
    url: "/certificates/c-programming-basics.pdf",
  },

  {
    provider: "Simplilearn",
    // TODO: add the exact course name after the Simplilearn certificate is provided
    course: "",
    date: "",
    detail: "",
    comingSoon: true,
  },
];

export type Achievement = {
  /** Short label for the event, e.g. "Smart India Hackathon". */
  title: string;

  /** One-line note; add specifics (date, role, result, project) as they are confirmed. */
  note?: string;

  date?: string;
  role?: string;
  result?: string;
  project?: string;
};

export const participation = {
  summary:
    "Participated in hackathons and technical competitions while building and presenting software projects.",
  items: [] as Achievement[],
};

export const roadmap = [
  {
    period: "2025",
    title: "Foundations",
    detail: "Started B.E. CSE and built core programming and web fundamentals.",
  },

  {
    period: "2026",
    title: "Building phase (current)",
    detail:
      "Shipping full-stack projects, interning, and deepening React, Next.js, and backend work.",
  },

  {
    period: "Next",
    title: "AI + cloud depth",
    detail:
      "Focusing on AI integration, cloud architecture, and system design through real projects.",
  },
];
