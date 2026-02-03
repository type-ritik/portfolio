function ApproachContainer() {
  return (
    <>
      <h1>How I Work</h1>
      <div className="w-full flex flex-col bg-[#a7d0fc] p-4! rounded-sm justify-between my-6!">
        <h3 className="mb-4!">I approach development by first identifying:</h3>
        <ul>
          <li>Entities</li>
          <li>State</li>
          <li>Invariants</li>
          <li>Failure cases</li>
        </ul>
        <br />
        <p className="text-md! bg-gray-50 p-2! rounded">
          I prefer understanding why systems break instead of masking problems
          with quick fixes. Deployment is part of the system, not an
          afterthought.
        </p>
      </div>
    </>
  );
}

export default ApproachContainer;
