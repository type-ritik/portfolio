const navigation: Array<string> = ["home", "about", "project", "contact"]
const logo: string = "PORTFOLIO";

function Header() {
  return (
    <div className="flex justify-between items-center py-6! h-[120px] font-bold">
        <div className="block">
        <h2 className="text-xl">{logo.toUpperCase()}</h2>
        </div>
        <div className="w-2/6 flex justify-between text-xl">
            {
                navigation.map((item, index) => (
                    <a key={index} href={"\\" + item.toLowerCase()}>
                        <span>
                            {item.toLocaleLowerCase()}
                        </span>
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default Header
