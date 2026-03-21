import { useEffect, useState } from "react"

export default function Navbar() {
  const sections = ["home", "about", "skills", "projects", "contact"]
  const [active, setActive] = useState("home")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-400">
          Gaurav<span className="text-white">.dev</span>
        </h1>

        <ul className="flex gap-8 text-sm">
          {sections.map((sec) => (
            <li key={sec}>
              <a
                href={`#${sec}`}
                className={`relative uppercase tracking-wide transition
                  ${
                    active === sec
                      ? "text-cyan-400"
                      : "text-gray-400 hover:text-cyan-300"
                  }`}
              >
                {sec}
                {active === sec && (
                  <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_12px_#22d3ee]" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
