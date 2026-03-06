"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import { usePreloader } from "@/components/preloader";

export function Hero() {
    const { lang } = useLanguage();
    const { isPreloaderDone } = usePreloader();

    return (
        <section className="relative min-h-[100dvh] flex flex-col justify-center overflow-hidden pt-32 pb-16">

            {/* Background elements intentionally removed */}

            <div className="container-global">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isPreloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col mb-16"
                >
                    {/* Main Headline */}
                    <h1 className="flex flex-col md:mt-4 gap-1 md:gap-1 z-10">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={isPreloaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl lg:text-[9rem] font-normal leading-none tracking-normal text-text uppercase"
                        >
                            {lang === "id" ? "Halo, saya" : "Hello, I'm"}
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={isPreloaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="font-[family-name:var(--font-bebas)] text-7xl md:text-9xl lg:text-[9rem] font-normal leading-none tracking-normal text-primary uppercase"
                        >
                            Gadang Mahiswara
                        </motion.span>

                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={isPreloaderDone ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="font-[family-name:var(--font-playfair)] italic text-3xl md:text-6xl lg:text-[5rem] tracking-normal text-text/90 pl-0 md:pl-32 lg:pl-64"
                        >
                            / Fullstack Developer.
                        </motion.span>
                    </h1>
                </motion.div>

                {/* Bottom Metadata row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 md:mt-16 border-t border-text/10 pt-8 relative z-10 w-full lg:w-3/4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isPreloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <p className="text-text-secondary font-medium max-w-sm text-sm md:text-base leading-relaxed">
                            {lang === "id"
                                ? "Mahasiswa Teknik Informatika di Universitas Negeri Surabaya. Membangun platform digital modern, interaktif, dan scalable untuk masa depan."
                                : "Informatics Engineering Student at State University of Surabaya. Building modern, interactive, and scalable digital platforms for the future."}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isPreloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex items-start md:justify-end"
                    >
                        <p className="font-mono text-text/60 tracking-widest text-sm uppercase">
                            [ Surabaya, ID ]
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
