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
    "Namaste",        // Hindi
    "WELCOME"
];

export function PreloaderProvider({ children }: { children: ReactNode }) {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index === HELLO_WORDS.length - 1) {
            const finishTimeout = setTimeout(() => {
                setIsPreloaderDone(true);
            }, 800);
            return () => clearTimeout(finishTimeout);
        }

        const nextWordTimeout = setTimeout(() => {
            setIndex((prev) => prev + 1);
        }, index === 0 ? 400 : 150);

        return () => clearTimeout(nextWordTimeout);
    }, [index]);

    // Safety fallback
    useEffect(() => {
        const safetyTimeout = setTimeout(() => setIsPreloaderDone(true), 4000);
        return () => clearTimeout(safetyTimeout);
    }, []);

    // Scroll lock
    useEffect(() => {
        if (!isPreloaderDone) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isPreloaderDone]);

    return (
        <PreloaderContext.Provider value={{ isPreloaderDone }}>
            <AnimatePresence mode="wait">
                {!isPreloaderDone && (
                    <motion.div
                        key="preloader"
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-[100] bg-bg flex items-center justify-center overflow-hidden"
                    >
                        <div className="flex items-center justify-center overflow-hidden h-20 relative w-full">
                            <AnimatePresence>
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute text-text text-4xl md:text-5xl font-[family-name:var(--font-bebas)] tracking-widest uppercase"
                                >
                                    {HELLO_WORDS[index]}
                                </motion.span>
                            </AnimatePresence>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {children}
        </PreloaderContext.Provider>
    );
}
