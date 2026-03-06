"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n";
import { ArrowUpRight, Github, ExternalLink, Calendar, Code, LayoutGrid } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type ViewMode = "grid" | "list";

interface ProjectCardProps {
    project: Project;
    viewMode: ViewMode;
    index: number;
    onClick?: () => void;
}

export function ProjectCard({ project, viewMode, index, onClick }: ProjectCardProps) {
    const { lang } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    // Grid View
    if (viewMode === "grid") {
        return (
            <Link href={`/projects/${project.slug}`} onClick={onClick} className="block group">
                <motion.div
                    layoutId={`project-wrapper-${project.slug}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="relative flex flex-col bg-bg border border-text/10 hover:border-text/30 transition-colors cursor-pointer overflow-hidden rounded-sm"
                >
                    <motion.div
                        layoutId={`project-image-container-${project.slug}`}
                        className="relative w-full aspect-[4/3] overflow-hidden bg-text/5"
                    >
                        {/* Placeholder color block if image doesn't exist yet */}
                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                            <span className="font-mono text-xs text-text/40">{project.slug} image</span>
                        </div>

                        <motion.div
                            className="absolute inset-0 bg-text/5 z-10"
                            animate={{ opacity: isHovered ? 0 : 0.5 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>

                    <div className="flex flex-col p-6 flex-grow">
                        <div className="flex items-start justify-between mb-4 gap-4">
                            <motion.div layoutId={`project-title-container-${project.slug}`}>
                                <motion.h3
                                    layoutId={`project-title-${project.slug}`}
                                    className="font-[family-name:var(--font-bebas)] text-2xl lg:text-3xl uppercase leading-none text-text group-hover:text-primary transition-colors"
                                >
                                    {project.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`project-category-${project.slug}`}
                                    className="text-text-secondary text-sm mt-1"
                                >
                                    {project.category} • {project.year}
                                </motion.p>
                            </motion.div>
                            <motion.div
                                layoutId={`project-arrow-${project.slug}`}
                                className="w-10 h-10 rounded-full border border-text/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                            >
                                <ArrowUpRight strokeWidth={1.5} size={20} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </motion.div>
                        </div>

                        <motion.p
                            layoutId={`project-desc-${project.slug}`}
                            className="text-text/70 text-sm line-clamp-2 mt-auto"
                        >
                            {lang === "id" ? project.description.id : project.description.en}
                        </motion.p>

                        <motion.div
                            layoutId={`project-tech-${project.slug}`}
                            className="flex flex-wrap gap-2 mt-6"
                        >
                            {project.techStack.slice(0, 3).map((tech) => (
                                <span key={tech} className="text-xs font-mono px-2 py-1 bg-text/5 text-text/80 rounded-sm">
                                    {tech}
                                </span>
                            ))}
                            {project.techStack.length > 3 && (
                                <span className="text-xs font-mono px-2 py-1 bg-text/5 text-text/80 rounded-sm">
                                    +{project.techStack.length - 3}
                                </span>
                            )}
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        );
    }

    // List View
    if (viewMode === "list") {
        return (
            <Link href={`/projects/${project.slug}`} onClick={onClick} className="block group">
                <motion.div
                    layoutId={`project-wrapper-${project.slug}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                    className="relative flex flex-col sm:flex-row bg-bg border border-text/10 hover:border-primary transition-colors cursor-pointer overflow-hidden rounded-sm"
                >
                    <motion.div
                        layoutId={`project-image-container-${project.slug}`}
                        className="relative w-full sm:w-1/3 shrink-0 aspect-video sm:aspect-auto sm:min-h-[200px] overflow-hidden bg-text/5 border-b sm:border-b-0 sm:border-r border-text/10"
                    >
                        <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                            <span className="font-mono text-xs text-text/40">{project.slug}</span>
                        </div>
                    </motion.div>

                    <div className="flex flex-col p-6 sm:p-8 flex-grow justify-center">
                        <div className="flex items-start justify-between gap-4 w-full">
                            <div className="flex-grow">
                                <motion.div layoutId={`project-title-container-${project.slug}`} className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
                                    <motion.h3
                                        layoutId={`project-title-${project.slug}`}
                                        className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl uppercase leading-none text-text group-hover:text-primary transition-colors"
                                    >
                                        {project.title}
                                    </motion.h3>
                                    <motion.div layoutId={`project-category-${project.slug}`} className="flex items-center gap-3 text-text-secondary text-sm">
                                        <span className="flex items-center gap-1.5"><LayoutGrid size={14} /> {project.category}</span>
                                        <span>•</span>
                                        <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.year}</span>
                                    </motion.div>
                                </motion.div>

                                <motion.p
                                    layoutId={`project-desc-${project.slug}`}
                                    className="text-text/70 text-sm md:text-base line-clamp-2 max-w-2xl mt-4"
                                >
                                    {lang === "id" ? project.description.id : project.description.en}
                                </motion.p>
                            </div>

                            <motion.div
                                layoutId={`project-arrow-${project.slug}`}
                                className="w-12 h-12 rounded-full border border-text/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 hidden sm:flex"
                            >
                                <ArrowUpRight strokeWidth={1.5} size={24} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.div>
                        </div>

                        <motion.div layoutId={`project-tech-${project.slug}`} className="flex flex-wrap gap-2 mt-6">
                            {project.techStack.map((tech) => (
                                <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-text/5 text-text/80 rounded-sm">
                                    {tech}
                                </span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        );
    }

    return null;
}
