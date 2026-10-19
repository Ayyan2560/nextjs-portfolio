const PRINCIPLES = [
  {
    number: "01",
    title: "Make it clear",
    description: "A site should feel easy to understand before a user has to think about it.",
  },
  {
    number: "02",
    title: "Make it work",
    description: "Responsive layouts and real interactions matter just as much as a good first impression.",
  },
  {
    number: "03",
    title: "Keep improving",
    description: "Every project is a chance to learn a better pattern, fix a rough edge, and write cleaner code.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-[#deddd5] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-center gap-3">
          <span className="font-mono text-xs text-[#2855e8]">01 /</span>
          <span className="h-px w-8 bg-[#2855e8]" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#6d7169]">A little about me</span>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="max-w-xl text-4xl font-semibold leading-[1.04] tracking-[-0.065em] text-[#171916] sm:text-5xl lg:text-6xl">
              I care about how it works — and how it feels.
            </h2>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#5e635b]">
              I&apos;m a Karachi-based web developer who enjoys turning rough ideas into usable digital experiences. I spend my time building interfaces, solving JavaScript problems, and connecting the frontend to real data.
            </p>
            <p className="mt-4 max-w-lg text-base leading-7 text-[#5e635b]">
              This portfolio is a record of what I&apos;ve built, what I&apos;m learning, and how I approach a problem. I value understanding the code behind a feature—not just getting it to look right.
            </p>
            <a href="#projects" className="mt-7 inline-flex items-center gap-2 border-b border-[#2855e8] pb-1.5 text-sm font-semibold text-[#2855e8] transition hover:gap-3">
              See what I&apos;ve been building <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="border-t border-[#d8d7cf]">
            {PRINCIPLES.map((item) => (
              <div key={item.number} className="grid grid-cols-[42px_1fr] gap-4 border-b border-[#d8d7cf] py-6 sm:grid-cols-[58px_1fr] sm:gap-6 sm:py-7">
                <span className="pt-1 font-mono text-xs text-[#2855e8]">{item.number}</span>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight text-[#171916] sm:text-2xl">{item.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-[#666b64] sm:text-base">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
