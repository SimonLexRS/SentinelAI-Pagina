"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  value = { formState.email }
  onChange = { handleChange }
  className = "w-full bg-background border border-accent rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all"
  placeholder = { t.contact.form.placeholderEmail }
    />
              </div >

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">{t.contact.form.message}</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  className="w-full bg-background border border-accent rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/10 transition-all resize-none"
                  placeholder={t.contact.form.placeholderMessage}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-foreground text-background rounded-xl py-4 text-sm font-semibold hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
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
            </form >
          </motion.div >
        </div >
      </div >
    </section >
  );
}
