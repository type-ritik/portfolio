function FirstContainer() {
  return (
    <div className="w-full flex justify-between my-6!">
      <div className="intro w-3/5 flex flex-col justify-center gap-4">
        <h1 className="text-8xl leading-tight font-bold flex flex-col">
          Hello! Myself <span className="name">[Ritik Sharma]</span>
        </h1>
        <h2 className="text-2xl font-semibold">
          A Passionate Full Stack Developer.
        </h2>
        <p className="text-base text-justify w-4/5">
          I am Ritik Sharma, a dedicated software engineer with a strong passion
          for developing innovative programs that expedite the efficiency and
          effectiveness of organizational success. Well-versed in technology and
          writing code to create systems that are reliable and user-friendly.
        </p>
        <div className="btn-container w-4/5 flex justify-between my-4!">
          <button className="w-2/5 rounded-full cursor-pointer font-semibold hover:bg-[#5741d9] hover:ease-in-out transition-all shadow-xl/20 hover:shadow-white text-sm py-6! bg-[#655ae0] text-white">
            {"Contact Me".toUpperCase()}
          </button>
          <button className="w-2/5 hover:ease-in-out hover:border-[#5741d9]  transition-all shadow-xl/20 hover:shadow-white  rounded-full py-6! text-sm font-semibold border cursor-pointer border-[#655ae0] text-white">
            {"Resume".toUpperCase()}
          </button>
        </div>
      </div>
      <div className="user-profile w-2/5 flex justify-end">
        <img
          src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659651_960_720.png"
          alt="Ritik Sharma"
          className="w-full rounded-full shadow-lg"
        />
      </div>
    </div>
  );
}

export default FirstContainer;
