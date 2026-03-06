import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Code, Calendar, LayoutGrid } from "lucide-react";

import { ProjectPreloader } from "@/components/project-preloader";

// Generate static routes during build time
export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    // Assuming English as default or relying on client to handle bilingual text for static pages
    // For a static site, we can render both or use a client component wrapper if strict i18n is needed.
    // Here we'll render both or rely on the primary language. For simplicity, we choose english as primary content placeholder.

    return (
        <>
            <ProjectPreloader title={project.title} />
            <main className="min-h-screen bg-bg-secondary pt-32 pb-24">
                <div className="container-global">
                    {/* Back Navigation */}
                    <Link
                        href="/?view=grid#projects"
                        className="inline-flex items-center gap-2 text-text-secondary hover:text-primary transition-colors mb-12 font-medium"
                    >
                        <ArrowLeft size={20} />
                        Back to Projects
                    </Link>

                    {/* Hero Section */}
                    <div className="mb-16">
                        <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm font-medium mb-6 uppercase tracking-wider">
                            <span className="text-primary flex items-center gap-1.5"><LayoutGrid size={16} /> {project.category}</span>
                            <span>/</span>
                            <span className="flex items-center gap-1.5"><Calendar size={16} /> {project.year}</span>
                            <span>/</span>
                            <span>{project.role}</span>
                        </div>

                        <h1 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl uppercase leading-none text-text mb-12">
                            {project.title}
                        </h1>

                        {/* Hero Image */}
                        <div className="relative w-full aspect-video md:aspect-[21/9] overflow-hidden bg-text/5 border border-text/10 rounded-sm">
                            <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
                                <span className="font-mono text-sm text-text/40">{project.slug} High Res Cover Image</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col lg:flex-row gap-16 md:gap-24">
                        {/* Main Description */}
                        <div className="flex-grow lg:w-2/3">
                            <h2 className="font-mono text-sm uppercase text-text-secondary tracking-widest mb-6">
                                About the Project
                            </h2>
                            <div className="text-text/80 text-lg md:text-xl leading-relaxed space-y-6">
                                <p>
                                    {project.description.en}
                                </p>
                                {/* If we strictly need bilingual static content, we could render both or use a client component */}
                                <p className="text-text-secondary mt-8 text-base">
                                    <em>(ID: {project.description.id})</em>
                                </p>
                            </div>

                            {/* Extended Status Badge */}
                            <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 border border-text/10 rounded-full text-sm">
                                <div className={`w-2 h-2 rounded-full ${project.status === "Live" ? "bg-green-500" : "bg-yellow-500"}`} />
                                Status: {project.status}
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="flex flex-col lg:w-1/3 gap-12">
                            <div>
                                <h3 className="font-mono text-xs uppercase text-text-secondary mb-4 tracking-widest flex items-center gap-2">
                                    <Code size={16} /> Tech Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech) => (
                                        <span key={tech} className="text-sm px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-sm">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-mono text-xs uppercase text-text-secondary mb-4 tracking-widest">
                                    Links
                                </h3>
                                <div className="flex flex-col gap-4">
                                    {project.liveUrl && (
                                        <Link
                                            href={project.liveUrl}
                                            target="_blank"
                                            className="flex justify-between items-center p-4 border border-text/10 rounded-sm hover:border-primary hover:text-primary transition-colors group"
                                        >
                                            <span className="font-medium">Live Demo</span>
                                            <ExternalLink size={18} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </Link>
                                    )}
                                    {project.githubUrl && (
                                        <Link
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="flex justify-between items-center p-4 border border-text/10 rounded-sm hover:border-primary hover:text-primary transition-colors group"
                                        >
                                            <span className="font-medium">Source Code</span>
                                            <Github size={18} className="transform group-hover:scale-110 transition-transform" />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
