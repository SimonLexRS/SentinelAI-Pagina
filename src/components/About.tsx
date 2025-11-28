"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background border-t border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {t.about.title}
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              {t.about.mission}
            </p>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              {t.about.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-secondary rounded-lg border border-accent">
                <p className="font-semibold text-foreground">{t.about.nativeIntegration}</p>
                <p className="text-sm text-muted mt-1">{t.about.nativeIntegrationDesc}</p>
              </div>
              <div className="p-4 bg-secondary rounded-lg border border-accent">
                <p className="font-semibold text-foreground">{t.about.predictiveAnalysis}</p>
                <p className="text-sm text-muted mt-1">{t.about.predictiveAnalysisDesc}</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 lg:mt-0 relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary border border-accent relative">
               {/* Abstract Tech Visual */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-foreground rounded-full blur-3xl opacity-10"></div>
                 <div className="relative z-10 text-center">
                   <span className="text-8xl font-bold text-foreground/5 block tracking-tighter">AI</span>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
