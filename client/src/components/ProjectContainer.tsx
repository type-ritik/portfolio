import { projects } from "../config/ProjectConfig";

function ProjectContainer() {
  return (
    <div
      id="projects"
      className="w-full h-screen items-center flex justify-center my-20!"
    >
      <div className="w-full bg-dark-purple-blur p-8! rounded-2xl border border-light-yellow text-white">
        <h1 className="text-4xl text-center text-light-yellow font-bold mb-12!">
          Projects
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              className="group bg-[#1a1238] border border-light-purple rounded-2xl overflow-hidden hover:border-light-yellow transition duration-300 hover:scale-[1.02]"
            >
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* CONTENT */}
              <div className="p-5!">
                {/* TITLE */}
                <h2 className="text-xl font-semibold mb-1!">{item.name}</h2>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-300 mb-4!">
                  {item.description}
                </p>

                {/* DETAILS */}
                <ul className="text-sm text-gray-200 space-y-2 mb-5! list-disc list-inside">
                  {item.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>

                {/* ACTION BUTTONS */}
                <div className="flex justify-between">
                  <a
                    href={item.links.liveDemo}
                    target="_blank"
                    className="px-3! py-1! text-sm border border-light-yellow rounded hover:bg-light-yellow hover:text-black transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href={item.links.github}
                    target="_blank"
                    className="px-3! py-1! text-sm border border-light-purple rounded hover:border-light-yellow transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectContainer;
