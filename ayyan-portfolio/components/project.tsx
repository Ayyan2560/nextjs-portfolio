const projects = [
  {
    number: "01",
    title: "HelpHub AI",
    type: "Hackathon project",
    description: "A community support platform concept built for a Saylani hackathon, bringing helpful resources into one place.",
    technologies: ["HTML", "CSS", "JavaScript", "AI"],
    live: "https://helphub01.netlify.app/",
    github: "https://github.com/Ayyan2560/HelpHub-AI-Community-Support-Platform-II-Hackathon-part-01",
    theme: "lime",
    coverLabel: "COMMUNITY / SUPPORT",
    coverTitle: "Help, made easier.",
    coverNote: "A platform for people helping people.",
    symbol: "↗",
  },
  {
    number: "02",
    title: "Express CRUD Application",
    type: "Full-stack application",
    description: "A React frontend connected to a Node.js and Express API for working with application data through CRUD operations.",
    technologies: ["React", "Node.js", "Express"],
    github: "https://github.com/Ayyan2560/Expressjs-CRUD-with-Reactjs-Nodejs-",
    theme: "ink",
    coverLabel: "API / APPLICATION DATA",
    coverTitle: "Create. Read. Update.",
    coverNote: "A practical full-stack workflow.",
    symbol: "{ }",
  },
  {
    number: "03",
    title: "Weather App",
    type: "API-powered web app",
    description: "A responsive weather interface that connects to a weather API to show current conditions and useful forecast information.",
    technologies: ["HTML", "CSS", "JavaScript", "API"],
    live: "https://ayyan2560.github.io/weather-app-with-API/",
    theme: "blue",
    coverLabel: "WEATHER / API DATA",
    coverTitle: "Forecast at a glance.",
    coverNote: "Useful data, presented clearly.",
    symbol: "↗",
  },
  {
    number: "04",
    title: "Dice Game",
    type: "Interactive JavaScript",
    description: "A browser-based game using JavaScript logic, random outcomes, and interactive page updates.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://ayyan2560.github.io/Dice-Game/",
    theme: "orange",
    coverLabel: "PLAY / INTERACT",
    coverTitle: "A little chance.",
    coverNote: "Built around browser interaction.",
    symbol: "06",
  },
  {
    number: "05",
    title: "Matrix Calculator",
    type: "Utility web app",
    description: "A focused calculator interface for working with matrix values directly in the browser.",
    technologies: ["HTML", "CSS", "JavaScript"],
    live: "https://matrixcalcuoooria.netlify.app/",
    theme: "sand",
    coverLabel: "MATRIX / CALCULATOR",
    coverTitle: "[ 1  0 ]",
    coverNote: "[ 0  1 ]   Math in the browser.",
    symbol: "∑",
  },
  {
    number: "06",
    title: "Noor-e-Quran",
    type: "Learning experience",
    description: "A Quran-learning concept focused on making recitation practice and memorisation workflows easier to explore.",
    technologies: ["JavaScript", "Web development"],
    live: "https://noor-e-quraan.netlify.app/",
    theme: "mint",
    coverLabel: "LEARN / REVISE",
    coverTitle: "Noor-e-Quran",
    coverNote: "A learning experience with purpose.",
    symbol: "N",
  },
];

function ProjectCover({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className={"project-cover project-cover--" + project.theme}>
      <div className="cover-topline">
        <span>{project.coverLabel}</span>
        <span>{project.number} / 06</span>
      </div>
      <div className="relative z-10">
        <p className="cover-title">{project.coverTitle}</p>
        <div className="cover-foot mt-5">
          <span className="max-w-[75%] leading-5 opacity-75">{project.coverNote}</span>
          <span className="cover-symbol">{project.symbol}</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-xs text-[#2855e8]">03 /</span>
          <span className="h-px w-8 bg-[#2855e8]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7169]">Selected work</span>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.6fr] lg:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.03] tracking-[-0.065em] text-[#171916] sm:text-5xl lg:text-6xl">
            Real things I&apos;ve been building.
          </h2>
          <p className="max-w-md text-base leading-7 text-[#62675f] lg:justify-self-end">
            A mix of interactive frontend projects and full-stack practice. Each one taught me something different about making software useful.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.number} className="group overflow-hidden rounded-2xl border border-[#deddd5] bg-[#fbfaf6] transition duration-300 hover:-translate-y-1 hover:border-[#bcbdb3] hover:shadow-[0_18px_40px_-30px_rgba(23,25,22,0.4)]">
              <ProjectCover project={project} />
              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#777b73]">{project.type}</p>
                  <span className="rounded-full border border-[#d8d7cf] px-2.5 py-1 font-mono text-[10px] text-[#6a6f67]">{project.number}</span>
                </div>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#171916] transition-colors group-hover:text-[#2855e8] sm:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[#62675f]">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span key={technology} className="rounded-md bg-[#eeede6] px-2.5 py-1.5 text-[11px] font-medium text-[#4b5048]">
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#e4e3dc] pt-4">
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#2855e8] transition hover:gap-3">
                      Live project <span aria-hidden="true">↗</span>
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#52574f] transition hover:text-[#171916]">
                      Source code <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#deddd5] pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-[#6a6f67]">More experiments and source code live on GitHub.</p>
          <a href="https://github.com/Ayyan2560" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#cfcec5] px-4 py-2.5 text-sm font-semibold text-[#252923] transition hover:border-[#2855e8] hover:text-[#2855e8]">
            Browse GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
