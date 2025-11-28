"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
    const { t } = useLanguage();

    return (
        <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center rounded-full border border-accent bg-secondary/50 px-3 py-1 text-sm font-medium text-muted mb-8 backdrop-blur-sm"
                >
                    <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2"></span>
                    {t.hero.badge}
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl leading-[1.1]"
                >
                    {t.hero.titleLine1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted">{t.hero.titleLine2}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-6 text-xl leading-8 text-muted max-w-2xl mx-auto"
                >
                    {t.hero.description}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-10 flex items-center justify-center gap-x-6"
                >
                    <a
                        href="#contact"
                        className="rounded-full bg-foreground px-8 py-4 text-sm font-semibold text-background hover:bg-foreground/80 transition-all hover:scale-105"
                    >
                        {t.hero.ctaPrimary}
                    </a>
                    <a href="#services" className="text-sm font-semibold leading-6 text-foreground hover:text-muted transition-colors">
                        {t.hero.ctaSecondary} <span aria-hidden="true">→</span>
                    </a>
                </motion.div>
            </div>

            {/* Tech Background Grid */}
            <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 opacity-20 blur-[100px]"></div>
            </div>
        </section>
    );
}
