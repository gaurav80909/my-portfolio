export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="bg-[#020617] border border-cyan-400/30 rounded-3xl p-8 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-400 hover:text-white"
        >
          ✕
        </button>

        <div className="h-48 w-full overflow-hidden rounded-2xl mb-6 border border-white/10">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-2xl font-bold text-cyan-400 mb-2">
          {project.title}
        </h3>


        <p className="text-gray-300 mb-4">{project.desc}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/30"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          <a
            href={project.github}
            target="_blank"
            className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            className="px-5 py-2 rounded-xl bg-cyan-400 text-black hover:scale-105 transition"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
