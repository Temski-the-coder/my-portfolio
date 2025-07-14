import { useState } from "react";

const skills = [
  // Frontend Skills
  { name: "HTML", level: "100", category: "Frontend" },
  { name: "Typescript", level: "100", category: "Frontend" },
  { name: "React", level: "100", category: "Frontend" },
  { name: "CSS", level: "100", category: "Frontend" },
  { name: "Tailwind CSS", level: "100", category: "Frontend" },

  //   Backend Skills
  { name: "Node.js", level: "70", category: "Backend" },
  { name: "Express.js", level: "90", category: "Backend" },

  //   Database Skills
  { name: "SQL", level: "80", category: "Database" },
  { name: "MongoDB", level: "90", category: "Database" },

  //   Version Control Skills
  { name: "Git/GitHub", level: "80", category: "Version Control" },
  { name: "VS Code", level: "100", category: "IDE" },
  { name: "Figma", level: "100", category: "Design" },

  //   API Skills
  { name: "Postman", level: "80", category: "API" },
  { name: "RESTful APIs", level: "70", category: "API" },
];

const skillCategories = [
  "all",
  "Frontend",
  "Backend",
  "Database",
  "Version Control",
  "IDE",
  "Design",
  "API",
];

export const SkillSection = () => {
  const [skillCategory, setSkillCategory] = useState("all");

    const filteredSkills = skills.filter((skill) =>
    skillCategory === "all" || skill.category === skillCategory
    );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="text-foreground dark:text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-7">
          {skillCategories.map((category, key) => (
            <button
              key={key}
              onClick={() => setSkillCategory(category)}
              className={`px-3 py-1 rounded-full transition-colors duration-300 ${
                skillCategory === category
                  ? " bg-blue-700 dark:bg-purple-900 text-white"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="bg-purple-900 h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
