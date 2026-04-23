import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/assets/ui/button";
import { Input } from "@/assets/ui/input";
import { Textarea } from "@/assets/ui/textarea";
import { Label } from "@/assets/ui/label";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // 1. GET YOUR ID: Go to https://formspree.io/, create a form, and copy the ID
    const FORMSPREE_ID = "mbdqqrak"; // Example: "mjvkaora"

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    if (FORMSPREE_ID === "YOUR_FORMSPREE_ID_HERE") {
      // Just for demo if you haven't put your ID yet
      console.log("Formspree ID not set. Message that would be sent:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setError("Oops! There was a problem sending your message.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative  ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* LEFT SIDE: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 text-blue-400 font-bold tracking-widest uppercase text-sm mb-3">
                <MessageSquare size={16} /> Get In Touch
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
                Let's start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  new project
                </span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-md leading-relaxed">
                I'm always open to discussing new projects, creative ideas or
                opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                    Email Me
                  </p>
                  <p className="text-white font-medium">
                    waikyawmyo4u@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                    Call Me
                  </p>
                  <p className="text-white font-medium">+95 9 799749411</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-bold tracking-wider">
                    Location
                  </p>
                  <p className="text-white font-medium">Bangkok, Thailand</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl rounded-[3rem] -z-10" />

            <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 p-8 md:p-10 rounded-[2.5rem] shadow-2xl min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-zinc-400 ml-1">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          required
                          placeholder="John Doe"
                          className="bg-zinc-950 border-zinc-800 rounded-xl py-6 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-zinc-400 ml-1">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="john@example.com"
                          className="bg-zinc-950 border-zinc-800 rounded-xl py-6 focus:ring-blue-500/20 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-zinc-400 ml-1">
                        Subject
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        required
                        placeholder="Project Inquiry"
                        className="bg-zinc-950 border-zinc-800 rounded-xl py-6 focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-zinc-400 ml-1">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="How can I help you?"
                        className="bg-zinc-950 border-zinc-800 rounded-xl min-h-[150px] focus:ring-blue-500/20 focus:border-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-7 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-blue-500/20 border-none disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}{" "}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6"
                  >
                    <div className="flex justify-center">
                      <div className="p-6 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <CheckCircle2 size={64} className="text-blue-400" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-3xl font-bold text-white">
                        Message Sent!
                      </h3>
                      <p className="text-zinc-400">
                        Thank you for your message. I'll get back to you as soon
                        as possible.
                      </p>
                    </div>
                    <div className="pt-4 p-6 bg-zinc-950/50 rounded-2xl border border-zinc-800">
                      <p className="text-sm text-zinc-500 uppercase font-black tracking-widest mb-2">
                        Direct Contact
                      </p>
                      <p className="text-xl font-bold text-blue-400">
                        waikyawmyo4u@gmail.com
                      </p>
                    </div>
                    <Button
                      onClick={() => setIsSubmitted(false)}
                      variant="ghost"
                      className="text-zinc-400 "
                    >
                      Send another message
                    </Button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
