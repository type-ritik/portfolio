function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full flex justify-center mt-20!">
      <div className="w-full bg-dark-purple-blur border border-light-yellow rounded-2xl p-8! text-white">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Name */}
          <h2 className="text-2xl font-bold text-light-yellow">Ritik Sharma</h2>

          {/* Role */}
          <p className="text-gray-300">
            Backend Developer — Node.js · GraphQL · PostgreSQL · Redis
          </p>

          {/* Statement */}
          <p className="text-gray-400 max-w-xl text-sm">
            I enjoy designing backend systems that emphasize data consistency,
            clear state transitions, and reliable real-time communication.
          </p>

          {/* Links */}
          <div className="flex gap-6 mt-3!">
            <a
              href="mailto:ritik.vw98@gmail.com"
              className="text-light-yellow hover:underline"
            >
              Email
            </a>

            <a
              href="https://github.com/type-ritik"
              target="_blank"
              className="text-light-yellow hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/type-ritik/"
              target="_blank"
              className="text-light-yellow hover:underline"
            >
              LinkedIn
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm pt-4!">© {year} Ritik Sharma</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
