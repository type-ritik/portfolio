export const AboutContainer = () => {
  return (
    <div className="w-full h-screen" id="about">
      <div className="w-full h-3/5 p-4! border bg-dark-purple-blur border-light-yellow rounded-2xl">
        <h1 className="text-light-yellow flex justify-center items-center">
          About Me
        </h1>
        <div className="flex">
          <div className="w-1/2 h-full text-balance text-white">
            <ul className="">
              <li className="text-md! not-md:text-sm! mt-4!">
                I am a Backend developer with a strong passion for building
                scalable and reliable applications. I have experience in
                building backend web projects, and I am always eager to learn
                new technologies and improve my skills.
              </li>
              <li className="text-md! not-md:text-sm! mt-4!">
                {" "}
                In my free time, I enjoy questioning decision, exploring new
                approaches, and staying up-to-date with the latest trends in
                technology.
              </li>
              <li className="text-md! not-md:text-sm! mt-4!">
                {" "}
                I am currently seeking opportunities to work on challenging
                projects that allow me to grow as a developer and make a
                positive impact in the tech community.
              </li>
            </ul>
          </div>
          <div className="w-1/2 justify-center flex items-center">
            Hello World
          </div>
        </div>
      </div>
    </div>
  );
};
