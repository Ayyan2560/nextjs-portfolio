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
    <section id="projects" className="relative px-6 py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400">
              Featured Work
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Selected Projects
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            Real applications built to solve problems, practice algorithmic logic, and master web architectures.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="glow-card group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.025] p-6 backdrop-blur-md transition-all hover:bg-white/[0.04]"
            >
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Project
                    </span>
                  </div>
                  {project.live && (
                    <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10px] font-medium text-emerald-400">
                      Live App
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06]">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600/90 px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm shadow-blue-600/20 transition-all hover:bg-blue-500"
                    >
                      <span>Live Demo</span>
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-slate-300 transition-all hover:bg-white/[0.08] hover:text-white"
                    >
                      <span>GitHub</span>
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}