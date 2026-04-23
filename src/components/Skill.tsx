import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiFigma,
  SiFramer,
  SiGit,
  SiVite,
  SiJavascript,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <SiReact className="text-[#61DAFB]" />,
    level: "Advanced",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300" />,
    level: "Advanced",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-[#3178C6]" />,
    level: "Intermediate",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss className="text-[#06B6D4]" />,
    level: "Advanced",
  },
  { name: "Figma", icon: <SiFigma className="" />, level: "Advanced" },

  {
    name: "Framer Motion",
    icon: <SiFramer className="text-[#0055FF]" />,
    level: "Basic",
  },
  {
    name: "Git",
    icon: <SiGit className="text-[#F05032]" />,
    level: "Intermediate",
  },
  {
    name: "Vite",
    icon: <SiVite className="text-[#646CFF]" />,
    level: "Advanced",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export default function SkillSection() {
  return (
    <section id="skills" className="relative  py-24 overflow-hidden">
      {/* Background Animated Blobs */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Tech{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Stack
            </span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto">
            The modern tools I use to bring ideas to life.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
            >
              {/* Card Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 flex flex-col items-center gap-4">
                <div className="text-4xl filter drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                  {skill.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-white font-medium">{skill.name}</h3>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">
                    {skill.level}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
