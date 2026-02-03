function ApproachContainer() {
  return (
    <>
      <h1>How I Work</h1>
      <div className="w-full flex flex-col bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
        <h3 className="mb-4!">I approach development by first identifying:</h3>
        <ul>
          <li className="m-1! p-1! text-md! not-md:text-sm!">Entities</li>
          <li className="m-1! p-1! text-md! not-md:text-sm!">State</li>
          <li className="m-1! p-1! text-md! not-md:text-sm!">Invariants</li>
          <li className="m-1! p-1! text-md! not-md:text-sm!">Failure cases</li>
        </ul>
        <br />
        <p className="text-md! bg-gray-50 p-2! rounded not-md:text-base!">
          I prefer understanding why systems break instead of masking problems
          with quick fixes. Deployment is part of the system, not an
          afterthought.
        </p>
      </div>
    </>
  );
}

export default ApproachContainer;
