"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectPreloaderProps {
    title: string;
}

export function ProjectPreloader({ title }: ProjectPreloaderProps) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Scroll to top immediately when entering the page
        window.scrollTo(0, 0);

        // Lock body scroll
        document.body.style.overflow = "hidden";

        // Hide preloader after 1.5 seconds
        const timer = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = ""; // Restore scroll
        }, 1500);

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = ""; // Ensure scroll is restored on unmount
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    key="project-preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    className="fixed inset-0 z-[100] bg-bg flex items-center justify-center overflow-hidden"
                >
                    <div className="flex items-center justify-center overflow-hidden h-32 relative w-full px-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="text-text text-4xl md:text-6xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-widest uppercase text-center"
                        >
                            {title}
                        </motion.h1>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
