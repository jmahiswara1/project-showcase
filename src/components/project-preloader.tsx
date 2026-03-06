"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePreloader } from "./preloader";

export function ProjectPreloader({ title }: { title: string }) {
    const { isPreloaderDone } = usePreloader();
    const [isProjectPreloaderDone, setIsProjectPreloaderDone] = useState(false);
    const [isExited, setIsExited] = useState(false);

    useEffect(() => {
        // Only start our timer when the global preloader is completely finished
        if (isPreloaderDone) {
            const timer = setTimeout(() => {
                setIsProjectPreloaderDone(true);
            }, 1500); // Wait 1.5 seconds showing the title before hiding this preloader
            return () => clearTimeout(timer);
        }
    }, [isPreloaderDone]);

    // Scroll lock logic specifically for this preloader
    useEffect(() => {
        if (!isExited) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isExited]);

    return (
        <AnimatePresence mode="wait" onExitComplete={() => setIsExited(true)}>
            {!isProjectPreloaderDone && (
                <motion.div
                    key="project-preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                    // z-[90] ensures it's underneath the global preloader (z-[100]) but above standard content
                    className="fixed inset-0 w-screen h-[100dvh] z-[90] bg-[#111827] flex items-center justify-center overflow-hidden"
                >
                    {isPreloaderDone && (
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-100%", transition: { duration: 0.5 } }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="text-white font-[family-name:var(--font-bebas)] text-5xl md:text-7xl uppercase tracking-wider text-center px-4"
                            >
                                {title}
                            </motion.h1>
                        </div>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
