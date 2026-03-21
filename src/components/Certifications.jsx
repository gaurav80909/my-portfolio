import useReveal from "../hooks/useReveal"

const certifications = [
  {
    title: "Journey to Cloud: Envisioning Your Solution",
    org: "IBM",
    link: "https://www.linkedin.com/",
  },
  {
    title: "Security Analyst Certificate Programme",
    org: "Reliance Foundation",
    link: "https://www.linkedin.com/",
  },
  {
    title: "Certified Cybersecurity Educator Professional (CCEP)",
    org: "CCEP",
    link: "https://www.linkedin.com/",
  },
  {
    title: "Threat Intelligence Fundamentals for SOC Analysts",
    org: "Securonix",
    link: "https://www.linkedin.com/",
  },
  {
    title: "Neo4j Certified Professional",
    org: "Neo4j",
    link: "https://www.linkedin.com/",
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-32 overflow-hidden bg-black/20">

      {/* 1. SLIDING HIGHLIGHTS */}
      <div className="mb-24">
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-16">
          Certification Highlights
        </h2>

        <div className="relative flex overflow-hidden group">
          <div className="py-12 flex gap-10 animate-marquee min-w-full">
            {[...certifications, ...certifications].map((cert, index) => (
              <div key={index} className="flex-shrink-0 w-[400px]">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/5 backdrop-blur-xl
                  border border-white/10 rounded-2xl p-8 h-full
                  hover:border-cyan-400 hover:scale-105
                  hover:shadow-[0_0_30px_#22d3ee22]
                  transition-all duration-300"
                >
                  <div className="relative z-10">
                    <h3 className="text-lg font-semibold mb-2 text-white line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{cert.org}</p>
                    <div className="mt-4 flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                      <span>View Credentials</span>
                      <span>→</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. STATIC ALL CERTIFICATIONS GRID */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-white text-center mb-12 opacity-80">
          All Certifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <a
              key={`static-${index}`}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/5 backdrop-blur-md border border-white/10
              rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/50
              transition-all duration-300"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-md font-semibold text-gray-100 group-hover:text-cyan-400 transition">
                    {cert.title}
                  </h4>
                  <p className="text-gray-500 text-sm mt-1">{cert.org}</p>
                </div>
                <span className="text-gray-600 group-hover:text-cyan-400 transition">
                  ↗
                </span>
              </div>
            </a>
          ))}

          {/* EXTRA PLACEHOLDERS FOR A FULL GRID FEEL */}
          {[
            { title: "Blockchain Foundation", org: "Reliance Foundation" },
            { title: "Describe Cloud Computing", org: "Microsoft" },
            { title: "Describe Azure Cloud", org: "Microsoft" }
          ].map((extra, i) => (
            <div
              key={`extra-${i}`}
              className="group bg-white/5 backdrop-blur-md border border-white/10
              rounded-2xl p-6 opacity-60 hover:opacity-100 transition duration-300"
            >
              <h4 className="text-md font-semibold text-gray-300">{extra.title}</h4>
              <p className="text-gray-500 text-sm mt-1">{extra.org}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
