"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, Globe, Moon, Sun } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import logoDark from "@/assets/logosentinel.png";
import logoLight from "@/assets/logosentinel-light.png";

export default function Navbar() {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "es" ? "en" : "es");
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const logoSrc = mounted && resolvedTheme === "dark" ? logoDark : logoLight;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-accent transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logoSrc}
                alt="Sentinel AI Logo"
                className="h-8 w-auto"
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="#about" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              {t.navbar.about}
            </Link>
            <Link href="#solutions" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              {t.navbar.solutions}
            </Link>
            <Link href="#services" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              {t.navbar.services}
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted hover:text-foreground transition-colors">
              {t.navbar.contact}
            </Link>

            <div className="flex items-center gap-2 border-l border-accent pl-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="uppercase">{language}</span>
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded-full text-muted hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && resolvedTheme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </div>

            <button className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors">
              {t.navbar.getStarted}
            </button>
          </div>
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-muted hover:text-foreground transition-colors"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              <span className="uppercase">{language}</span>
            </button>
            <button className="p-2 rounded-md hover:bg-secondary transition-colors text-muted">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
