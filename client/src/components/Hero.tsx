import { Mail, Download } from "lucide-react";
import { name } from "../config/HeaderConfig";
import { motion } from "motion/react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

function Hero() {
  const handleGithub = () => {
    window.open("https://github.com/type-ritik");
  };

  const handleLinkedIn = () => {
    window.open("https://linkedin.com/in/type-ritik");
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handleDownloadResume = () => {
    const pdfUrl =
      "https://docs.google.com/document/d/1TyOJP9FUHVBdjVrc-EbASvp8LV2tafx6piMeODJHxIU/edit?usp=sharing";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "type_ritik.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // const bio: string =
  //   "Backend-focused BCA student building production-ready systems, with emphasis on API design, authentication, and system behavior in real deployments.";

  return (
    <>
      <section
        id="home"
        className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden pt-16 text-white"
      >
        {/* Background Wrapper */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0 bg-[#0a0a0a]/75" />
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(238,0,255,0.15)_0%,rgba(238,0,255,0.05)_40%,transparent_70%)] blur-3xl
          "
          />
        </div>

        {/* Fixed content wrapper */}
        <div className="container mx-auto  px-4 z-10 w-full flex flex-col justify-center items-center">
          <div className="max-w-3xl mx-auto  text-center flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                className="inline-block text-xs font-semibold tracking-widest text-[#ee00ff] uppercase mb-5  border border-[#ee00ff]/30 px-4  py-1.5  rounded-full"
                initial={{ opacity: 0, scale: 0.0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Nothing beats like heart
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6  leading-tight">
                Hi, I&apos;m{" "}
                <span
                  className="text-[#ee00ff]"
                  style={{
                    textShadow: "0 0 40px #ee00ff50",
                  }}
                >
                  {name.split(" ")[0]}
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-[#a0a0a0] mb-4 ">
                Software Developer • AI Engineer • Data Scientist • Data Analyst
              </p>
              <p className="text-base text-[#a0a0a0] mb-10 max-w-xl mx-auto ">
                A tech enthusiast building innovative solutions—from intelligent
                AI systems to scalable web applications. Passionate about
                solving real-world problems through code, data, and innovation.
              </p>
            </motion.div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-4 justify-center mb-10"
            >
              <button
                onClick={scrollToContact}
                className="gap-2 px-2.5 flex justify-center items-center rounded-md py-1.5 text-sm cursor-pointer font-semibold bg-[#ee00ff] hover:bg-[#ee00ff]/90"
              >
                <Mail className="w-4 h-4" />
                Get in Touch
              </button>

              <button
                className="gap-2 px-2.5 rounded-md flex  justify-center items-center py-1.5 text-sm cursor-pointer font-semibold border border-[#ee00ff] text-[#ee00ff] hover:bg-[#ee00ff] hover:text-[#0a0a0a]"
                onClick={handleDownloadResume}
              >
                <Download className="w-4 h-4" />
                Download CV
              </button>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex gap-6 justify-center text-[#a0a0a0]"
            >
              <FiGithub
                className="w-6 h-6 cursor-pointer"
                onClick={handleGithub}
              />
              <FiLinkedin
                className="w-6 h-6 cursor-pointer"
                onClick={handleLinkedIn}
              />
              <Mail className="w-6 h-6 cursor-pointer" />
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          <div className="w-6 h-10 border-2 border-[#ee00ff] rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-[#ee00ff] rounded-full" />
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default Hero;
