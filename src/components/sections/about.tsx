"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

function AnimatedCounter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: false, margin: "-80px" });
    const rafRef = useRef<number>(0);

    useEffect(() => {
        if (!inView) {
            setCount(0);
            cancelAnimationFrame(rafRef.current);
            return;
        }

        const duration = 1800;
        const startTime = performance.now();

        const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(rafRef.current);
    }, [inView, target]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}

const stats = [
    { value: 2023, suffix: "", prefix: "", label: { id: "Mulai Berkarya", en: "Est." } },
    { value: 40, suffix: "+", prefix: "", label: { id: "Proyek Selesai", en: "Projects" } },
    { value: 20, suffix: "+", prefix: "", label: { id: "Tech Stack", en: "Tech Stack" } },
];

export function About() {
    const { lang } = useLanguage();
    const sectionRef = useRef<HTMLElement>(null);
    const inView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-24 md:py-32"
        >
            <div className="container-global">
                {/* Section label */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="text-xs font-mono uppercase tracking-[0.2em] text-text/40 mb-12"
                >
                    {lang === "id" ? "/ Tentang Saya" : "/ About Me"}
                </motion.p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* LEFT — Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden aspect-[3/4] w-full max-w-sm">
                            <Image
                                src="/profile.jpg"
                                alt="Gadang Mahiswara"
                                fill
                                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* RIGHT — Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.15, ease: [0.32, 0.72, 0, 1] }}
                        className="flex flex-col gap-8 justify-center lg:pt-4"
                    >
                        <h2 className="font-[family-name:var(--font-bebas)] text-[3.5rem] md:text-[4.5rem] leading-none uppercase text-text">
                            {lang === "id"
                                ? <>Builder yang suka <span className="text-primary">hal yang belum dipetakan</span></>
                                : <>A Builder Who Loves <span className="text-primary">The Uncharted</span></>}
                        </h2>

                        <div className="flex flex-col gap-4 text-text/60 text-base leading-relaxed text-justify">
                            <p>
                                {lang === "id"
                                    ? "Saya adalah Fullstack Developer berbasis di Indonesia yang berfokus membangun produk digital yang berdampak — dari web app hingga sistem backend yang scalable."
                                    : "I'm a Fullstack Developer based in Indonesia, focused on building impactful digital products — from web apps to scalable backend systems."}
                            </p>
                            <p>
                                {lang === "id"
                                    ? "Saya berfokus menggabungkan desain yang indah dengan rekayasa yang sempurna. Karena produk digital terbaik adalah produk yang terasa menyenangkan dan mudah digunakan oleh pengguna."
                                    : "I focus on merging beautiful design with flawless engineering. Because the best digital products are those that feel enjoyable and effortless for the user."}
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-2">
                            <a
                                href="https://wa.me/6281216312645"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-text text-bg px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
                            >
                                {lang === "id" ? "Hubungi Saya" : "Contact Me"} <ArrowUpRight size={16} />
                            </a>
                            <a
                                href="/cv.pdf"
                                download
                                className="flex items-center gap-2 border border-text/20 text-text px-6 py-3 text-sm font-medium hover:border-primary hover:text-primary transition-colors"
                            >
                                {lang === "id" ? "Unduh CV" : "Download CV"}
                            </a>
                        </div>

                        {/* Stats row */}
                        <div className="grid grid-cols-3 gap-0 border-t border-text/10 pt-6">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                                    className="flex flex-col gap-1 pr-4 last:pr-0"
                                >
                                    <span className="font-[family-name:var(--font-bebas)] text-4xl leading-none text-text">
                                        <AnimatedCounter
                                            target={stat.value}
                                            suffix={stat.suffix}
                                            prefix={stat.prefix}
                                        />
                                    </span>
                                    <span className="text-xs font-mono text-text/40 uppercase tracking-widest">
                                        {stat.label[lang]}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
