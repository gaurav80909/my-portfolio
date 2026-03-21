import profile from "../assets/profile.jpg"

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-6 md:px-16 relative"
    >
      <div className="grid md:grid-cols-2 gap-12 w-full max-w-7xl mx-auto items-center">

        {/* ================= LEFT CONTENT ================= */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white">Cybersecurity & </span>
            <span className="text-cyan-400">Cloud Engineer</span>
            <br />

          </h1>

          <p className="mt-6 text-gray-400 max-w-xl text-lg">
            I build secure, scalable and automated cloud infrastructure using
            AWS, Linux, Docker, Kubernetes and modern DevOps tools.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="https://drive.google.com/file/d/1dPpuihZfGUZCWhPKh5y2imwfFhT6Etdl/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-cyan-400 text-black font-semibold
              hover:scale-105 transition"
            >
              View Resume
            </a>


            <a
              href="#projects"
              className="px-6 py-3 rounded-xl border border-cyan-400
              text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* ================= RIGHT PROFILE ================= */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">

            {/* PROFILE IMAGE WITH ONLY ANIMATED BORDER */}
            <div className="relative w-64 h-64 rounded-full p-[3px] animate-borderGlow">
              <div className="w-full h-full rounded-full bg-[#020617] p-[3px]">
                <img
                  src={profile}
                  alt="Gaurav Kumar"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>

            {/* INFO */}
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold">Gaurav Kumar</h3>

              <p className="text-cyan-400 text-sm mt-1">
                Cybersecurity | Cloud | Option trading
              </p>

              <p className="text-gray-500 text-xs mt-1">
                B.Tech • Session 2023 – 2027
              </p>

              <div className="flex justify-center gap-2 mt-4 flex-wrap">
                {["Cloud", "Cybersecurity", "AI/ML"].map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full
                    bg-white/10 border border-white/10
                    text-cyan-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
