import { FiGithub } from "react-icons/fi";
import { projects } from "../config/ProjectConfig";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

function Projects() {
  return (
    <>
      <section
        id="projects"
        className="bg-[#101010]/40 min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 w-full backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-white md:text-5xl font-bold mb-4">
              Featured <span className="text-[#ee00ff]">Projects</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              A showcase of my best work in Software development
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full flex flex-col gap-6 rounded-xl border  bg-[#141414]  border-[#ee00ff]/20 hover:border-[#ee00ff] transition-all duration-300 overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] to-transparent opacity-60" />
                  </div>
                  <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols[1fr_auto] [.border-b]:pb-6">
                    <div className="text-[#f5f5f5] leading-none font-bold">
                      {project.name + "- " + project.description}
                    </div>
                    <p className="text-[#a0a0a0]">{project.details}</p>
                  </div>
                  <div className="px-6 last:pb-6">
                    <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                      {project.tag?.map((item, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center justify-center rounded-md  px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[#ee00ff] focus-visible:ring-[#ee00ff]/50 focus-visible:ring-[3px]  transition-all bg-[#ee00ff]/10 text-[#ee00ff]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none border disabled:opacity-50 hover:bg-[#ee00ff] hover:text-[#ffffff] border-[#ee00ff] bg-[#0a0a0a] duration-300 text-[#ee00ff] h-8 px-3">
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex gap-1.5 items-center justify-center w-full h-full"
                        >
                          <FiGithub className="w-4 h-4" />
                          Code
                        </a>
                      </button>
                      <button className="inline-flex items-center justify-center h-8 px-3 bg-[#ee00ff] rounded-md text-[#ffffff] text-sm font-medium whitespace-nowrap transition-all hover:bg-[#ee00ff]/90 duration-300">
                        <a
                          href={project.links.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex  justify-center items-center gap-1.5 w-full h-full"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
