import React from "react";



const skills = [
  {
    name: "SQL",
    percent: 90,
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        alt="SQL"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Python",
    percent: 85,
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        alt="Python"
        className="w-10 h-10"
      />
    ),
  },
  {
    name: "Excel",
    percent: 80,
    icon: (
      <div className="relative w-10 h-10 flex items-center">
        <img
          src="https://i.postimg.cc/RCH92ctS/Microsoft-Office-Excel-Logo.png"
          alt="Excel"
          className="w-10 h-10"
        />

        
        
      </div>
    ),
  },
  {
    name: "Power BI",
    percent: 75,
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
        alt="Power BI"
        className="w-10 h-10"
      />
    ),
  },
];

function Skills() {
  return (
    <section id="skills" className="pt-24 py-8 px-4 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-8 text-center">Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-white rounded-2xl shadow-lg p-6 w-64 h-40 flex flex-col justify-between items-start border border-gray-100 hover:shadow-xl transition group relative"
          >
            <div className="flex items-center gap-3">
              {skill.icon}
              <span className="text-xl font-semibold text-gray-800">
                {skill.name}
              </span>
            </div>
            <div className="w-full mt-4">
              <div className="flex items-center justify-between mb-1">
                <span className="text-gray-500 text-sm">Learning</span>
                <span className="text-gray-700 font-bold">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full h-3 bg-gray-100 rounded-full">
                <div
                  className="h-3 rounded-full bg-green-400 transition-all duration-500"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
            <div className="absolute top-2 right-4 text-green-500 font-semibold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Continue &rarr;
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;