import { headerNavbar, logo } from "../config/HeaderConfig";

function Header() {
  return (
    <>
      <header className="border-b border-b-[#690070]/40 fixed top-0 left-0 right-0 z-50 w-full h-16 bg-[#0a0a0a]/70 backdrop-blur-md px-6   sm:px-18   md:px-6   lg:px-42   py-4  ">
        <nav className="flex py-4   h-full w-full mx-auto">
          <div className="flex justify-between w-full mx-auto h-full">
            <div className="flex items-center gap-1.5">
              <span className="text-2xl font-bold cursor-pointer text-[#ee00ff]">
                {logo}
              </span>
            </div>
            <div className="flex items-center gap-3">
              {headerNavbar.map((item, index) => (
                <a
                  key={index}
                  className="px-5   py-2   rounded-full border border-[#f5f5f5]/30 text-[#f5f5f5] text-sm font-semibold tracking-wider hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-all duration-200 uppercase cursor-pointer"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
