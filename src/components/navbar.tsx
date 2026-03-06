"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";
import { useTheme } from "next-themes";
import { Github, Linkedin, Instagram, Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const { lang, toggleLang } = useLanguage();
    const { theme, setTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { href: "#home", label: { id: "Beranda", en: "Home" } },
        { href: "#about", label: { id: "Tentang", en: "About" } },
        { href: "#projects", label: { id: "Proyek", en: "Projects" } },
        { href: "#skills", label: { id: "Keahlian", en: "Skills" } },
        { href: "#experience", label: { id: "Pengalaman", en: "Experience" } },
        { href: "#contact", label: { id: "Kontak", en: "Contact" } },
    ];

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full h-20 z-40 transition-colors duration-300 ${scrolled ? "bg-bg/90 backdrop-blur-md border-b border-text/10" : "bg-transparent"
                    }`}
            >
                <div className="container-global flex items-center justify-between h-full">

                    {/* Left: Socials & Toggles */}
                    <div className="flex items-center gap-3 md:gap-4">
                        <button
                            onClick={toggleLang}
                            className="w-10 h-10 rounded-full border border-text/20 flex items-center justify-center text-sm font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors"
                        >
                            {lang.toUpperCase()}
                        </button>

                        <button
                            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            className="w-10 h-10 rounded-full border border-text/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors hidden md:flex"
                        >
                            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>

                        <Link href="https://github.com/jmahiswara1" target="_blank" className="w-10 h-10 rounded-full border border-text/20 items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors hidden lg:flex">
                            <Github size={16} />
                        </Link>
                        <Link href="https://www.linkedin.com/in/gadangmahiswara" target="_blank" className="w-10 h-10 rounded-full border border-text/20 items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors hidden lg:flex">
                            <Linkedin size={16} />
                        </Link>
                        <Link href="https://instagram.com/j.mahiswara_" target="_blank" className="w-10 h-10 rounded-full border border-text/20 items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors hidden lg:flex">
                            <Instagram size={16} />
                        </Link>
                    </div>

                    {/* Middle: Logo */}
                    <Link href="/" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <span className="font-[family-name:var(--font-inter)] font-bold text-2xl tracking-tighter hover:text-primary transition-colors">
                            Gadang<span className="text-primary">.</span>
                        </span>
                    </Link>

                    {/* Right: Contact & Menu */}
                    <div className="flex items-center gap-4 z-50">
                        <Link
                            href="https://wa.me/6281216312645"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hidden md:flex items-center gap-2 bg-text text-bg px-5 py-3 rounded-none font-medium text-sm hover:bg-primary hover:text-white transition-colors"
                        >
                            {lang === "id" ? "HUBUNGI SAYA" : "CONTACT ME"} <ArrowUpRight size={16} />
                        </Link>

                        {/* Invisible spacer — animated button floats at z-[70] */}
                        <div className="w-12 h-12" />
                    </div>
                </div>
            </nav>

            {/* Floating hamburger/close button — always above everything */}
            <div className="fixed top-0 left-0 w-full h-20 z-[70] pointer-events-none">
                <div className="container-global flex items-center justify-end h-full">
                    <button
                        className="w-12 h-12 flex items-center justify-center text-text hover:text-primary transition-colors pointer-events-auto"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <svg width="22" height="16" viewBox="0 0 22 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                            <motion.line
                                x1="0" y1="1" x2="22" y2="1"
                                animate={menuOpen ? { x1: 2, y1: 2, x2: 20, y2: 14 } : { x1: 0, y1: 1, x2: 22, y2: 1 }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                            />
                            <motion.line
                                x1="0" y1="8" x2="22" y2="8"
                                animate={{ opacity: menuOpen ? 0 : 1, x2: menuOpen ? 12 : 22 }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.line
                                x1="0" y1="15" x2="22" y2="15"
                                animate={menuOpen ? { x1: 2, y1: 14, x2: 20, y2: 2 } : { x1: 0, y1: 15, x2: 22, y2: 15 }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Backdrop and Side Drawer Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <>
                        {/* Backdrop overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
                            onClick={() => setMenuOpen(false)}
                        />


                        {/* Right drawer — Operator style */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                            className={`fixed top-0 right-0 bottom-0 z-[60] w-full sm:w-[380px] ${theme === "dark" ? "bg-[#111]" : "bg-[#efefef]"} shadow-2xl flex flex-col px-8 pt-20 pb-8 overflow-hidden`}
                        >
                            {/* Nav Links */}
                            <nav className="flex flex-col gap-0 flex-grow justify-center">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 40 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 * index + 0.1, ease: [0.32, 0.72, 0, 1], duration: 0.4 }}
                                        className="relative group"
                                    >
                                        {/* Number label */}
                                        <span className="absolute -left-1 top-0 text-[11px] font-mono text-text/30 group-hover:text-primary/70 transition-colors leading-none select-none">
                                            0{index + 1}
                                        </span>
                                        <Link
                                            href={link.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="font-[family-name:var(--font-bebas)] text-[3.5rem] leading-none uppercase text-text hover:text-primary transition-colors block pl-6"
                                        >
                                            {link.label[lang]}
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            {/* Bottom section */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-col gap-4 pt-6 border-t border-text/10"
                            >
                                {/* Email CTA */}
                                <Link
                                    href="https://wa.me/6281216312645"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-text text-bg px-5 py-3 text-sm font-medium hover:bg-primary transition-colors w-full justify-center"
                                >
                                    <ArrowUpRight size={16} />
                                    {lang === "id" ? "Hubungi Saya" : "Contact Me"}
                                </Link>

                                {/* Social icons row */}
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                                        className="w-9 h-9 rounded-full border border-text/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors text-text"
                                    >
                                        {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
                                    </button>
                                    <Link href="https://github.com/jmahiswara1" target="_blank" className="w-9 h-9 rounded-full border border-text/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors text-text">
                                        <Github size={15} />
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/gadangmahiswara" target="_blank" className="w-9 h-9 rounded-full border border-text/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors text-text">
                                        <Linkedin size={15} />
                                    </Link>
                                    <Link href="https://instagram.com/j.mahiswara_" target="_blank" className="w-9 h-9 rounded-full border border-text/20 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors text-text">
                                        <Instagram size={15} />
                                    </Link>
                                    <button
                                        onClick={toggleLang}
                                        className="w-9 h-9 rounded-full border border-text/20 flex items-center justify-center text-xs font-medium hover:bg-primary hover:text-white hover:border-primary transition-colors text-text ml-auto"
                                    >
                                        {lang.toUpperCase()}
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
