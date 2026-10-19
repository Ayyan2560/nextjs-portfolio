"use client";

import { useState } from "react";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#skills" },
  { label: "Work", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#deddd5] bg-[#f5f4ee]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8 lg:px-10">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
          aria-label="Ayyan Rizwan home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#171916] text-xs font-bold tracking-tight text-[#d6f56b] transition-transform group-hover:-rotate-3">
            AR
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-[#171916]">Ayyan Rizwan</span>
            <span className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.13em] text-[#74776f]">
              Web developer
            </span>
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-medium text-[#565a53] transition-colors hover:bg-[#eae9e1] hover:text-[#171916]"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/Ayyan-Rizwan-CV.pdf"
            download="Ayyan-Rizwan-CV.pdf"
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-[#2855e8] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1c43c6]"
          >
            Download CV
            <span aria-hidden="true">↗</span>
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href="/Ayyan-Rizwan-CV.pdf"
            download="Ayyan-Rizwan-CV.pdf"
            className="rounded-lg bg-[#2855e8] px-3 py-2 text-xs font-semibold text-white"
          >
            CV
          </a>
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-[#d8d7cf] text-xl text-[#171916]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? "×" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-[#deddd5] bg-[#f5f4ee] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#454940] transition hover:bg-[#eae9e1]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
