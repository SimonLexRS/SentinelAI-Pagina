"use client";

import { motion } from "framer-motion";
import { Bot, Workflow, MessageSquare, Database, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

const TypingEffect = ({ text, delay = 0 }: { text: string, delay?: number }) => {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        const timeout = setTimeout(() => {
            let i = 0;
            const interval = setInterval(() => {
                setDisplayedText(text.substring(0, i + 1));
                i++;
                if (i === text.length) clearInterval(interval);
            }, 30);
            return () => clearInterval(interval);
        }, delay);
        return () => clearTimeout(timeout);
    }, [text, delay]);

    return <span>{displayedText}</span>;
};

export default function Solutions() {
    const { t, language } = useLanguage();

    const solutions = [
        {
            id: "zabbix",
            title: t.solutions.zabbix.title,
            description: t.solutions.zabbix.description,
            features: t.solutions.zabbix.features,
            icon: Bot,
            color: "bg-orange-500",
            tech: "Zabbix API + LLMs",
        },
        {
            id: "n8n",
            title: t.solutions.n8n.title,
            description: t.solutions.n8n.description,
            features: t.solutions.n8n.features,
            icon: Workflow,
            color: "bg-red-500",
            tech: "n8n + LangChain",
        },
        {
            id: "agents",
            title: t.solutions.agents.title,
            description: t.solutions.agents.description,
            features: t.solutions.agents.features,
            icon: MessageSquare,
            color: "bg-blue-500",
            tech: "agent.sentinel-ia.com",
        },
    ];

    return (
        <section id="solutions" className="py-24 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
                    >
                        {t.solutions.title}
                    </motion.h2>
                    <p className="mt-4 text-lg text-muted">
                        {t.solutions.subtitle}
                    </p>
                </div>

                <div className="space-y-24">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Content Side */}
                            <div className="flex-1 space-y-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`p-2 rounded-lg ${solution.color}/10`}>
                                        <solution.icon className={`h-6 w-6 ${solution.color.replace('bg-', 'text-')}`} />
                                    </div>
                                    <span className="text-sm font-semibold text-muted uppercase tracking-wider">{solution.tech}</span>
                                </div>
                                <h3 className="text-3xl font-bold text-foreground">{solution.title}</h3>
                                <p className="text-lg text-muted leading-relaxed">
                                    {solution.description}
                                </p>
                                <ul className="space-y-3 pt-4">
                                    {solution.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-foreground/80">
                                            <div className="h-1.5 w-1.5 rounded-full bg-foreground"></div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Visual Side */}
                            <div className="flex-1 w-full">
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary border border-accent shadow-sm group">
                                    {/* Abstract UI Representation */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        {solution.id === 'zabbix' && (
                                            <div className="w-3/4 h-3/4 bg-background rounded-xl border border-accent shadow-xl p-6 flex flex-col gap-4">
                                                <div className="flex items-center gap-2 border-b border-accent pb-4">
                                                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                                                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                                                    <span className="ml-auto text-xs text-muted">Zabbix Dashboard</span>
                                                </div>
                                                <div className="flex-1 bg-secondary/50 rounded-lg p-4 font-mono text-xs text-muted">
                                                    <p className="text-green-600">
                                                        <TypingEffect text={t.solutions.zabbix.demo.line1} delay={500} />
                                                    </p>
                                                    <p className="mt-2">
                                                        <TypingEffect text={t.solutions.zabbix.demo.line2} delay={2000} />
                                                    </p>
                                                    <p className="mt-2 text-blue-600">
                                                        <TypingEffect text={t.solutions.zabbix.demo.line3} delay={4000} />
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {solution.id === 'n8n' && (
                                            <div className="relative w-full h-full flex items-center justify-center">
                                                <div className="absolute inset-0 flex items-center justify-center gap-8">
                                                    <motion.div
                                                        animate={{ y: [0, -10, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                        className="h-16 w-16 bg-background rounded-xl border border-accent shadow-lg flex items-center justify-center"
                                                    >
                                                        <Database className="h-8 w-8 text-muted" />
                                                    </motion.div>
                                                    <div className="h-1 w-16 bg-gradient-to-r from-accent to-accent/50"></div>
                                                    <motion.div
                                                        animate={{ scale: [1, 1.1, 1] }}
                                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                                        className="h-20 w-20 bg-background rounded-xl border border-red-200 shadow-lg flex items-center justify-center z-10"
                                                    >
                                                        <Workflow className="h-10 w-10 text-red-500" />
                                                    </motion.div>
                                                    <div className="h-1 w-16 bg-gradient-to-r from-accent/50 to-accent"></div>
                                                    <motion.div
                                                        animate={{ y: [0, 10, 0] }}
                                                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                                        className="h-16 w-16 bg-background rounded-xl border border-accent shadow-lg flex items-center justify-center"
                                                    >
                                                        <Globe className="h-8 w-8 text-muted" />
                                                    </motion.div>
                                                </div>
                                            </div>
                                        )}

                                        {solution.id === 'agents' && (
                                            <div className="w-64 bg-background rounded-2xl border border-accent shadow-xl overflow-hidden">
                                                <div className="bg-green-600 p-4 flex items-center gap-3">
                                                    <div className="h-8 w-8 bg-white/20 rounded-full"></div>
                                                    <div className="h-2 w-24 bg-white/20 rounded-full"></div>
                                                </div>
                                                <div className="p-4 space-y-3">
                                                    <div className="bg-secondary p-3 rounded-lg rounded-tl-none max-w-[80%] text-xs text-muted">
                                                        <TypingEffect text={t.solutions.agents.demo.user} delay={1000} />
                                                    </div>
                                                    <div className="bg-green-50 p-3 rounded-lg rounded-tr-none max-w-[80%] ml-auto text-xs text-green-800">
                                                        <TypingEffect text={t.solutions.agents.demo.agent} delay={3000} />
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
