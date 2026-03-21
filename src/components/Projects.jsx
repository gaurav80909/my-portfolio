import { useState } from "react"
import useReveal from "../hooks/useReveal"
import { projects } from "../data/projects"
import ProjectModal from "./ProjectModal"

export default function Projects() {
  const ref = useReveal()
  const [activeProject, setActiveProject] = useState(null)

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="section py-32 max-w-6xl mx-auto px-6"
      >
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.title}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer group bg-[#0f172a]/40 backdrop-blur-xl
              border border-white/10 rounded-3xl overflow-hidden
              hover:border-cyan-400 hover:-translate-y-3
              hover:shadow-[0_0_40px_#22d3ee33] transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm line-clamp-2">{project.desc}</p>

                <p className="mt-4 text-cyan-400 text-xs opacity-70">
                  Click to view details →
                </p>
              </div>
            </div>

          ))}
        </div>
      </section>

      {/* MODAL */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </>
  )
}
