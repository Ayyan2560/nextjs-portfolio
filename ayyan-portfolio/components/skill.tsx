interface SkillItem {
  name: string;
  category: string;
}

const SKILLS: SkillItem[] = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML", category: "Core Web" },
  { name: "CSS", category: "Core Web" },
  { name: "Bootstrap", category: "Styling" },
  { name: "Firebase", category: "Backend / Auth" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Collaboration" },
  { name: "Responsive Design", category: "UI/UX" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28 border-t border-white/[0.06] bg-[#02050c]">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400">
              Technical Stack
            </div>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Technologies &amp; Tools
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-400">
            A focused toolkit centered on clean architecture, accessible components, and modern web development standards.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {SKILLS.map((skill) => (
            <div
              key={skill.name}
              className="glow-card group relative flex flex-col justify-between rounded-xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-wider uppercase text-slate-400 group-hover:text-blue-400 transition-colors">
                  {skill.category}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-blue-500/40 group-hover:bg-blue-400 transition-colors" />
              </div>

              <div className="mt-6 flex items-center justify-between">
                <h3 className="text-base font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {skill.name}
                </h3>
                <svg
                  className="h-4 w-4 text-slate-600 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
