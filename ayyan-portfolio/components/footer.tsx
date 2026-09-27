export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#02040a] px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-lg font-bold tracking-tight text-white hover:opacity-90"
          >
            <span>Ayyan</span>
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          </a>
          <p className="mt-1 text-xs text-slate-400">
            Frontend Developer &amp; Web Developer • Karachi, Pakistan
          </p>
        </div>

        {/* Links*/}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-slate-400">
          <a
            href="https://github.com/Ayyan2560"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ayyan-rizwan78692/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ayyan786920@gmail.com"
            className="hover:text-blue-400 transition-colors"
          >
            ayyan786920@gmail.com
          </a>
          <a
            href="/Ayyan-Rizwan-CV.pdf"
            download="Ayyan-Rizwan-CV.pdf"
            className="hover:text-blue-400 transition-colors"
          >
            Download CV
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ayyan Rizwan. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
