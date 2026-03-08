import { headerNavbar, name } from "../config/HeaderConfig";

function Header() {
  return (
    <div className="z-1 flex px-10! w-screen  bg-dark-purple text-light-yellow capitalize fixed top-0 justify-evenly items-center h-16 border-b-2 border-light-yellow">
      <div className="flex justify-start items-center w-1/4 not-md:w-[30%]">
        <h2 className="text-[1.6rem]! font-semibold! not-md:text-[1.4rem]!">
          {name}
        </h2>
      </div>
      <div className="w-[50%] not-md:w-[60%] flex justify-end">
        <div className="w-full not-md:text-[.9rem] flex justify-between text-[1rem] font-semibold">
          {headerNavbar.map((item, index) => (
            <a key={index} href={"#" + item.toLowerCase()}>
              <span>{item.toLocaleLowerCase()}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
