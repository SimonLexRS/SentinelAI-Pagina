"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send, Bot, Zap, Shield, User, Building2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    simon_says: "" // Honeypot field
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      setFormState({ name: "", email: "", company: "", message: "", simon_says: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(t.contact.form.errorMessage || "Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-background/50 backdrop-blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.contact.title} <span className="text-primary">{t.contact.titleHighlight}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-8">
              {t.contact.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    {index === 0 ? <Bot className="w-6 h-6" /> :
                      index === 1 ? <Zap className="w-6 h-6" /> :
                        <Shield className="w-6 h-6" />}
                  </div>
                  <span className="text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-3xl blur-xl" />
            <div className="relative bg-card border border-border/50 rounded-3xl p-8 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot Field - Hidden from users */}
                <div style={{ display: 'none' }}>
                  <label htmlFor="simon_says">Don't fill this out if you're human</label>
                  <input
                    type="text"
                    id="simon_says"
                    name="simon_says"
                    value={formState.simon_says}
                    onChange={(e) => setFormState({ ...formState, simon_says: e.target.value })}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">{t.contact.form.name}</label>
                    <div className="relative">
                      <User className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        required
                        placeholder={t.contact.form.placeholderName}
                        className="w-full bg-background/50 border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium ml-1">{t.contact.form.company}</label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                      <input
                        type="text"
                        placeholder={t.contact.form.placeholderCompany}
                        className="w-full bg-background/50 border border-border rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                        value={formState.company}
                        onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">{t.contact.form.email}</label>
                  <input
                    type="email"
                    required
                    placeholder={t.contact.form.placeholderEmail}
                    className="w-full bg-background/50 border border-border rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium ml-1">{t.contact.form.message}</label>
                  <textarea
                    required
                    rows={4}
                    placeholder={t.contact.form.placeholderMessage}
                    className="w-full bg-background/50 border border-border rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full bg-primary text-primary-foreground rounded-xl py-4 text-sm font-semibold hover:bg-primary/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t.contact.form.sending}
                    </>
                  ) : isSuccess ? (
                    t.contact.form.success
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
