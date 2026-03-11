import { skills } from "../config/SkillsConfig";

function SkillContainer() {
  return (
    <div id="skills" className="w-full h-screen not-md:h-full items-center flex justify-center my-16!">
      <div className="w-full border border-light-yellow rounded-2xl p-8! bg-dark-purple-blur text-white">
        <h1 className="text-5xl! not-md:text-3xl! font-bold text-center text-light-yellow mb-10">
          Skills
        </h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((category) => (
            <div
              key={category.category}
              className="border border-light-purple rounded-xl p-5! bg-[#1a1238]"
            >
              <h2 className="text-lg! font-semibold mb-4! text-white">
                {category.category}
              </h2>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm! mb-1!">
                      <span>{skill.name}</span>
                      <span className="text-gray-300">{skill.score}/10</span>
                    </div>

                    <div className="w-full h-2 bg-gray-700 rounded">
                      <div
                        className="h-2 bg-light-yellow rounded"
                        style={{ width: `${skill.score * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillContainer;
