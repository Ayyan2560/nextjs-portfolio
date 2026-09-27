export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center justify-center px-6 pt-28 pb-16 bg-grid-pattern"
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-[120px] md:h-[600px] md:w-[750px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-4 -z-10 h-[280px] w-[280px] rounded-full bg-cyan-500/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-blue-400 backdrop-blur-md shadow-[0_0_20px_rgba(59,130,246,0.15)]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          <span>Frontend Developer &amp; Web Developer</span>
        </div>

        {/* Headline */}
        <h1 className="mt-7 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
            Ayyan Rizwan
          </span>
        </h1>

        <p className="mt-4 text-lg font-medium tracking-tight text-blue-400 sm:text-2xl">
          Crafting responsive, high-performance web experiences.
        </p>

        {/* Short description */}
        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-400 sm:text-lg leading-relaxed">
          Frontend developer based in Karachi, Pakistan. Focused on building modern, intuitive,
          and accessible web applications using React, Next.js, and clean code practices.
        </p>

        {/* Primary Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>View Projects</span>
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contact Me</span>
          </a>

          <a
            href="/Ayyan-Rizwan-CV.pdf"
            download="Ayyan-Rizwan-CV.pdf"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.02] px-5 py-3.5 text-sm font-semibold text-slate-300 transition-all hover:bg-white/[0.06] hover:text-white hover:-translate-y-0.5 active:translate-y-0"
          >
            <svg className="h-4 w-4 text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3" />
            </svg>
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Connect strip */}
        <div className="mt-12 flex items-center justify-center gap-4 pt-6 border-t border-white/[0.06]">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Connect:</span>
          <a
            href="https://github.com/Ayyan2560"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-xs font-medium text-slate-400 hover:text-blue-400 border border-white/10 rounded-lg px-3 py-1.5 transition hover:border-blue-500/40"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/ayyan-rizwan78692/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-xs font-medium text-slate-400 hover:text-blue-400 border border-white/10 rounded-lg px-3 py-1.5 transition hover:border-blue-500/40"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:ayyan786920@gmail.com"
            aria-label="Send Email"
            className="text-xs font-medium text-slate-400 hover:text-blue-400 border border-white/10 rounded-lg px-3 py-1.5 transition hover:border-blue-500/40"
          >
            Email ↗
          </a>
        </div>
      </div>
    </section>
  );
}
