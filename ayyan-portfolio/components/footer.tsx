export default function Footer() {
  return (
    <footer className="bg-[#171916] px-5 py-8 text-[#f5f4ee] sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <a href="#home" className="inline-flex w-fit items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-[#d6f56b] text-[10px] font-bold text-[#171916]">AR</span>
          <span>
            <span className="block text-sm font-semibold">Ayyan Rizwan</span>
            <span className="mt-0.5 block font-mono text-[10px] uppercase tracking-[0.12em] text-white/45">Web developer · Karachi</span>
          </span>
        </a>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-medium text-white/65">
          <a href="#about" className="transition hover:text-[#d6f56b]">About</a>
          <a href="#projects" className="transition hover:text-[#d6f56b]">Projects</a>
          <a href="https://github.com/Ayyan2560" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d6f56b]">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/ayyan-rizwan78692/" target="_blank" rel="noopener noreferrer" className="transition hover:text-[#d6f56b]">LinkedIn ↗</a>
          <a href="/Ayyan-Rizwan-CV.pdf" download="Ayyan-Rizwan-CV.pdf" className="transition hover:text-[#d6f56b]">CV ↓</a>
        </div>

        <p className="font-mono text-[10px] text-white/40">© {new Date().getFullYear()} Ayyan Rizwan</p>
      </div>
    </footer>
  );
}
