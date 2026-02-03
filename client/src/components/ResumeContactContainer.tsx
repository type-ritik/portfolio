function ResumeContactContainer() {
  return (
    <>
      <div className="w-full flex flex-col bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
        <h1>Resume Contact Container</h1>
        <div>
          <p className="text-md! bg-gray-50 p-2! rounded">
            Currently seeking Backend / Software Engineering Internship roles.
          </p>
          <br />
          <div className="flex justify-evenly mb-4!">
            <div className="text-xl font-bold">
              Resume:{" "}
              <a
                className="text-blue-900 font-bold uppercase text-base"
                href="https://rose-edythe-36.tiiny.site"
              >
                Link
              </a>
            </div>
            <div className="text-xl font-bold">Email:
              <span className="text-base font-semibold text-blue-600  ml-2!">ritik.vw98@gmail.com</span>
            </div>
            <div className="text-xl">
              GitHub:{" "}
              <a
                className="text-blue-900 font-bold uppercase text-base"
                href="https://github.com/type-ritik"
              >
                Link
              </a>
            </div>
            <div className="text-xl">
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
