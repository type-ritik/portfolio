import { projects } from "../config/ProjectConfig";

function ProjectContainer() {
  return (
    <>
      <div className="w-full h-screen flex items-center">
        <div
          id="projects"
          className="w-full bg-dark-purple-blur  p-4! rounded-2xl border border-light-yellow flex justify-center flex-col text-white"
        >
          <h1 className="text-center text-light-yellow">Projects Section</h1>
          <div className="w-full h-full grid grid-cols-3 gap-4">
            {projects.map((item, index) => (
              <div
                className="w-full h-full border border-light-purple flex flex-col justify-center items-center rounded-2xl"
                key={index}
              >
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-300">{item.description}</p>
                <img
                  src={item.image}
                  alt="ChatSys"
                  className="w-[90%] rounded border border-light-purple m-2!"
                />
                <ul className="text-base text-gray-200 w-[90%]">
                  {item.details.map((detail, idx) => (
                    <li className="my-1!" key={idx}>
                      {" "}
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="flex w-[90%] justify-between text-sm my-2!">
                  {Object.entries(item.links).map(([key, value], idx) => (
                    <a href={value} className="text-blue-700" key={idx}>
                      {key === "liveDemo" ? "Live Demo" : "GitHub"}
                    </a>
                  ))}
                </div>
              </div>
            ))}

            {/* <h3>Links</h3>
            <ul>
              <li className="font-medium ">
              </li>
              <li className="font-medium">

              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
