"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/data/projects";
import { ProjectCard, ViewMode } from "@/components/project-card";
import { LayoutGrid, List } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

import { Suspense } from "react";

function ProjectsContent() {
    const { lang } = useLanguage();
    const searchParams = useSearchParams();
    const router = useRouter();

    const urlView = searchParams.get("view") as ViewMode | null;
    const urlProject = searchParams.get("project");

    const [viewMode, setViewMode] = useState<ViewMode>("grid");
    const [mounted, setMounted] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (urlView && ["grid", "list"].includes(urlView)) {
            setViewMode(urlView as ViewMode);
        }
    }, [urlView]);

    const handleViewChange = (mode: ViewMode) => {
        if (mode === viewMode) return;

        setIsTransitioning(true);
        setViewMode(mode);

        const params = new URLSearchParams(searchParams.toString());
        params.set("view", mode);
        router.push(`?${params.toString()}`, { scroll: false });

        setTimeout(() => setIsTransitioning(false), 500);
    };

    if (!mounted) return null; // Avoid hydration mismatch on initial render with query params

    return (
        <section id="projects" className="py-24 md:py-32 relative bg-bg-secondary min-h-screen">
            <div className="container-global">
                {/* Header & Controls */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl uppercase text-text mb-4 leading-none">
                            {lang === "id" ? "Karya Terpilih" : "Selected Works"}
                        </h2>
                        <p className="text-text/70 text-lg leading-relaxed">
                            {lang === "id"
                                ? "Koleksi proyek yang menunjukkan kemampuan saya dalam memecahkan masalah kompleks melalui desain dan kode yang bersih."
                                : "A collection of projects showcasing my ability to solve complex problems through clean design and solid code."}
                        </p>
                    </motion.div>

                    {/* View Controls - Square Tabs */}
                    <div className="flex bg-transparent border border-text/10 rounded-none self-start md:self-auto overflow-hidden">
                        <button
                            onClick={() => handleViewChange("grid")}
                            className={`px-5 py-3 flex items-center gap-2 text-sm font-medium transition-all ${viewMode === "grid"
                                ? "bg-text text-bg"
                                : "bg-transparent text-text-secondary hover:bg-text/5 hover:text-text"
                                }`}
                        >
                            <LayoutGrid size={16} /> <span className="hidden sm:inline">Grid</span>
                        </button>

                        <div className="w-[1px] bg-text/10 h-auto" /> {/* Divider */}

                        <button
                            onClick={() => handleViewChange("list")}
                            className={`px-5 py-3 flex items-center gap-2 text-sm font-medium transition-all ${viewMode === "list"
                                ? "bg-text text-bg"
                                : "bg-transparent text-text-secondary hover:bg-text/5 hover:text-text"
                                }`}
                        >
                            <List size={16} /> <span className="hidden sm:inline">List</span>
                        </button>
                    </div>
                </div>

                {/* Projects Display Area */}
                <div className="relative min-h-[50vh]">
                    {/* Optional Skeleton Overlay during fast transition */}
                    <AnimatePresence>
                        {isTransitioning && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 bg-bg-secondary z-10 pointer-events-none"
                            />
                        )}
                    </AnimatePresence>

                    <LayoutGroup id="projects-layout-group">
                        <motion.div layout className={`w-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${viewMode === "grid"
                            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                            : viewMode === "list"
                                ? "flex flex-col gap-6 md:gap-8 max-w-5xl mx-auto"
                                : "flex flex-col gap-16 md:gap-24"
                            }`}>
                            <AnimatePresence mode="popLayout">
                                {projects.map((project, index) => (
                                    <ProjectCard
                                        key={project.slug}
                                        project={project}
                                        viewMode={viewMode}
                                        index={index}
                                    />
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </LayoutGroup>
                </div>

                {/* Load More Button (Simulated placeholder for now) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16"
                >
                    <button className="px-8 py-4 border border-text/10 text-text font-medium text-sm hover:border-primary hover:text-primary transition-colors tracking-wide uppercase group flex items-center gap-2">
                        {lang === "id" ? "Muat Lebih Banyak" : "Load More"}
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export function ProjectsSection() {
    return (
        <Suspense fallback={
            <section id="projects" className="py-24 md:py-32 relative bg-bg-secondary min-h-screen">
                <div className="container-global flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                </div>
            </section>
        }>
            <ProjectsContent />
        </Suspense>
    );
}
