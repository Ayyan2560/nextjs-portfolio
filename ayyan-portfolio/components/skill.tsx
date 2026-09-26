const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Bootstrap",
  "Firebase",
  "Git",
  "GitHub",
  "Tailwind CSS",
    "Material UI",
    "Node.js",
    "Express.js",
    "MongoDB",
    "TypeScript",
    "next.js",
    "Redux",
    "REST APIs",
    
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-sm font-medium text-blue-500">
          My Skills
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Technologies I work with
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center transition hover:-translate-y-1 hover:border-blue-500/50"
            >
              <p className="font-medium">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}