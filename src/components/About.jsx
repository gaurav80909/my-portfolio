import useReveal from "../hooks/useReveal"

export default function About() {
  const ref = useReveal()

  return (
    <section
      id="about"
      ref={ref}
      className="section py-32 max-w-6xl mx-auto px-6"
    >
      {/* TITLE */}
      <h2 className="text-4xl font-bold text-cyan-400 text-center mb-10">
        About Me
      </h2>

      {/* MAIN CARD */}
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center">
        <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
          I am a <span className="text-cyan-400 font-semibold">Cybersecurity Enthusiast</span> and
          <span className="text-cyan-400 font-semibold"> B.Tech student</span> with hands-on
          experience in <span className="text-cyan-400">Vulnerability Assessment & Penetration Testing (VAPT)</span>,
          <span className="text-cyan-400"> Digital Forensics</span>, and
          <span className="text-cyan-400"> Linux-based security labs</span>.
          I focus on building practical, real-world security solutions rather than just theory.
        </p>

        <p className="text-gray-400 text-base mt-6 max-w-4xl mx-auto">
          Alongside cybersecurity, I have working knowledge of
          <span className="text-cyan-400"> AWS & Azure cloud platforms</span> and bring
          <span className="text-cyan-400"> 4+ years of experience in Stock & Options Trading</span>,
          giving me a strong understanding of risk management, analysis, and decision-making.
        </p>
      </div>

      {/* TAGS / HIGHLIGHTS */}
      <div className="mt-12 flex flex-wrap justify-center gap-4">
        {[
          "Cybersecurity",
          "VAPT",
          "Digital Forensics",
          "Linux",
          "AWS",
          "Azure",
          "Campus Management",
          "Risk Management",
          "Stock & Options Trading",
        ].map((tag) => (

          <span
            key={tag}
            className="px-5 py-2 rounded-full text-sm
            bg-white/10 backdrop-blur-md border border-white/10
            text-gray-300 hover:text-cyan-400 hover:border-cyan-400
            transition"
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}
