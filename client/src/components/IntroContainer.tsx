import { name } from "../config/HeaderConfig";

function IntroContainer() {
  const handleGithub = () => {
    window.open("https://github.com/type-ritik");
  };

  // const bio: string =
  //   "Backend-focused BCA student building production-ready systems, with emphasis on API design, authentication, and system behavior in real deployments.";

  return (
    <div className="flex w-full -mt-20! h-screen justify-center items-center">
      <div className="w-full h-80 flex bg-dark-purple-blur not-md:flex-col rounded-2xl border border-light-yellow! justify-center">
        <div className="w-3/5 flex flex-col justify-center not-md:w-full gap-4">
          <h1 className="text-6xl! not-md:text-6xl! gap-3 justify-center items-center leading-tight font-bold flex ">
            <span className="text-light-yellow">Hi, I&apos;m</span>{" "}
            <span className="name text-dark-orange">{name}</span>
          </h1>
          <div className="flex justify-between text-xl text-white gap-0">
            BCA Student<span className="text-dark-orange"> - </span>Backend
            Developer<span className="text-dark-orange"> - </span>System Thinker
            <span className="text-dark-orange"> - </span>Problem Solver
          </div>
          {/* <h2 className="not-md:text-2xl! font-semibold">{bio}</h2>
        <p className="text-md! bg-gray-50 p-2! rounded">
          I design, build, and deploy full-stack systems
        </p> */}
          <div className="flex justify-center">
            <div className="btn-container not-md:w-full not-md:pb-2! w-4/5 flex justify-between items-center my-4!">
              <button className="w-2/5 rounded-full cursor-pointer font-semibold hover:bg-[#5741d9] hover:ease-in-out transition-all shadow-xl/20 border-gray-600 hover:shadow-white text-sm py-6! bg-[#655ae0] text-white">
                {"View Projects".toUpperCase()}
              </button>
              <button
                onClick={handleGithub}
                className="w-2/5 hover:ease-in-out hover:border-[#5741d9]  transition-all shadow-xl/20 hover:shadow-white  rounded-full py-6! text-sm font-semibold border cursor-pointer border-[#655ae0] bg-gray-600 text-white"
              >
                {"GitHub".toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntroContainer;
