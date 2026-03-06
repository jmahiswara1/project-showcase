"use client";

import { motion, useScroll, useTransform, useInView, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

const experiences = [
    {
        id: "sma",
        institution: "SMAN 2 Pare",
        role: { id: "MIPA", en: "Science (MIPA)" },
        period: "2020 — 2023",
        side: "left" as const,
    },
    {
        id: "unesa",
        institution: "Universitas Negeri Surabaya",
        role: { id: "Teknik Informatika", en: "Informatics Engineering" },
        period: "2023 — Present",
        side: "right" as const,
    },
    {
        id: "dicoding",
        institution: "Cohort Asah Led by Dicoding",
        role: { id: "Frontend & Backend with AI", en: "Frontend & Backend with AI" },
        period: "Aug 2025 — Jan 2026",
        side: "left" as const,
    },
];

function StaggeredText({ text }: { text: string }) {
    const ref = useRef<HTMLHeadingElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const words = text.split(" ");

    return (
        <h2
            ref={ref}
            className="font-[family-name:var(--font-bebas)] text-4xl sm:text-5xl md:text-7xl lg:text-8xl uppercase text-text leading-[0.95] text-center max-w-5xl mx-auto"
        >
            {words.map((word, i) => (
                <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
                    <motion.span
                        className={`inline-block ${i === words.length - 1 ? "text-primary" : ""}`}
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{
                            duration: 0.8,
                            delay: i * 0.06,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </h2>
    );
}

function TimelineEntry({
    entry,
}: {
    entry: (typeof experiences)[0];
}) {
    const { lang } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const isLeft = entry.side === "left";

    return (
        <div ref={ref} className="relative h-[35vh] flex items-center">
            {/* The content row: left - center - right */}
            <div className="w-full grid grid-cols-[1fr_60px_1fr] md:grid-cols-[1fr_80px_1fr] items-center">
                {/* Left side */}
                <div className={isLeft ? "pr-4 md:pr-12" : ""}>
                    {isLeft && (
                        <motion.div
                            initial={{ opacity: 0, x: -80 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-right"
                        >
                            <h3 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl uppercase text-text leading-[0.95] mb-4">
                                {entry.institution}
                            </h3>
                            <p className="text-text-secondary text-base md:text-lg mb-2">
                                {lang === "id" ? entry.role.id : entry.role.en}
                            </p>
                            <p className="text-text-secondary/50 font-mono text-sm uppercase tracking-widest">
                                {entry.period}
                            </p>
                        </motion.div>
                    )}
                </div>

                {/* Center dot */}
                <div className="flex justify-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-3 h-3 rounded-full bg-primary shadow-[0_0_15px_4px_rgba(var(--color-primary-rgb,99,102,241),0.4)]"
                    />
                </div>

                {/* Right side */}
                <div className={!isLeft ? "pl-4 md:pl-12" : ""}>
                    {!isLeft && (
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            }}
                            className="text-left"
                        >
                            <h3 className="font-[family-name:var(--font-bebas)] text-4xl md:text-6xl lg:text-7xl uppercase text-text leading-[0.95] mb-4">
                                {entry.institution}
                            </h3>
                            <p className="text-text-secondary text-base md:text-lg mb-2">
                                {lang === "id" ? entry.role.id : entry.role.en}
                            </p>
                            <p className="text-text-secondary/50 font-mono text-sm uppercase tracking-widest">
                                {entry.period}
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export function Experience() {
    const { lang } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.3", "end 0.7"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    const { scrollYProgress: lineProgress } = useScroll({
        target: sectionRef,
        offset: ["start 0.5", "end 0.5"],
    });

    const lineHeight = useTransform(lineProgress, [0, 1], ["0%", "100%"]);

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="relative py-32 md:py-40 bg-bg-secondary overflow-hidden"
        >
            <div className="container-global">
                {/* Section Label */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-6 text-center"
                >
                    {lang === "id" ? "// Perjalanan" : "// Journey"}
                </motion.p>

                {/* Staggered Header */}
                <div className="mb-16 md:mb-20 text-center">
                    <StaggeredText
                        text={
                            lang === "id"
                                ? "Jelajahi perjalanan saya"
                                : "Explore my journey"
                        }
                    />
                </div>
            </div>

            {/* Timeline Area */}
            <div className="relative">
                {/* SVG Curve — the "snake" path flowing between entries */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <svg
                        className="absolute left-0 top-0 w-full h-full"
                        viewBox="0 0 1000 2100"
                        preserveAspectRatio="none"
                        fill="none"
                    >
                        {/* The flowing curve that snakes between left and right */}
                        <motion.path
                            d="M 500 0 C 500 100, 800 200, 800 350 C 800 500, 500 550, 500 700 C 500 850, 200 900, 200 1050 C 200 1200, 500 1250, 500 1400 C 500 1550, 800 1600, 800 1750 C 800 1900, 500 1950, 500 2100"
                            stroke="var(--color-primary, #6366f1)"
                            strokeWidth="18"
                            strokeLinecap="round"
                            fill="none"
                            style={{ pathLength }}
                            opacity={0.6}
                        />
                    </svg>
                </div>

                {/* Center vertical line — follows user's screen center */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 z-[1]">
                    <motion.div
                        style={{ height: lineHeight }}
                        className="w-[2px] bg-primary"
                    />
                </div>

                {/* Timeline entries */}
                <div className="relative z-[2]">
                    {experiences.map((entry, index) => (
                        <TimelineEntry key={entry.id} entry={entry} />
                    ))}
                </div>
            </div>
        </section>
    );
}
