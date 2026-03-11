function ResumeContactContainer() {
  return (
    <div
      className="w-full h-screen items-center flex justify-center my-20!"
      id="contact"
    >
      <div className="w-full bg-dark-purple-blur border border-light-yellow rounded-2xl p-8! text-white">
        {/* TITLE */}
        <h1 className="text-5xl! not-md:text-3xl! text-center text-light-yellow font-bold mb-8!">
          Contact
        </h1>

        {/* STATUS MESSAGE */}
        <div className="flex justify-center mb-8!">
          <p className="text-gray-200 bg-[#1a1238] border border-light-purple px-6! py-3! rounded-lg text-center">
            Currently seeking{" "}
            <span className="text-light-yellow font-semibold">
              Backend / Software Engineering Internship
            </span>{" "}
            opportunities.
          </p>
        </div>

        {/* CONTACT GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* RESUME */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! text-center hover:scale-[1.03] transition">
            <h3 className="text-lg! font-semibold mb-2!">Resume</h3>
            <a
              href="https://rose-edythe-36.tiiny.site"
              target="_blank"
              className="text-light-yellow font-semibold hover:underline"
            >
              View Resume
            </a>
          </div>

          {/* EMAIL */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! text-center hover:scale-[1.03] transition">
            <h3 className="text-lg! font-semibold mb-2!">Email</h3>
            <a
              href="mailto:ritik.vw98@gmail.com"
              className="text-light-yellow font-semibold hover:underline"
            >
              ritik.vw98@gmail.com
            </a>
          </div>

          {/* GITHUB */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! text-center hover:scale-[1.03] transition">
            <h3 className="text-lg! font-semibold mb-2!">GitHub</h3>
            <a
              href="https://github.com/type-ritik"
              target="_blank"
              className="text-light-yellow font-semibold hover:underline"
            >
              github.com/type-ritik
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! text-center hover:scale-[1.03] transition">
            <h3 className="text-lg! font-semibold mb-2!">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/type-ritik/"
              target="_blank"
              className="text-light-yellow font-semibold hover:underline"
            >
              Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeContactContainer;
