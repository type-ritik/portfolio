function ProjectContainer() {
  return (
    <>
      <h1>Projects Section</h1>
      <div className="w-full flex bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
        <div className="flex flex-col gap-4">
          <h2>
            Project 1: ChatSys - Real-time Chat System{" "}
            <span>
              [
              <a
                href="https://type-ritik-chat-sys.onrender.com/"
                className="text-blue-600 mx-5!"
              >
                LIVE
              </a>
              ]
            </span>
          </h2>
          <p className="text-md! bg-gray-50 p-2! rounded">
            A production-deployed real-time chat system build to understand
            service separation, state management, and backend reliability.
          </p>
          <h3>Architecture:</h3>
          <ul>
            <li>Backend service (API + Auth)</li>
            <li>Client application</li>
            <li>PostgreSQL database</li>
            <li>Redis for caching / real-time coordination</li>
            <li>All services deployed independently on Render</li>
          </ul>
          <h3>Key Engineering Decisions:</h3>
          <ul>
            <li>Chose service separation to avoid tight coupling</li>
            <li>Used Redis to handle shared state and reduce DB load</li>
            <li>
              Implemented JWT-based authentication to protect private messages
            </li>
          </ul>
          <h3>Challenges & Learnings</h3>
          <ul>
            <li>Encountered issues that only appeared after deployment</li>
            <li>
              Learned how environment configuration impacts system behavior
            </li>
            <li>
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
