const navigation =["Home", "About", "Project", "Contact"]

function Header() {
  return (
    <div className="flex">
        <div>
        <h2>Portfolio</h2>
        </div>
        <div>
            {
                navigation.map((item, index) => (
                    <a key={index}>
                        <span>
                            {item}
                        </span>
                    </a>
                ))
            }
        </div>
    </div>
  )
}

export default Header
