"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { useLanguage } from "@/lib/i18n";
import { Plus, Minus } from "lucide-react";

const processes = [
    {
        id: "research",
        number: "001",
        title: "Research & Planning",
        description: {
            id: "Memahami kebutuhan proyek melalui riset mendalam, analisis kompetitor, dan perencanaan arsitektur teknis sebelum menulis satu baris kode.",
            en: "Understanding project needs through deep research, competitor analysis, and technical architecture planning before writing a single line of code.",
        },
        tools: ["User Research", "Competitive Analysis", "System Design"],
    },
    {
        id: "design",
        number: "002",
        title: "UI/UX Design",
        description: {
            id: "Merancang antarmuka yang intuitif dan visual yang memukau, dengan fokus pada pengalaman pengguna yang seamless di semua perangkat.",
            en: "Crafting intuitive interfaces and stunning visuals, focusing on a seamless user experience across all devices.",
        },
        tools: ["Figma", "Prototyping", "Design System"],
    },
    {
        id: "develop",
        number: "003",
        title: "Development",
        description: {
            id: "Membangun aplikasi dengan kode yang bersih, performa tinggi, dan arsitektur yang scalable menggunakan teknologi modern.",
            en: "Building applications with clean code, high performance, and scalable architecture using modern technologies.",
        },
        tools: ["React / Next.js", "TypeScript", "REST API"],
    },
    {
        id: "deploy",
        number: "004",
        title: "Testing & Deploy",
        description: {
            id: "Menguji setiap fitur secara menyeluruh dan men-deploy ke production dengan pipeline CI/CD yang otomatis dan monitoring.",
            en: "Testing every feature thoroughly and deploying to production with automated CI/CD pipelines and monitoring.",
        },
        tools: ["Unit Testing", "CI/CD", "Vercel"],
    },
];

function AccordionItem({
    item,
    isOpen,
    onToggle,
    index,
}: {
    item: (typeof processes)[0];
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}) {
    const { lang } = useLanguage();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] as const,
            }}
        >
            {/* Divider */}
            <div className="h-px bg-text/10" />

            {/* Row Header */}
            <button
                onClick={onToggle}
                className="w-full py-10 md:py-14 flex items-center cursor-pointer group"
            >
                {/* Number */}
                <span className="text-text-secondary/40 font-mono text-sm md:text-base w-20 md:w-28 text-left flex-shrink-0 group-hover:text-primary transition-colors duration-300">
                    {item.number}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-bebas)] text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase text-text leading-none flex-1 text-left group-hover:text-primary transition-colors duration-300">
                    {item.title}
                </h3>

                {/* Toggle Icon */}
                <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isOpen
                        ? "border-primary bg-primary/10 rotate-0"
                        : "border-text/20 group-hover:border-primary"
                    }`}>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        {isOpen ? (
                            <Minus size={18} className="text-primary" />
                        ) : (
                            <Plus size={18} className="text-text-secondary group-hover:text-primary transition-colors" />
                        )}
                    </motion.div>
                </div>
            </button>

            {/* Expanded Content */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
                        className="overflow-hidden"
                    >
                        <div className="pb-12 md:pb-16">
                            {/* Two-column detail */}
                            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 ml-20 md:ml-28">
                                {/* Description */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.15 }}
                                >
                                    <p className="text-sm font-semibold uppercase tracking-widest text-text mb-4">
                                        {lang === "id" ? "Pendekatan" : "Approach"}
                                    </p>
                                    <p className="text-text-secondary text-base md:text-lg leading-relaxed max-w-xl">
                                        {lang === "id" ? item.description.id : item.description.en}
                                    </p>
                                </motion.div>

                                {/* Tools */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.25 }}
                                    className="text-right"
                                >
                                    <p className="text-sm font-semibold uppercase tracking-widest text-text mb-4">
                                        {lang === "id" ? "Alat" : "Tool"}
                                    </p>
                                    <div className="flex flex-col gap-1.5">
                                        {item.tools.map((tool) => (
                                            <span key={tool} className="text-text-secondary text-sm md:text-base">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export function HowIBuild() {
    const { lang } = useLanguage();
    const [openId, setOpenId] = useState<string | null>("research");

    const handleToggle = (id: string) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section
            id="how-i-build"
            className="relative py-32 md:py-40 bg-bg overflow-hidden"
        >
            <div className="container-global">
                {/* Section Header */}
                <div className="mb-16 md:mb-24">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4"
                    >
                        {lang === "id" ? "// Proses" : "// Process"}
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl uppercase text-text leading-none"
                    >
                        How I Build
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-text-secondary text-lg max-w-xl mt-6"
                    >
                        {lang === "id"
                            ? "Dari ide hingga deployment — ini adalah cara saya bekerja."
                            : "From idea to deployment — this is how I work."}
                    </motion.p>
                </div>

                {/* Accordion List */}
                <div>
                    {processes.map((item, index) => (
                        <AccordionItem
                            key={item.id}
                            item={item}
                            isOpen={openId === item.id}
                            onToggle={() => handleToggle(item.id)}
                            index={index}
                        />
                    ))}
                    {/* Bottom divider */}
                    <div className="h-px bg-text/10" />
                </div>
            </div>
        </section>
    );
}
