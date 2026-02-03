function SkillContainer() {
  return (
    <>
        <h1>Skills</h1>
      <div className="w-full flex bg-[#a7d0fc] p-4! not-md:flex-col not-md:gap-6! rounded-sm justify-between my-6!">
        <div>
          <h3 className="m-4!">Backend Engineering</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Designed REST and GraphQL APIs with authentication and role-based
              access
            </li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Modeled real-world entities and invariants to maintain data
              integrity
            </li>
          </ul>
          <br />
          <h3 className="m-4!">System Design & Deployment</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Deployed independently running backend, client, database, and
              Redis services
            </li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">
              Managed environment variables, service networking, and production
              failures
            </li>
          </ul>
          <br />
          <h3 className="m-4!">Data & State Management</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">PostgreSQL schema design with relational integrity</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Redis for caching and real-time coordination</li>
          </ul>
          <h3 className="m-4!">Engineering Practices</h3>
          <ul>
            <li className="m-1! p-1! text-md! not-md:text-sm!">JWT-based authentication and authorization</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Debugging deployment-only failures</li>
            <li className="m-1! p-1! text-md! not-md:text-sm!">Version control with Git and structured commits</li>
          </ul>
        </div>
        <div className="rounded-sm">
            <img src="https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_user_personalization&w=740&q=80" alt="" className="rounded-sm" />
        </div>
      </div>
    </>
  );
}

export default SkillContainer;
