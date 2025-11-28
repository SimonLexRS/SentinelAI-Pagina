"use client";

import { motion } from "framer-motion";
import { Activity, BarChart2, MessageSquare, Monitor, Shield, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
    const { t } = useLanguage();

    const services = [
        {
            title: t.services.items[0].name,
            description: t.services.items[0].description,
            icon: Activity,
        },
        {
            title: t.services.items[1].name,
            description: t.services.items[1].description,
            icon: BarChart2,
        },
        {
            title: t.services.items[2].name,
            description: t.services.items[2].description,
            icon: MessageSquare,
        },
        {
            title: t.services.items[3].name,
            description: t.services.items[3].description,
            icon: Monitor,
        },
        {
            title: t.services.items[4].name,
            description: t.services.items[4].description,
            icon: Zap,
        },
        {
            title: t.services.items[5].name,
            description: t.services.items[5].description,
            icon: Shield,
        },
    ];

    return (
        <section id="services" className="py-24 bg-background border-t border-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        {t.services.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted">
                        {t.services.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-secondary/30 border border-accent hover:border-foreground/20 transition-all hover:shadow-lg"
                        >
                            <div className="h-12 w-12 bg-background rounded-xl border border-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="h-6 w-6 text-foreground" />
                            </div>
                            <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                            <p className="text-muted leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
