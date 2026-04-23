import { motion } from "framer-motion";
import { ExternalLink, Layers } from "lucide-react";
import { Icons } from "./Icons";
import Etutor from "@/assets/Etutor.png";
import { Link } from "react-router";
import { SiBehance } from "react-icons/si";
import HomelessIMG from "@/assets/Purple App Phone Mockup Sales Marketing Presentation.png"
import OPOM from "@/assets/photo_2026-04-23_16-36-12.jpg"
const projects = [
  {
    title: "E-Tutor Platform Design",
    description:
      "A user-centered UI/UX design for an e-learning platform focused on improving course navigation, student engagement, and overall learning experience through intuitive layouts and clear user flows.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    link: "https://www.figma.com/proto/4cUIOffAxVO7NmyrYrTJg1/Project?node-id=9-240&viewport=1349%2C318%2C0.16&t=jRwAy76bcVjLJpk2-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=9%3A240&page-id=0%3A1",
    Behance:
      "https://www.behance.net/gallery/247772831/Proton-E-Tutoring-System-UXUI-Case-Study",
    image: Etutor,
  },
  {
    title: "The Haven Hub – Homeless Support App",
    description:
      "Haven Hub is a mobile app that helps homeless individuals quickly find shelters, food, and support. The design focuses on simplicity and easy access to help.",
    tech: ["Axure RP", "Figma","UI/UX Design","Prototyping"],
    link: "https://yxn5au.axshare.com/?id=eejhjj&g=14",
    Behance:
      "https://www.behance.net/gallery/248103959/The-Haven-Hub-Homeless-Support-App",
    image:
       HomelessIMG,
    color: "from-purple-500 to-fuchsia-500",
  },
  {
    title: "OPOM",
    description:
      "One Project One Month (OPOM) is a platform where developers and designers work together to build one real project in one month. It helps turn ideas into finished products with deadlines, teamwork, and real-world experience for your portfolio.",
    tech: ["Figma", "UI/UX Design", "Wireframing", "Prototyping"],
    link: "https://www.one-project-one-month.com/ ",
    
    image:
      OPOM,
    color: "from-emerald-500 to-cyan-500",
  },
];

export default function ProjectSection() {
  return (
    <section  id="projects" lassName="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 text-cyan-400 font-bold tracking-widest uppercase text-sm mb-3"
            >
              <Layers size={16} /> My Creative Works
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg">
            A collection of digital products where I combine technical logic
            with user-centric design.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Background Glow */}
              <div
                className={`absolute -inset-2 bg-gradient-to-r ${project.color} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-20 transition duration-500`}
              />

              {/* Card Container */}
              <div className="relative h-full bg-[#0f111a] border border-white/10 rounded-[1.8rem] overflow-hidden flex flex-col">
                {/* Project Image Container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f111a] via-transparent to-transparent" />

                  {/* Floating Tech Badges on Image */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] text-white font-bold uppercase tracking-wider"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack List */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium text-slate-500"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4">
                    <Link
                      target="_blank"
                      to={project.link}
                      className="flex items-center gap-2 text-white font-bold text-sm hover:text-cyan-400 transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </Link>
                    {project.github && (
                      <Link
                        target="_blank"
                        to={project.github}
                        className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-white transition-colors"
                      >
                        <Icons.Github className="size-4" /> Code
                      </Link>
                    )}
                    {project.Behance && (
                      <Link
                        target="_Blant"
                        to={project.Behance}
                        className="flex items-center gap-2 text-slate-400 font-bold text-sm hover:text-white transition-colors"
                      >
                        <SiBehance className="size-5" /> View Case Study
                      </Link>
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
