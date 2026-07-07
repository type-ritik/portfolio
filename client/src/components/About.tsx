import { Code2 } from "lucide-react";
import { motion } from "motion/react";
const About = () => {
  return (
    <>
      <section
        id="about"
        className="w-full text-white py-20 relative bg-[#0a0a0a]/40 backdrop-blur-sm"
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
              About <span className="text-[#ee00ff]">Me</span>
            </h2>
            <p className="max-w-2xl mx-auto text-[#a0a0a0]">
             A versatile software engineer focused on architecting practical
                digital services, scalable products, and innovative systems.
                Passionate about solving real-world challenges through
                data-driven code, leveraging intelligent technology to empower
                users and enable data-informed decision-making.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1 * 0.1 }}
            >
              <div className="h-60 bg-[#141414] border border-[#ee00ff]/20 hover:border-[#ee00ff] transition-all duration-300 group w-60 rounded-xl">
                <div className="p-6 text-center">
                  <div className="mb-4 inline-block p-4 bg-[#ee00ff]/10 rounded-lg group-hover:bg-[#ee00ff]/20 transition-colors">
                    <Code2 className="w-8 h-8 text-[#ee00ff]" />
                  </div>
                  <h3 className="font-bold mb-2">Software Engineer</h3>
                  <p className="text-sm text-[#a0a0a0]">
                    Building robust and scalable applications with modern tech
                    stacks
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
