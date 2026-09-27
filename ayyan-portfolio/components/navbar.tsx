"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <a
            href="#home"
            className="text-xl font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Ayyan<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden gap-8 md:flex">
            <a href="#home" className="text-sm text-gray-300 hover:text-white">
              Home
            </a>

            <a href="#about" className="text-sm text-gray-300 hover:text-white">
              About
            </a>

            <a href="#skills" className="text-sm text-gray-300 hover:text-white">
              Skills
            </a>

            <a
              href="#projects"
              className="text-sm text-gray-300 hover:text-white"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-sm text-gray-300 hover:text-white"
            >
              Contact
            </a>
            <a
              href="/Ayyan-Rizwan-CV.pdf"
              download
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-500"
            >
              Download CV
              </a>  

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-6 flex flex-col gap-5 border-t border-white/10 pt-6 md:hidden">
            <a
              href="#home"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <a
              href="/Ayyan-Rizwan-CV.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white"
            >
              Download CV
            </a>
            
          </div>
        )}
      </div>
    </nav>
  );
}