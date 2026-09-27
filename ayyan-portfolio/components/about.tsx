export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-blue-400">
          About Me
        </div>

        <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          Crafting modern digital products from Karachi, Pakistan.
        </h2>

        <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-400 sm:text-lg">
          I&apos;m Ayyan Rizwan, a passionate frontend and web developer dedicated to turning ideas
          into robust, responsive, and aesthetically refined user interfaces.
        </p>

        {/* Feature Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Card 1 */}
          <div className="glow-card rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">Frontend Craft</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Specializing in building component-driven user interfaces with React, Next.js, and TypeScript, prioritizing responsiveness and clean code.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glow-card rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">Continuous Growth</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Continuously deepening my knowledge in modern full-stack workflows, scalable architecture, and production-ready web tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glow-card rounded-2xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
            </div>
            <h3 className="mt-5 text-lg font-semibold text-white">Location &amp; Collaboration</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Based in Karachi, Pakistan. Eager to collaborate on impactful web projects, hackathons, and high-performance engineering teams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
