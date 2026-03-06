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

    const isList = viewMode === "list";

    return (
        <Link href={`/projects/${project.slug}`} onClick={onClick} className="block group">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                    opacity: { duration: 0.5, delay: index * (isList ? 0.05 : 0.1), ease: [0.16, 1, 0.3, 1] },
                    y: { duration: 0.5, delay: index * (isList ? 0.05 : 0.1), ease: [0.16, 1, 0.3, 1] }
                }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                className={`relative flex bg-bg border border-text/10 transition-colors cursor-pointer overflow-hidden rounded-sm ${isList
                    ? "flex-col sm:flex-row hover:border-primary"
                    : "flex-col hover:border-text/30"
                    }`}
            >
                <div
                    className={`relative overflow-hidden bg-text/5 shrink-0 ${isList
                        ? "w-full sm:w-1/3 aspect-video sm:aspect-auto sm:min-h-[200px] border-b sm:border-b-0 sm:border-r border-text/10"
                        : "w-full aspect-video"
                        }`}
                >
                    {/* Placeholder color block if image doesn't exist yet */}
                    <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
                        <span className="font-mono text-xs text-text/40">{project.slug} {isList ? "" : "image"}</span>
                    </div>

                    {!isList && (
                        <motion.div
                            className="absolute inset-0 bg-text/5 z-10"
                            animate={{ opacity: isHovered ? 0 : 0.5 }}
                            transition={{ duration: 0.3 }}
                        />
                    )}
                </div>

                <div className={`flex flex-col flex-grow ${isList ? "p-6 sm:p-8 justify-center" : "p-6"}`}>
                    <div className={`flex items-start justify-between gap-4 ${isList ? "w-full" : "w-full h-full flex-col"}`}>
                        <div className={`flex-grow w-full flex ${isList ? "flex-col" : "flex-col h-full"}`}>
                            <div className={`flex justify-between w-full ${isList ? "flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2" : "gap-4"}`}>
                                <div className={`flex ${isList ? "flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4" : "flex-col"}`}>
                                    <h3
                                        className={`font-[family-name:var(--font-bebas)] uppercase leading-none text-text group-hover:text-primary transition-colors ${isList ? "text-3xl md:text-4xl" : "text-2xl lg:text-3xl"
                                            }`}
                                    >
                                        {project.title}
                                    </h3>

                                    {isList ? (
                                        <div className="flex items-center gap-3 text-text-secondary text-sm">
                                            <span className="flex items-center gap-1.5"><LayoutGrid size={14} /> {project.category}</span>
                                            <span>•</span>
                                            <span className="flex items-center gap-1.5"><Calendar size={14} /> {project.year}</span>
                                        </div>
                                    ) : (
                                        <p className="text-text-secondary text-sm mt-1">
                                            {project.category} • {project.year}
                                        </p>
                                    )}
                                </div>

                                {!isList && (
                                    <div
                                        className="w-10 h-10 rounded-full border border-text/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300"
                                    >
                                        <ArrowUpRight strokeWidth={1.5} size={20} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                )}
                            </div>

                            <p
                                className={`text-text/70 line-clamp-2 ${isList ? "text-sm md:text-base max-w-2xl mt-4" : "text-sm mt-auto pt-4"
                                    }`}
                            >
                                {lang === "id" ? project.description.id : project.description.en}
                            </p>
                        </div>

                        {isList && (
                            <div
                                className="w-12 h-12 rounded-full border border-text/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300 hidden sm:flex"
                            >
                                <ArrowUpRight strokeWidth={1.5} size={24} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        )}
                    </div>

                    <div className={`flex flex-wrap gap-2 ${isList ? "mt-6" : "mt-6"}`}>
                        {project.techStack.slice(0, isList ? undefined : 3).map((tech) => (
                            <span key={tech} className={`font-mono bg-text/5 text-text/80 rounded-sm ${isList ? "text-xs px-3 py-1.5" : "text-xs px-2 py-1"}`}>
                                {tech}
                            </span>
                        ))}
                        {!isList && project.techStack.length > 3 && (
                            <span className="text-xs font-mono px-2 py-1 bg-text/5 text-text/80 rounded-sm">
                                +{project.techStack.length - 3}
                            </span>
                        )}
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}
