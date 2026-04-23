import { motion } from "framer-motion";
import {  Code2, Palette,  } from "lucide-react";

const AboutSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div {...fadeIn} className="flex items-center gap-2 mb-8">
          <div className="h-[1px] w-12 bg-blue-500"></div>
          <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
            About Me
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* Text Content */}
          <motion.div {...fadeIn} className="md:col-span-7 space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Designing with purpose, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Developing with precision.
              </span>
            </h2>

            <p className="text-lg text-slate-400 leading-relaxed">
              I am a{" "}
              <span className="text-white font-medium">
                Front-End Developer and UI/UX Designer
              </span>{" "}
              who bridges the gap between aesthetic design and functional code.
              Specializing in{" "}
              <span className="text-white">
                React, TypeScript, and Tailwind CSS
              </span>
              , I thrive on transforming complex requirements into intuitive
              digital experiences.
            </p>

            <p className="text-lg text-slate-400 leading-relaxed">
              With experience building robust systems like{" "}
              <span className="text-blue-400 italic">
                booking and order management platforms
              </span>
              , I focus on clean architecture and user-centric problem solving.
              I am a lifelong learner dedicated to building scalable,
              high-performance web applications.
            </p>

            {/* Quick Info Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                "Problem Solver",
                "UI/UX Enthusiast",
                "Clean Code",
                "Responsive Design",
              ].map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                >
                  {trait}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Side Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-5 grid grid-cols-1 gap-4"
          >
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                <Code2 className="text-blue-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">Development</h3>
              <p className="text-sm text-slate-400">
                Building scalable apps with React, TS, and modern state
                management.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm hover:bg-white/[0.05] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                <Palette className="text-purple-400" size={24} />
              </div>
              <h3 className="text-white font-semibold mb-2">UI/UX Design</h3>
              <p className="text-sm text-slate-400">
                Crafting high-fidelity prototypes in Figma with a focus on user
                flow.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
