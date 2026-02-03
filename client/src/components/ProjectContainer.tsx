function ProjectContainer() {
  return (
    <>
      <h1>Projects Section</h1>
      <div className="w-full flex bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
        <div className="flex flex-col gap-4">
          <h2 className="not-md:text-3xl!">
            Project 1: ChatSys - Real-time Chat System{" "}
            <span className="not-md:text-2xl!">
              [
              <a
                href="https://type-ritik-chat-sys.onrender.com/"
                className="text-blue-600 mx-5! not-md:text-xl"
              >
                LIVE
              </a>
              ]
            </span>
          </h2>
          <p className="text-md! not-md:text-base! bg-gray-50 p-2! rounded">
            A production-deployed real-time chat system build to understand
            service separation, state management, and backend reliability.
          </p>
          <h3>Architecture:</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Backend service (API + Auth)</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Client application</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">PostgreSQL database</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Redis for caching / real-time coordination</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">All services deployed independently on Render</li>
          </ul>
          <h3>Key Engineering Decisions:</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Chose service separation to avoid tight coupling</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Used Redis to handle shared state and reduce DB load</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Implemented JWT-based authentication to protect private messages
            </li>
          </ul>
          <h3>Challenges & Learnings</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Encountered issues that only appeared after deployment</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Learned how environment configuration impacts system behavior
            </li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Understood why production debugging is different from local
              development
            </li>
          </ul>
          <h3>LIinks</h3>
          <ul>
            <li className="font-medium ">
              <a
                href="https://type-ritik-chat-sys.onrender.com/"
                className="text-blue-700"
              >
                Live Demo
              </a>
            </li>
            <li className="font-medium">
              <a
                className="text-blue-700"
                href="https://github.com/type-ritik/chat-sys"
              >
                GitHub Repository
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProjectContainer;
