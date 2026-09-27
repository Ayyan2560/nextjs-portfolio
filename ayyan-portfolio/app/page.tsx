import Navbar from "@/components/navbar";
import About from "@/components/about";
import Skills from "@/components/skill";
import Projects from "@/components/project";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section
        id="home"
        className="flex min-h-[80vh] items-center justify-center px-6"
      >
        <div className="max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium text-blue-500">
            Frontend Developer
          </p>

          <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
            Hi, I'm Ayyan Rizwan
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            I build modern, responsive and user-friendly web applications
            using modern frontend technologies.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="rounded-lg border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Contact Me
            </a>
            <a
              href="/Ayyan-Rizwan-CV.pdf"
              download
              className="rounded-lg border border-white/20 px-6 py-3 font-medium transition hover:bg-white/10"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}