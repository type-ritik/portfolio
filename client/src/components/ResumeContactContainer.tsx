function ResumeContactContainer() {
  return (
    <>
      <h1 className="not-md:text-4xl!">Resume Contact Container</h1>
      <div className="w-full flex flex-col bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
        <div>
          <p className="text-md! not-md:text-base! bg-gray-50 p-2! rounded">
            Currently seeking Backend / Software Engineering Internship roles.
          </p>
          <br />
          <div className="flex justify-evenly mb-4! not-md:grid not-md:grid-cols-2">
            <div className="text-xl not-md:text-sm font-bold not-md:grid-rows-1 not-md:w-[80%]">
              Resume:{" "}
              <a
                className="text-blue-900 font-bold uppercase text-base"
                href="https://rose-edythe-36.tiiny.site"
              >
                Link
              </a>
            </div>
            <div className="text-xl not-md:text-sm font-bold not-md:grid-rows-1 not-md:w-full">
              Email:
              <span className="text-base font-semibold text-blue-600 not-md:text-sm ml-2!">
                ritik.vw98@gmail.com
              </span>
            </div>
            <div className="text-xl not-md:text-sm not-md:grid-rows-1 font-semibold">
              GitHub:{" "}
              <a
                className="text-blue-900 font-bold uppercase text-base"
                href="https://github.com/type-ritik"
              >
                Link
              </a>
            </div>
            <div className="text-xl not-md:text-sm font-semibold">
              LinkedIn:{" "}
              <a
                className="text-blue-900 font-bold uppercase text-base"
                href="https://www.linkedin.com/in/type-ritik/"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeContactContainer;
