import { skills } from "../config/SkillsConfig";
import { motion } from "motion/react";

function Skills() {
  return (
    <>
      <section
        id="skills"
        className="w-full py-20 bg-[#101010]/80 backdrop-blur-sm text-[#f5f5f5]"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Skills & <span className="text-[#ee00ff]">Expertise</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              A comprehensive toolkit spanning software development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="h-full bg-[#141414] gap-6 flex flex-col rounded-xl border border-[#ee00ff]/20 hover:border-[#ee00ff] transition-all duration-300 py-6">
                  <div className="items-start gap-1.5 px-6">
                    <div className="leading-none text-lg">
                      {category.category}
                    </div>
                  </div>
                  <div className="px-6">
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, index) => (
                        <div
                          key={index}
                          className="inline-flex items-center justify-center rounded-md  px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-[#ee00ff] focus-visible:ring-[#ee00ff]/50 focus-visible:ring-[3px]  transition-all bg-[#ee00ff]/10 text-[#ee00ff] hover:bg-[#ee00ff] hover:text-[#f5f5f5]"
                        >
                          {skill.name}
                        </div>
                      ))}
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

export default Skills;
