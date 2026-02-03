function IntroContainer() {
  const handleGithub = () => {
    window.open("https://github.com/type-ritik");
  };
  return (
    <div className="w-full flex not-md:flex-col bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
      <div className="intro w-3/5 flex flex-col justify-center not-md:w-full gap-4">
        <h1 className="text-8xl! not-md:text-6xl! leading-tight font-bold flex flex-col">
          Hello,{" "} <br className="not-md:flex hidden" /> My name is{" "}
          <span className="name text-[#6F62C3]">Ritik Sharma</span>
        </h1>
        <h2 className="not-md:text-2xl! font-semibold">
          Backend-focused BCA student building production-ready systems, with
          emphasis on API design, authentication, and system behavior in real
          deployments.
        </h2>
        <p className="text-md! bg-gray-50 p-2! rounded">
          I design, build, and deploy full-stack systems — not demos.
        </p>
        <div className="btn-container not-md:w-full not-md:pb-2! w-4/5 flex justify-between my-4!">
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
      <div className="user-profile flex w-full lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] rounded-md relative bg-amber-50 overflow-hidden">

        <div className="absolute top-0 w-full">
          <div className="flex w-full h-full items-center justify-center bg-zinc-950 py-6">
            <h1 className="animate-pulse bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl sm:text-5xl lg:text-7xl font-black text-transparent">
              Hello World
            </h1>
          </div>
        </div>

        <div className="absolute bottom-0 w-full flex justify-center">
          <img
            src="/src/assets/Photo_from_2024-12-15_12-31-13.983656-removebg-preview.png"
            alt="Ritik Sharma"
            className="max-h-[90%] object-contain shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default IntroContainer;
