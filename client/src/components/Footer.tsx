function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#ee00ff] py-8 bg-[#0a0a0a]/85 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#a0a0a0]">
            &copy; {year} Ritik. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-sm text-[#a0a0a0]">
            RS
          </div>
          <div className="text-sm text-[#a0a0a0]">
            <span className="text-[#ee00ff]">
              Note & Code
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
