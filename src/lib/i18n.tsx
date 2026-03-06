"use client";

import { createContext, useContext, useState, ReactNode, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextType {
    lang: Language;
    toggleLang: () => void;
    langPrefix: Language;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [lang, setLang] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Check local storage for saved language
        const savedLang = localStorage.getItem("lang") as Language;
        if (savedLang) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setLang(savedLang);
        }
        setMounted(true);
    }, []);

    const toggleLang = () => {
        const newLang = lang === "id" ? "en" : "id";
        setLang(newLang);
        localStorage.setItem("lang", newLang);
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, langPrefix: lang }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
