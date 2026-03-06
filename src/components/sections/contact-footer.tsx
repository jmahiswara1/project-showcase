"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, Linkedin, Instagram, Mail } from "lucide-react";

const contactLinks = [
    {
        label: "EMAIL",
        value: "gadangmahiswara@gmail.com",
        href: "mailto:gadangmahiswara@gmail.com",
        icon: Mail,
    },
    {
        label: "GITHUB",
        value: "@jmahiswara1",
        href: "https://github.com/jmahiswara1",
        icon: Github,
    },
    {
        label: "LINKEDIN",
        value: "Gadang Mahiswara",
        href: "https://www.linkedin.com/in/gadangmahiswara",
        icon: Linkedin,
    },
    {
        label: "INSTAGRAM",
        value: "@j.mahiswara_",
        href: "https://instagram.com/j.mahiswara_",
        icon: Instagram,
    },
];

export function ContactFooter() {
    const { lang } = useLanguage();

    return (
        <section
            id="contact"
            className="relative bg-bg-secondary overflow-hidden"
        >
            {/* Contact Area */}
            <div className="container-global pt-32 md:pt-40 pb-20 md:pb-28">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
                    {/* Left: Title + Description */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-primary font-mono text-sm uppercase tracking-[0.3em] mb-4"
                        >
                            {lang === "id" ? "// Kontak" : "// Contact"}
                        </motion.p>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-[family-name:var(--font-bebas)] text-5xl md:text-7xl lg:text-8xl uppercase text-text leading-[0.95] mb-8"
                        >
                            {lang === "id" ? (
                                <>Mari <span className="text-primary">Terhubung</span></>
                            ) : (
                                <>Let's <span className="text-primary">Connect</span></>
                            )}
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-text-secondary text-sm md:text-base uppercase tracking-wide leading-relaxed max-w-md font-mono"
                        >
                            {lang === "id"
                                ? "Tertarik untuk berkolaborasi atau punya proyek yang ingin dibangun? Jangan ragu untuk menghubungi saya melalui salah satu platform di samping."
                                : "Interested in collaborating or have a project you'd like to build? Don't hesitate to reach out through any of the platforms listed here."}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-10"
                        >
                            <Link
                                href="https://wa.me/6281216312645"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-text text-bg px-8 py-4 font-medium text-sm uppercase tracking-wider hover:bg-primary hover:text-white transition-colors group"
                            >
                                {lang === "id" ? "Hubungi via WhatsApp" : "Contact via WhatsApp"}
                                <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right: Contact Links — metadata style */}
                    <div className="flex flex-col justify-center">
                        {contactLinks.map((link, index) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08 + 0.15,
                                }}
                            >
                                {/* Divider */}
                                <div className="h-px bg-text/10" />

                                <Link
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-between py-6 md:py-7 group"
                                >
                                    <span className="text-text-secondary/50 font-mono text-xs md:text-sm uppercase tracking-widest">
                                        {link.label}
                                    </span>
                                    <span className="flex items-center gap-2 font-[family-name:var(--font-bebas)] text-xl md:text-2xl uppercase text-text group-hover:text-primary transition-colors">
                                        {link.value}
                                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </span>
                                </Link>
                            </motion.div>
                        ))}
                        {/* Bottom divider */}
                        <div className="h-px bg-text/10" />
                    </div>
                </div>
            </div>

            {/* Full-width Image */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className="container-global pb-0"
            >
                <div className="relative w-full aspect-[16/5] overflow-hidden">
                    <Image
                        src="/footer.jpg"
                        alt="Gadang Mahiswara"
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                </div>
            </motion.div>

            {/* Footer */}
            <div className="border-t border-text/10">
                <div className="container-global py-8 md:py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left: Logo */}
                        <Link href="/" className="font-[family-name:var(--font-inter)] font-bold text-xl tracking-tighter text-text hover:text-primary transition-colors">
                            Gadang<span className="text-primary">.</span>
                        </Link>

                        {/* Center: Copyright */}
                        <p className="text-text-secondary/50 text-xs font-mono tracking-wider uppercase">
                            &copy; {new Date().getFullYear()} Gadang Mahiswara. All rights reserved.
                        </p>

                        {/* Right: Social icons */}
                        <div className="flex items-center gap-3">
                            <Link href="https://github.com/jmahiswara1" target="_blank" className="w-9 h-9 rounded-full border border-text/15 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                                <Github size={14} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/gadangmahiswara" target="_blank" className="w-9 h-9 rounded-full border border-text/15 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                                <Linkedin size={14} />
                            </Link>
                            <Link href="https://instagram.com/j.mahiswara_" target="_blank" className="w-9 h-9 rounded-full border border-text/15 flex items-center justify-center text-text-secondary hover:bg-primary hover:text-white hover:border-primary transition-colors">
                                <Instagram size={14} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
