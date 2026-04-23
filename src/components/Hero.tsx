import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/assets/ui/button";
import { Download, Zap } from "lucide-react";
import photo from "../assets/photo.jpg";
import { Icons } from "./Icons";
import { SiBehance, SiReact } from "react-icons/si";
import { Link } from "react-router";

const roles = ["UI/UX Designer", "Frontend Developer"];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = () => {
    // 1. Point to the file in your public folder
    const fileUrl = "/WaiKyawMyo_CV.pdf";

    // 2. Create a hidden anchor element
    const link = document.createElement("a");
    link.href = fileUrl;

    // 3. Set the name you want the file to have when downloaded
    link.setAttribute("download", "WaiKyawMyo_CV.pdf");

    // 4. Append to body, click it, and remove it
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      className="pb-8 md:pd-0 relative min-h-screen flex items-center justify-center mt-2 pt-20 overflow-hidden "
      id=""
    >
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT SIDE: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400 font-medium tracking-widest uppercase text-sm mb-2">
              <Zap size={16} className="fill-current" />
              Available for new opportunities
            </div>
            <h1 className="text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Wai Kyaw{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Myo
              </span>
            </h1>

            <div className="h-[50px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[index]}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-3xl md:text-5xl font-bold text-slate-200"
                >
                  {roles[index]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            I build{" "}
            <span className="text-white">scalable web applications</span> and
            <span className="text-white"> pixel-perfect designs</span>.
            Specializing in React, TypeScript, and the modern web ecosystem.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={handleDownloadCV} // Trigger the function here
              size="lg"
              className="rounded-2xl px-8 bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:scale-105 transition-transform font-bold border-none shadow-lg shadow-blue-500/20"
            >
              Download CV <Download className="ml-2 h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl border-white/10 bg-white/5 text-white "
              >
                <Link target="_blank" to={"https://github.com/WaiKyawMyo"}>
                  <Icons.Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl border-white/10 bg-white/5 text-white "
              >
                <Link target="_blank" to={"https://www.behance.net/waimyo5"}>
                  <SiBehance className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-2xl border-white/10 bg-white/5 text-white "
              >
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/wai-kyaw-myo-b6ab84318/"}
                >
                  <Icons.LinkedIN className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: COLORFUL CARD (No Black & White) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* 3D Tilt Wrapper */}
          <motion.div
            whileHover={{ rotateY: -15, rotateX: 5 }}
            className="relative group transition-all duration-500"
            style={{ perspective: "1000px" }}
          >
            {/* VIBRANT GRADIENT BORDER/GLOW */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-purple-500 rounded-[35px] blur-md opacity-40 group-hover:opacity-100 transition duration-500" />

            {/* THE MAIN CARD */}
            <div className="relative bg-[#0a0a0a] rounded-[30px] p-2 overflow-hidden w-[320px] h-[440px] md:w-[380px] md:h-[500px]">
              {/* Profile Image (Color is preserved, no grayscale) */}
              <div className="relative h-full w-full rounded-[22px] overflow-hidden">
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* BOTTOM COLORFUL OVERLAY */}
                <div className="absolute bottom-0 w-full p-8 bg-gradient-to-t from-blue-900/90 via-black/40 to-transparent backdrop-blur-[2px]">
                  <div className="flex justify-between items-center">
                    <div className="space-y-1">
                      <p className="text-blue-300 text-[10px] uppercase tracking-[0.2em] font-black">
                        Experience
                      </p>
                      <p className="text-white text-xl font-bold">2+ Years</p>
                    </div>
                    <div className="flex gap-2">
                      <div className="p-2 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                        <SiReact className="h-6 w-6 text-blue-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FLOATING FLOATING BADGE (TOP LEFT) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-gradient-to-br from-blue-600 to-cyan-500 p-[1px] rounded-2xl shadow-[0_10px_30px_rgba(37,99,235,0.3)]"
            >
              <div className="bg-[#0a0a0a] px-5 py-3 rounded-2xl flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_#22c55e]" />
                <span className="text-white text-sm font-bold">
                  Available to Hire
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
