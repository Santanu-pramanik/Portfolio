import React from "react";

function Projects() {
  const projects = [
    {
      title: "Python Project",
      description: "Automated data analysis and reporting using Python scripts.",
      link: "https://github.com/projects",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
          alt="Python"
          className="w-10 h-10"
        />
      ),
    },
    {
      title: "SQL Project",
      description: "Designed and managed databases, performed complex queries with SQL.",
      link: "https://github.com/projects",
      icon: (
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
          alt="SQL"
          className="w-10 h-10"
        />
      ),
    },
    {
      title: "Excel Project",
      description: "Created dashboards and performed data analysis in Microsoft Excel.",
      link: "https://github.com/projects",
      icon: (
        <img
          src="https://i.postimg.cc/RCH92ctS/Microsoft-Office-Excel-Logo.png"
          alt="Excel"
          className="w-10 h-10"
        />
      ),
    },
    {
      title: "Power BI Project",
      description: "Built interactive business intelligence reports using Power BI.",
      link: "https://github.com/projects",
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg"
          alt="Power BI"
          className="w-10 h-10"
        />
      ),
    },
  ];

  return (
    <section id="projects" className="pt-24 py-8 px-4 min-h-screen flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-6 w-80 flex flex-col items-center cursor-pointer border border-gray-100 group"
          >
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-xl font-semibold text-blue-700 mb-2 group-hover:underline">{project.title}</h3>
            <p className="text-gray-600 text-center">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
