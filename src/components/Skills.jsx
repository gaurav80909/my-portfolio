import useReveal from "../hooks/useReveal"
import { FaReact, FaNodeJs, FaLinux, FaAws, FaPython } from "react-icons/fa"
import { SiJavascript, SiTailwindcss, SiCyberdefenders, SiMongodb, SiFastapi, SiSocketdotio } from "react-icons/si"

const skills = [
  { name: "React", icon: <FaReact size={34} color="#61DAFB" /> },
  { name: "JavaScript", icon: <SiJavascript size={34} color="#F7DF1E" /> },
  { name: "Python", icon: <FaPython size={34} color="#3776AB" /> },
  { name: "FastAPI", icon: <SiFastapi size={34} color="#05998B" /> },
  { name: "Node.js", icon: <FaNodeJs size={34} color="#3C873A" /> },
  { name: "Socket.io", icon: <SiSocketdotio size={34} color="#FFFFFF" /> },
  { name: "Linux", icon: <FaLinux size={34} color="#FCC624" /> },
  { name: "AWS", icon: <FaAws size={34} color="#FF9900" /> },
]



export default function Skills() {
  const ref = useReveal()

  return (
    <section
      id="skills"
      ref={ref}
      className="section py-32 max-w-6xl mx-auto px-6"
    >
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-14">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-white/10 backdrop-blur-xl border border-white/10
            rounded-2xl p-8 flex flex-col items-center justify-center
            hover:border-cyan-400 hover:scale-110 transition"
          >
            {/* ICON */}
            <div className="group-hover:rotate-6 transition">
              {skill.icon}
            </div>

            {/* NAME */}
            <p className="mt-4 text-gray-300 text-sm uppercase tracking-wide">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
