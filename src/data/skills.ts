export type SkillCategory = {
    id: string;
    title: { id: string; en: string };
    description: { id: string; en: string };
    skills: { name: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
    {
        id: "frontend",
        title: { id: "Frontend Development", en: "Frontend Development" },
        description: {
            id: "Membangun antarmuka yang interaktif, responsif, dan kaya akan animasi.",
            en: "Building interactive, responsive, and animation-rich user interfaces."
        },
        skills: [
            { name: "HTML5", icon: "html" },
            { name: "CSS3", icon: "css" },
            { name: "JavaScript", icon: "js" },
            { name: "TypeScript", icon: "ts" },
            { name: "React", icon: "react" },
            { name: "Next.js", icon: "next" },
            { name: "Astro", icon: "astro" },
            { name: "Vite", icon: "vite" },
            { name: "Tailwind CSS", icon: "tailwind" },
            { name: "Bootstrap", icon: "bootstrap" },
            { name: "Framer Motion", icon: "framer" },
            { name: "GSAP", icon: "gsap" },
        ],
    },
    {
        id: "backend",
        title: { id: "Backend Development", en: "Backend Development" },
        description: {
            id: "Membangun arsitektur server, API, dan logika bisnis yang kuat.",
            en: "Building robust server architectures, APIs, and business logic."
        },
        skills: [
            { name: "Python", icon: "py" },
            { name: "PHP", icon: "php" },
            { name: "Node.js", icon: "nodejs" },
            { name: "Express.js", icon: "express" },
            { name: "NestJS", icon: "nestjs" },
            { name: "Laravel", icon: "laravel" },
        ],
    },
    {
        id: "database",
        title: { id: "Database & Storage", en: "Database & Storage" },
        description: {
            id: "Merancang dan mengelola sumber data relasional dan non-relasional.",
            en: "Designing and managing relational and non-relational data sources."
        },
        skills: [
            { name: "MySQL", icon: "mysql" },
            { name: "PostgreSQL", icon: "postgres" },
            { name: "MongoDB", icon: "mongodb" },
            { name: "Supabase", icon: "supabase" },
        ],
    },
    {
        id: "tools",
        title: { id: "Tools & Infrastructure", en: "Tools & Infrastructure" },
        description: {
            id: "Alat penunjang produktivitas dan deployment aplikasi.",
            en: "Productivity tools and application deployment infrastructure."
        },
        skills: [
            { name: "VS Code", icon: "vscode" },
            { name: "Git", icon: "git" },
            { name: "GitHub", icon: "github" },
            { name: "Postman", icon: "postman" },
            { name: "Ubuntu", icon: "ubuntu" },
            { name: "Vercel", icon: "vercel" },
            { name: "Figma", icon: "figma" },
        ],
    }
];
