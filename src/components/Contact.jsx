export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 flex justify-center px-6 relative"
    >
      {/* FLOATING GLOW ORBS */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-500/30 rounded-full blur-[120px] animate-floatSlow" />
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-600/30 rounded-full blur-[120px] animate-floatSlow" />

      {/* CONTACT CARD */}
      <div
        className="relative z-10 max-w-xl w-full p-[2px] rounded-3xl
        bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
        animate-borderSpin"
      >
        <div className="bg-[#020617]/90 backdrop-blur-xl rounded-3xl p-10 border border-white/10">
          <h2 className="text-3xl font-bold text-cyan-400 mb-2 text-center">
            Let’s Connect
          </h2>

          <p className="text-gray-400 text-sm text-center mb-8">
            Have an idea, project, or opportunity? Let’s talk.
          </p>

          {/* UI FORM */}
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-black/50
              border border-white/10 text-white
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
              transition"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-black/50
              border border-white/10 text-white
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
              transition"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 rounded-xl bg-black/50
              border border-white/10 text-white resize-none
              focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/30
              transition"
            />

            <button
              type="button"
              className="w-full py-3 rounded-xl font-semibold text-black
              bg-cyan-400 hover:scale-105 hover:shadow-[0_0_30px_#22d3ee]
              transition-all duration-300"
            >
              Send Message
            </button>
          </form>

          {/* SOCIALS */}
          <div className="mt-8 flex justify-center gap-6 text-gray-400 text-sm">
            <a
              href="https://github.com/gaurav80909"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/gaurav-kumar-aa52a42ab/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:gauravchaurasiya7250@gmail.com"
              className="hover:text-cyan-400 transition cursor-pointer"
            >
              Email
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
