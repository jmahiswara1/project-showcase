export type Project = {
  slug: string;
  title: string;
  description: { id: string; en: string };
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  duration: string;
  category: string;
  status: "Live" | "In Development" | "Archived";
  role: string;
  tags: string[];
  featured: boolean;
  year: string;
};

export const projects: Project[] = [
  {
    slug: "example-project-1",
    title: "E-Commerce Platform Redesign",
    description: {
      id: "Platform e-commerce modern dengan fitur lengkap termasuk manajemen produk, keranjang belanja, dan integrasi pembayaran.",
      en: "Modern e-commerce platform with full features including product management, shopping cart, and payment integration.",
    },
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/jmahiswara1/example",
    image: "/placeholder1.jpg",
    duration: "3 months",
    category: "Web App",
    status: "Live",
    role: "Fullstack Developer",
    tags: ["E-Commerce", "UI/UX", "Payment"],
    featured: true,
    year: "2023",
  },
  {
    slug: "example-project-2",
    title: "Task Management App",
    description: {
      id: "Aplikasi manajemen tugas untuk tim dengan real-time updates.",
      en: "Task management application for teams with real-time updates.",
    },
    techStack: ["React", "Firebase", "Material UI"],
    githubUrl: "https://github.com/jmahiswara1/example2",
    image: "/placeholder2.jpg",
    duration: "2 months",
    category: "Web App",
    status: "In Development",
    role: "Frontend Developer",
    tags: ["Productivity", "Real-time"],
    featured: false,
    year: "2024",
  },
];
