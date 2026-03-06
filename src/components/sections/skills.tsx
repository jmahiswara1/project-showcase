"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { skillCategories } from "@/data/skills";
import { ChevronDown } from "lucide-react";

const SKILL_ICONS: Record<string, string> = {
    html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
    js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    ts: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    py: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    react: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    next: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    astro: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg",
    vite: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
    tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
    nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    express: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    nestjs: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg",
    laravel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
    php: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
    mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    postgres: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    supabase: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    vscode: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
    git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    github: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    postman: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    ubuntu: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-original.svg",
    vercel: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
    figma: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
    framer: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    gsap: "https://gsap.com/favicon-32x32.png",
};

export function Skills() {
    const { lang } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [expandedId, setExpandedId] = useState<string | null>(null);

    const toggleExpand = (id: string) => {
        setExpandedId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            ref={sectionRef}
            id="skills"
            className="relative py-32 md:py-40 bg-bg overflow-hidden"
        >
            <div className="container-global">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4"
                    >
                        {lang === "id" ? "// Keahlian" : "// Skills"}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl uppercase text-text leading-none"
                    >
                        Tech <span className="text-primary">Arsenal</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-text-secondary text-lg max-w-xl mt-6"
                    >
                        {lang === "id"
                            ? "Teknologi dan tools yang saya gunakan untuk membangun produk digital."
                            : "Technologies and tools I use to build digital products."}
                    </motion.p>
                </div>

                {/* Equal Grid - 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {skillCategories.map((category, catIndex) => {
                        const isExpanded = expandedId === category.id;

                        return (
                            <motion.div
                                key={category.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{
                                    duration: 0.6,
                                    delay: catIndex * 0.12,
                                    ease: [0.16, 1, 0.3, 1] as const,
                                }}
                                layout
                                onClick={() => toggleExpand(category.id)}
                                className={`relative group cursor-pointer bg-bg-secondary border rounded-sm overflow-hidden transition-colors duration-300 ${isExpanded
                                    ? "border-primary/30"
                                    : "border-text/5 hover:border-text/15"
                                    }`}
                            >
                                {/* Subtle glow on hover */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/5 via-transparent to-transparent" />

                                <div className="relative z-10 p-8 md:p-10">
                                    {/* Category Header */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h3 className="font-[family-name:var(--font-bebas)] text-2xl md:text-3xl uppercase text-text leading-none mb-2">
                                                {lang === "id" ? category.title.id : category.title.en}
                                            </h3>
                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {lang === "id" ? category.description.id : category.description.en}
                                            </p>
                                        </div>
                                        <motion.div
                                            animate={{ rotate: isExpanded ? 180 : 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="w-10 h-10 rounded-full border border-text/10 flex items-center justify-center flex-shrink-0 ml-4"
                                        >
                                            <ChevronDown size={20} className="text-text-secondary" />
                                        </motion.div>
                                    </div>

                                    {/* Collapsed: show icon row preview */}
                                    {!isExpanded && (
                                        <motion.div
                                            initial={false}
                                            className="flex items-center gap-3 mt-6"
                                        >
                                            {category.skills.slice(0, 6).map((skill, i) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{ opacity: 0, scale: 0 }}
                                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay: catIndex * 0.12 + i * 0.05 + 0.3,
                                                        ease: [0.16, 1, 0.3, 1] as const,
                                                    }}
                                                    className="w-9 h-9 rounded-sm bg-bg border border-text/10 flex items-center justify-center"
                                                >
                                                    {SKILL_ICONS[skill.icon] && (
                                                        <img
                                                            src={SKILL_ICONS[skill.icon]}
                                                            alt={skill.name}
                                                            width={20}
                                                            height={20}
                                                            className="w-5 h-5 object-contain"
                                                        />
                                                    )}
                                                </motion.div>
                                            ))}
                                            {category.skills.length > 6 && (
                                                <span className="text-xs text-text-secondary font-mono">
                                                    +{category.skills.length - 6}
                                                </span>
                                            )}
                                        </motion.div>
                                    )}

                                    {/* Expanded: show all badges with animation */}
                                    <AnimatePresence>
                                        {isExpanded && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                                                className="overflow-hidden"
                                            >
                                                <div className="flex flex-wrap gap-3 mt-8">
                                                    {category.skills.map((skill, i) => (
                                                        <motion.div
                                                            key={skill.name}
                                                            initial={{ opacity: 0, y: 15, scale: 0.8 }}
                                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                                            exit={{ opacity: 0, y: -10, scale: 0.8 }}
                                                            transition={{
                                                                duration: 0.35,
                                                                delay: i * 0.04,
                                                                ease: [0.16, 1, 0.3, 1] as const,
                                                            }}
                                                            whileHover={{
                                                                y: -4,
                                                                boxShadow: "0 8px 25px -5px rgba(99, 102, 241, 0.15)",
                                                            }}
                                                            className="flex items-center gap-2.5 px-4 py-2.5 bg-bg border border-text/10 rounded-sm cursor-default transition-colors hover:border-primary/30"
                                                        >
                                                            {SKILL_ICONS[skill.icon] && (
                                                                <img
                                                                    src={SKILL_ICONS[skill.icon]}
                                                                    alt={skill.name}
                                                                    width={20}
                                                                    height={20}
                                                                    className="w-5 h-5 object-contain"
                                                                />
                                                            )}
                                                            <span className="text-sm font-medium text-text/80">{skill.name}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
