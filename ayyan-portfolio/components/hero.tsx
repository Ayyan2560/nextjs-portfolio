export default function Hero() {
  return (
    <section id="home" className="paper-grid relative overflow-hidden px-5 pb-20 pt-32 sm:px-8 sm:pt-36 lg:px-10 lg:pb-28 lg:pt-40">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d8d7cf] bg-[#f5f4ee]/90 px-3.5 py-2">
            <span className="h-2 w-2 rounded-full bg-[#2855e8]" />
            <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#555a52] sm:text-[11px]">
              Karachi, Pakistan · Available for opportunities
            </span>
          </div>

          <p className="mt-9 font-mono text-xs uppercase tracking-[0.2em] text-[#646960]">
            Hello, world. I&apos;m
          </p>
          <h1 className="mt-3 max-w-3xl text-[3.45rem] font-semibold leading-[0.96] tracking-[-0.075em] text-[#171916] sm:text-7xl lg:text-[5.7rem]">
            Ayyan
            <br />
            <span className="text-[#2855e8]">Rizwan.</span>
            <br />
            <span className="text-[#7c8078]">I build for the web.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-[#5b6058] sm:text-lg sm:leading-8">
            I turn ideas into responsive, useful web experiences with JavaScript, React, Next.js, and the MERN stack. I care about the details people feel when they use a product.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-xl bg-[#171916] px-5 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2b302a]"
            >
              Explore my work
              <span aria-hidden="true" className="text-[#d6f56b]">↘</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[#cecdc4] bg-[#f5f4ee]/80 px-5 py-3.5 text-sm font-semibold text-[#242721] transition hover:border-[#2855e8] hover:text-[#2855e8]"
            >
              Let&apos;s talk
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#d8d7cf] pt-5">
            <a href="https://github.com/Ayyan2560" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#555a52] transition hover:text-[#2855e8]">
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a href="https://www.linkedin.com/in/ayyan-rizwan78692/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-[#555a52] transition hover:text-[#2855e8]">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
            <a href="mailto:ayyan786920@gmail.com" className="text-sm font-medium text-[#555a52] transition hover:text-[#2855e8]">
              Email <span aria-hidden="true">↗</span>
            </a>
            <span className="hidden h-1 w-1 rounded-full bg-[#b4b5ad] sm:block" />
            <span className="font-mono text-[10px] uppercase tracking-[0.13em] text-[#777b73]">
              Frontend · MERN
            </span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[530px] lg:ml-auto">
          <div aria-hidden="true" className="absolute -right-3 -top-3 h-full w-full rounded-[1.6rem] border border-[#2855e8]/30 sm:-right-4 sm:-top-4" />
          <div className="relative overflow-hidden rounded-[1.6rem] bg-[#171916] text-[#f5f4ee] shadow-[0_25px_70px_-38px_rgba(23,25,22,0.55)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f28a64]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#d6f56b]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#83a4ff]" />
              </div>
              <span className="font-mono text-[10px] tracking-wide text-white/45">AYYAN / ABOUT.TS</span>
            </div>

            <div className="px-5 py-7 sm:px-7 sm:py-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d6f56b]">A little about my approach</p>
                  <h2 className="mt-3 max-w-sm text-3xl font-semibold leading-tight tracking-[-0.055em] sm:text-4xl">
                    Build it.<br />Understand it.<br /><span className="text-white/45">Make it better.</span>
                  </h2>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-white/15 font-mono text-xs text-[#d6f56b]">AR_</span>
              </div>

              <div className="mt-9 border-t border-white/10 pt-5">
                <div className="grid grid-cols-[92px_1fr] gap-x-4 gap-y-4 font-mono text-xs sm:grid-cols-[112px_1fr] sm:text-sm">
                  <span className="text-white/40">FOCUS</span>
                  <span className="text-white/90">Interfaces & real-world features</span>
                  <span className="text-white/40">FRONTEND</span>
                  <span className="text-[#d6f56b]">JavaScript · React · Next.js</span>
                  <span className="text-white/40">BACKEND</span>
                  <span className="text-[#a9bdff]">Node.js · Express · MongoDB</span>
                  <span className="text-white/40">BASED IN</span>
                  <span className="text-white/90">Karachi, Pakistan</span>
                </div>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Curious by default", "Responsive-first", "Always learning"].map((item) => (
                  <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] text-white/65">
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between bg-[#d6f56b] px-5 py-3 text-[#171916] sm:px-6">
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em]">Personal portfolio</span>
              <span className="font-mono text-[10px]">01 — 06 / selected work</span>
            </div>
          </div>
          <p className="mt-5 text-right font-mono text-[10px] uppercase tracking-[0.16em] text-[#777b73]">
            Thoughtful code. Clear interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
