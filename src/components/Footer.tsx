"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoDark from "@/assets/logosentinel.png";
import logoLight from "@/assets/logosentinel-light.png";

export default function Footer() {
    const { t } = useLanguage();
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const logoSrc = mounted && resolvedTheme === "dark" ? logoDark : logoLight;

    return (
        <footer className="bg-background border-t border-accent py-12 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <Image
                        src={logoSrc}
                        alt="Sentinel AI Logo"
                        className="h-6 w-auto"
                    />
                </div>
                <p className="text-sm text-muted">
                    &copy; {new Date().getFullYear()} Sentinel AI. {t.footer.rights}
                </p>
            </div>
        </footer>
    );
}
