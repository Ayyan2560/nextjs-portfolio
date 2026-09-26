export default function Navbar() {
  return (
    <nav className="border-b border-white/10 bg-black/80 px-6 py-5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-white"
        >
          Ayyan<span className="text-blue-500">.</span>
        </a>

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

          <a href="#projects" className="text-sm text-gray-300 hover:text-white">
            Projects
          </a>

          <a href="#contact" className="text-sm text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}