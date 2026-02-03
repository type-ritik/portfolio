const navigation: Array<string> = ["home", "about", "project", "contact"];
const logo: string = "PORTFOLIO";

function Header() {
  return (
    <div className="z-1 flex px-10! bg-[#a7d0fc] fixed top-0 w-full justify-between items-center h-20 font-bold">
      <div className="flex justify-center items-center w-1/4 not-md:w-[30%]">
        <h2 className="text-xl not-md:text-[1.4rem]!">{logo.toUpperCase()}</h2>
      </div>
      <div className="w-[50%] not-md:w-[60%] not-md:text-[1rem] flex justify-evenly text-xl">
        {navigation.map((item, index) => (
          <a key={index} href={"\\" + item.toLowerCase()}>
            <span>{item.toLocaleLowerCase()}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
