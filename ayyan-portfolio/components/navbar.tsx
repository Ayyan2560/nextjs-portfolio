"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#030712]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand / Logo */}
        <a
          href="#home"
          className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-white transition-opacity hover:opacity-90"
          onClick={() => setIsOpen(false)}
        >
          <span>Ayyan</span>
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] transition-transform group-hover:scale-125" />
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Desktop navigation" className="hidden items-center gap-1 md:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded-lg px-3.5 py-1.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/[0.06] hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="ml-4 pl-4 border-l border-white/10">
            <a
              href="/Ayyan-Rizwan-CV.pdf"
              download="Ayyan-Rizwan-CV.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-sm shadow-blue-500/25 transition-all hover:bg-blue-500 hover:shadow-blue-500/40 active:scale-95"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3"
                />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <a
            href="/Ayyan-Rizwan-CV.pdf"
            download="Ayyan-Rizwan-CV.pdf"
            className="rounded-lg bg-blue-600/90 px-3 py-1.5 text-xs font-medium text-white transition hover:bg-blue-600"
          >
            CV
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2 text-slate-200 transition-colors hover:bg-white/[0.08] hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="border-t border-white/[0.08] bg-[#030712]/95 px-6 py-5 backdrop-blur-2xl md:hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col space-y-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-base font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-blue-400"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/[0.08]">
            <a
              href="/Ayyan-Rizwan-CV.pdf"
              download="Ayyan-Rizwan-CV.pdf"
              onClick={() => setIsOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-blue-500/30 transition hover:bg-blue-500"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12 12 16.5m0 0L16.5 12M12 16.5V3"
                />
              </svg>
              <span>Download CV</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
