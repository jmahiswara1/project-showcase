"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { projects, Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Project Roster Item Component
function ProjectItem({
    project,
    index,
    onViewportEnter
}: {
    project: Project;
    index: number;
    onViewportEnter: (idx: number) => void;
}) {
    const { lang } = useLanguage();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            onViewportEnter(index);
        }
    }, [isInView, index, onViewportEnter]);

    const formattedIndex = String(index + 1).padStart(3, "0");
    const linkUrl = project.liveUrl || project.githubUrl;

    return (
        <div ref={ref} className="py-16 md:py-32 flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-16 border-b border-text/10 last:border-0 relative">
            {/* Number */}
            <div className="font-[family-name:var(--font-inter)] text-text-secondary/50 font-medium text-lg lg:text-xl w-12 flex-shrink-0">
                {formattedIndex}
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-6 md:gap-8">
                <h3 className="font-[family-name:var(--font-inter)] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] tracking-tight text-text leading-none">
                    {project.title}
                </h3>

                <p className="text-text-secondary text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
                    {lang === "id" ? project.description.id : project.description.en}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-2">
                    <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-2 group text-sm font-medium hover:text-primary transition-colors text-text">
                        {lang === "id" ? "Lihat Detail" : "View Details"}
                        <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Link>
                    {project.liveUrl ? (
                        <Link href={project.liveUrl} target="_blank" className="inline-flex items-center gap-2 group text-sm font-medium hover:text-primary transition-colors text-text">
                            {lang === "id" ? "Kunjungi Website" : "Live Demo"}
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    ) : (
                        <span className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary/40 cursor-not-allowed">
                            {lang === "id" ? "Kunjungi Website" : "Live Demo"}
                        </span>
                    )}
                    {project.githubUrl ? (
                        <Link href={project.githubUrl} target="_blank" className="inline-flex items-center gap-2 group text-sm font-medium hover:text-primary transition-colors text-text">
                            {lang === "id" ? "Repo GitHub" : "GitHub Repo"}
                            <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Link>
                    ) : (
                        <span
                            title={lang === "id" ? "Repositori ini privat" : "This repository is private"}
                            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary/40 cursor-not-allowed"
                        >
                            {lang === "id" ? "Repo GitHub" : "GitHub Repo"}
                        </span>
                    )}
                </div>

                <div className="grid grid-cols-2 gap-8 mt-8 md:mt-12 pt-8 border-t border-text/10 max-w-xl text-xs md:text-sm font-mono tracking-wide text-text-secondary/70 uppercase">
                    <div>
                        <span className="block mb-3 opacity-50">{lang === "id" ? "Tahun" : "Year"}</span>
                        <span className="text-text">{project.year}</span>
                    </div>
                    <div>
                        <span className="block mb-3 opacity-50">{lang === "id" ? "Peran & Tag" : "Role & Tags"}</span>
                        <div className="flex flex-col gap-1.5 text-text">
                            <span>{project.role}</span>
                            {project.tags.slice(0, 3).map(tag => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ProjectsSection() {
    const { lang } = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section id="projects" className="py-24 md:py-32 relative bg-bg-secondary min-h-screen">
            <div className="container-global">
                {/* Header */}
                <div className="mb-20 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl uppercase text-text mb-4 leading-none">
                            {lang === "id" ? (
                                <>Karya <span className="text-primary">Terpilih</span></>
                            ) : (
                                <>Selected <span className="text-primary">Works</span></>
                            )}
                        </h2>
                        <p className="text-text/70 text-lg leading-relaxed mt-6">
                            {lang === "id"
                                ? "Koleksi proyek yang menunjukkan kemampuan saya dalam memecahkan masalah kompleks melalui desain dan kode yang bersih."
                                : "A collection of projects showcasing my ability to solve complex problems through clean design and solid code."}
                        </p>
                    </motion.div>
                </div>

                {/* Foxfolio Layout: 2 Columns */}
                <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">

                    {/* Left Column: Sticky Image (Desktop Only) */}
                    <Link href={`/projects/${projects[activeIndex].slug}`} className="hidden lg:block sticky top-32 w-full aspect-video overflow-hidden group cursor-pointer">
                        <Image
                            src={projects[activeIndex].image}
                            alt={projects[activeIndex].title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                            priority
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </Link>

                    {/* Right Column: Scroll Roster */}
                    <div className="flex flex-col">
                        {projects.map((project, index) => (
                            <div key={project.slug} className="flex flex-col">
                                {/* Mobile Image */}
                                <Link href={`/projects/${project.slug}`} className="block lg:hidden w-full aspect-video overflow-hidden relative mb-4 group cursor-pointer rounded-tr-2xl rounded-bl-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="100vw"
                                    />
                                </Link>

                                <ProjectItem
                                    project={project}
                                    index={index}
                                    onViewportEnter={setActiveIndex}
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
