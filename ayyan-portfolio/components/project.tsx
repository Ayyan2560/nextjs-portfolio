const projects = [
  {
    title: "Express CRUD Application",
    description:
      "A full-stack CRUD application built with React, Node.js and Express.",
    technologies: ["React", "Node.js", "Express"],
    github:
      "https://github.com/Ayyan2560/Expressjs-CRUD-with-Reactjs-Nodejs-",
  },
  {
    title: "HelpHub AI",
    description:
      "An AI-powered community support platform created for a Saylani hackathon.",
    technologies: ["HTML", "CSS", "JavaScript", "AI"],
    live: "https://helphub01.netlify.app/",
    github:
      "https://github.com/Ayyan2560/HelpHub-AI-Community-Support-Platform-II-Hackathon-part-01",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application using a weather API to display weather information.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://ayyan2560.github.io/weather-app-with-API/",
  },
  {
    title: "Dice Game",
    description:
      "An interactive browser-based dice game built to practice JavaScript logic.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://ayyan2560.github.io/Dice-Game/",
  },
  {
    title: "Matrix Calculator",
    description:
      "A web-based matrix calculator with an interactive interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://matrixcalcuoooria.netlify.app/",
  },
  {
    title: "Noor-e-Quran",
    description:
      "A Quran learning application concept focused on memorization and learning.",
    technologies: ["JavaScript", "AI", "Web Development"],
    live: "https://noor-e-quraan.netlify.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-blue-500">
          My Work
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Featured Projects
        </h2>

        <p className="mt-4 max-w-2xl text-gray-400">
          A selection of projects I've built while learning and practicing
          modern web development.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-blue-500/40"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-400 hover:text-blue-300"
                  >
                    Live Demo →
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-gray-300 hover:text-white"
                  >
                    GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}