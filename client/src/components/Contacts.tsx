import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Contacts() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ritik.vw98@gmail.com",
      href: "mailto:ritik.vw98@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+919219878060",
      href: "tel:+919219878060",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Barra 8 Kanpur, UP, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/type-ritik",
      username: "type-ritik",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/type-ritik/",
      username: "type-ritik",
    },
    {
      icon: Mail,
      label: "Leetcode",
      href: "https://leetcode.com/u/type_ritik/",
      username: "type_ritik",
    },
  ];

  return (
    <>
      <section
        id="contacts"
        className="py-20 bg-[#0a0a0a]/80 backdrop-blur-sm w-full"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#f5f5f5]">
              Get In <span className="text-[#ee00ff]">Touch</span>
            </h2>
            <p className="text-[#a0a0a0] max-w-2xl mx-auto">
              Let&apos;s discuss your next project or opportunity. I'm always
              open to new challenges!
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#141414] text-[#a0a0a0] flex flex-col gap-6 rounded-xl border border-[#ee00ff]/40">
                <div className="p-6 text-center grid auto-rows-min grid-rows-[auto_auto] items-center gap-1.5 px-6 pt-6">
                  <h3 className="font-bold mb-2 leading-none text-[#f5f5f5]">
                    Send a Message
                  </h3>
                  <div className="text-sm px-6 text-[#a0a0a0]">
                    <form className="space-y-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                          className="focus-visible:border-[#ee00ff]  text-[#f5f5f5] focus-visible:ring-[#ee00ff]/50 placeholder:text-[#a0a0a0] selection:bg-[#ee00ff] selection:text-[#ee00ff]/40  border-transparent flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-[#1a1a1a] transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          className="focus-visible:border-[#ee00ff]  text-[#f5f5f5] focus-visible:ring-[#ee00ff]/50 placeholder:text-[#a0a0a0] selection:bg-[#ee00ff] selection:text-[#ee00ff]/40  border-transparent flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-[#1a1a1a] transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          name="subject"
                          id="subject"
                          placeholder="Subject"
                          className="focus-visible:border-[#ee00ff]  text-[#f5f5f5] focus-visible:ring-[#ee00ff]/50 placeholder:text-[#a0a0a0] selection:bg-[#ee00ff] selection:text-[#ee00ff]/40  border-transparent flex h-9 w-full min-w-0 rounded-md border px-3 py-1 text-base bg-[#1a1a1a] transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          required
                        />
                      </div>
                      <div>
                        <textarea
                          name="message"
                          id="messages"
                          placeholder="Your message"
                          className="resize-none text-[#f5f5f5] border-transparent placeholder:text-[#a0a0a0] focus-visible:border-[#ee00ff] focus-visible:ring-[#ee00ff]/50 flex field-sizing-content min-h-[calc(3*1.5rem)] w-full rounded-md border bg-[#1a1a1a] px-3 py-2 text-base transition-[color, box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-[#ee00ff] w-full hover:bg-[#ff00ff] text-white  outline-none py-2 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-[#141414] text-[#a0a0a0] flex flex-col gap-6 rounded-xl border border-[#ee00ff]/40">
                <div className="p-6 text-center grid auto-rows-min grid-rows-[auto_auto] items-center gap-1.5 px-6 pt-6">
                  <h3 className="font-bold mb-2 leading-none text-[#f5f5f5]">
                    Contact Information
                  </h3>
                  <div className="text-sm px-6 text-[#a0a0a0]">
                    {contactInfo.map((info, index) => (
                      <a
                        key={index}
                        href={info.href}
                        className="flex items-center gap-3 rounded-lg p-3 hover:bg-[#ee00ff]/10 transition-colors group"
                      >
                        <div className="p-2 bg-[#ee00ff]/10 rounded-lg group-hover:bg-[#ee00ff]/20 transition-colors">
                          <info.icon className="w-5 h-5 text-[#ee00ff]" />
                        </div>
                        <div>
                          <div className="text-sm text-left text-[#a0a0a0]">
                            {info.label}
                          </div>
                          <div className="font-medium text-[#f5f5f5]">
                            {info.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-[#141414] text-[#a0a0a0] flex flex-col gap-6 rounded-xl border border-[#ee00ff]/40">
                <div className="p-6 text-center grid auto-rows-min grid-rows-[auto_auto] items-center gap-1.5 px-6 pt-6">
                  <h3 className="font-bold mb-2 leading-none text-[#f5f5f5]">
                    Connect With Me
                  </h3>
                  <div className="text-sm px-6 text-[#a0a0a0]">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-[#ee00ff]/10 transition-colors group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-[#ee00ff]/10 rounded-lg group-hover:bg-[#ee00ff]/20 transition-colors">
                            <social.icon className="w-5 h-5 text-[#ee00ff]" />
                          </div>
                          <div>
                            <div className="font-medium text-left text-[#f5f5f5]">
                              {social.label}
                            </div>
                            <div className="text-sm text-[#a0a0a0]">
                              {social.username}
                            </div>
                          </div>
                        </div>
                        <div className="text-[#ee00ff] opacity-0 group-hover:opacity-100 transition-opacity">
                          →
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
