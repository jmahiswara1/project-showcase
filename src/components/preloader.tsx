"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/i18n";

interface PreloaderContextType {
    isPreloaderDone: boolean;
}

const PreloaderContext = createContext<PreloaderContextType>({ isPreloaderDone: true });

export function usePreloader() {
    return useContext(PreloaderContext);
}

const HELLO_WORDS = [
    "Hello",          // English
    "Halo",           // Indonesian
    "Hola",           // Spanish
    "Bonjour",        // French
    "Ciao",           // Italian
    "Hallo",          // German
    "Konnichiwa",     // Japanese
    "Nǐ hǎo",         // Chinese
    "Annyeong",       // Korean
    "WELCOME"
];

export function PreloaderProvider({ children }: { children: ReactNode }) {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);
    const [isPageReady, setIsPageReady] = useState(false);
    const [isWordsDone, setIsWordsDone] = useState(false);
    const [isExited, setIsExited] = useState(false);
    const [index, setIndex] = useState(0);

    // Page Load Detection
    useEffect(() => {
        if (document.readyState === "complete") {
            setIsPageReady(true);
        } else {
            const handleLoad = () => setIsPageReady(true);
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    // Word Sequence Logic
    useEffect(() => {
        if (index === HELLO_WORDS.length - 1) {
            const finishTimeout = setTimeout(() => {
                setIsWordsDone(true);
            }, 800);
            return () => clearTimeout(finishTimeout);
        }

        const nextWordTimeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, index === 0 ? 600 : 200);

        return () => clearTimeout(nextWordTimeout);
    }, [index]);

    // Finish Preloader when both are ready
    useEffect(() => {
        if (isPageReady && isWordsDone) {
            setIsPreloaderDone(true);
        }
    }, [isPageReady, isWordsDone]);

    // Safety fallback
    useEffect(() => {
        const safetyTimeout = setTimeout(() => {
            setIsPageReady(true);
            setIsWordsDone(true);
        }, 5000);
        return () => clearTimeout(safetyTimeout);
    }, []);

    // Scroll lock - stay locked until animation is completely finished
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
        <PreloaderContext.Provider value={{ isPreloaderDone }}>
            <AnimatePresence mode="wait" onExitComplete={() => setIsExited(true)}>
                {!isPreloaderDone && (
                    <motion.div
                        key="preloader"
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[100] bg-[#111827] flex items-center justify-center overflow-hidden"
                    >
                        <div className="flex items-center justify-center overflow-hidden h-20 relative w-full">
                            <motion.div
                                animate={{ y: `calc(-${index} * 5rem)` }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                className="absolute top-0 w-full flex flex-col items-center"
                            >
                                {HELLO_WORDS.map((word) => (
                                    <div key={word} className="h-20 flex items-center justify-center w-full">
                                        <span className="text-white text-4xl md:text-5xl font-[family-name:var(--font-bebas)] tracking-widest uppercase">
                                            {word}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </PreloaderContext.Provider>
    );
}
