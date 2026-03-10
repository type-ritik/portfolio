export const AboutContainer = () => {
  return (
    <div
      className="w-full h-screen flex justify-center items-center my-20!"
      id="about"
    >
      <div className="w-full bg-dark-purple-blur border border-light-yellow rounded-2xl p-8! text-white">
        {/* TITLE */}
        <h1 className="text-4xl text-light-yellow text-center font-bold mb-10!">
          About Me
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT SIDE TEXT */}
          <div className="space-y-5 text-gray-200">
            <p className="text-lg">
              I am a backend developer focused on building reliable APIs,
              consistent data systems, and scalable backend architectures.
            </p>

            <p>
              My work focuses on designing systems with clear domain models,
              transactional consistency, and efficient query patterns. I enjoy
              questioning system behavior and exploring better ways to structure
              backend logic.
            </p>

            <p>
              Recently I have been building systems using Node.js, GraphQL,
              PostgreSQL, and Redis to create real-time applications and
              scalable APIs.
            </p>

            <p>
              I am currently looking for opportunities where I can contribute to
              real backend systems while continuing to grow as a software
              engineer.
            </p>
          </div>

          {/* RIGHT SIDE INFO */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-6! flex flex-col justify-center space-y-4">
            <div>
              <span className="text-light-yellow font-semibold">Focus</span>
              <p className="text-gray-300 text-sm">Backend Engineering</p>
            </div>

            <div>
              <span className="text-light-yellow font-semibold">
                Core Stack
              </span>
              <p className="text-gray-300 text-sm">
                Node.js · GraphQL · PostgreSQL · Redis
              </p>
            </div>

            <div>
              <span className="text-light-yellow font-semibold">Interests</span>
              <p className="text-gray-300 text-sm">
                System Design · Data Consistency · Real-Time Systems
              </p>
            </div>

            <div>
              <span className="text-light-yellow font-semibold">Learning</span>
              <p className="text-gray-300 text-sm">
                Distributed Systems · Backend Scalability
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
