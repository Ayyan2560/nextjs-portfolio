const SKILL_GROUPS = [
  {
    number: "01",
    title: "Frontend & UI",
    note: "Building the parts people interact with.",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Bootstrap", "Responsive design"],
  },
  {
    number: "02",
    title: "Backend & data",
    note: "Connecting interfaces to real application logic.",
    skills: ["Node.js", "Express.js", "MongoDB", "Firebase", "REST APIs"],
  },
  {
    number: "03",
    title: "Tools & workflow",
    note: "The everyday tools that help keep projects moving.",
    skills: ["Git", "GitHub", "API integration", "DOM manipulation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="border-y border-[#deddd5] bg-[#ebe9e1] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-xs text-[#2855e8]">02 /</span>
          <span className="h-px w-8 bg-[#2855e8]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7169]">Tools I use</span>
        </div>

        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="max-w-2xl text-4xl font-semibold leading-[1.03] tracking-[-0.065em] text-[#171916] sm:text-5xl lg:text-6xl">
            A practical stack, built project by project.
          </h2>
          <p className="max-w-md text-base leading-7 text-[#62675f] lg:justify-self-end">
            I choose tools to fit the problem, keep strengthening the fundamentals, and learn by using technology in real builds.
          </p>
        </div>

        <div className="border-t border-[#cecdc4]">
          {SKILL_GROUPS.map((group) => (
            <div key={group.number} className="grid gap-5 border-b border-[#cecdc4] py-7 md:grid-cols-[0.7fr_1.3fr] md:gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:py-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#2855e8]">{group.number} / STACK</p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-[#171916] sm:text-2xl">{group.title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#696d65]">{group.note}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2.5 md:pt-1">
                {group.skills.map((skill) => (
                  <span key={skill} className="inline-flex items-center gap-2 rounded-lg border border-[#d2d1c8] bg-[#f5f4ee] px-3.5 py-2.5 text-sm font-medium text-[#353a33] transition hover:border-[#2855e8]/50 hover:text-[#2855e8]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2855e8]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
