function ApproachContainer() {
  return (
    <div id="approach" className="w-full h-screen items-center flex justify-center my-20!">
      <div className="w-full bg-dark-purple-blur border border-light-yellow rounded-2xl p-8! text-white">
        {/* Title */}
        <h1 className="text-4xl text-light-yellow text-center font-bold mb-10!">
          How I Design Systems
        </h1>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Entity */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! hover:scale-[1.03] transition">
            <h3 className="text-lg font-semibold text-light-yellow mb-2!">
              Entities
            </h3>
            <p className="text-sm text-gray-300">
              Identify core domain objects and relationships that represent the
              system's structure.
            </p>
          </div>

          {/* State */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! hover:scale-[1.03] transition">
            <h3 className="text-lg font-semibold text-light-yellow mb-2!">
              State
            </h3>
            <p className="text-sm text-gray-300">
              Define valid state transitions to ensure system behavior remains
              predictable and consistent.
            </p>
          </div>

          {/* Invariants */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! hover:scale-[1.03] transition">
            <h3 className="text-lg font-semibold text-light-yellow mb-2!">
              Invariants
            </h3>
            <p className="text-sm text-gray-300">
              Establish rules that must always remain true regardless of system
              operations.
            </p>
          </div>

          {/* Failure */}
          <div className="bg-[#1a1238] border border-light-purple rounded-xl p-5! hover:scale-[1.03] transition">
            <h3 className="text-lg font-semibold text-light-yellow mb-2!">
              Failure Cases
            </h3>
            <p className="text-sm text-gray-300">
              Anticipate how the system might break and design safeguards to
              prevent inconsistent states.
            </p>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mt-10! flex justify-center">
          <p className="max-w-2xl text-center text-gray-300 bg-[#1a1238] border border-light-purple px-6! py-4! rounded-lg">
            I focus on understanding how systems fail rather than masking issues
            with quick fixes. Designing with invariants and failure cases in
            mind helps build reliable backend systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ApproachContainer;
