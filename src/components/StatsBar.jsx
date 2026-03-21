import useReveal from "../hooks/useReveal"

const stats = [
  {
    value: "20+",
    label: "Certifications",
  },
  {
    value: "10+",
    label: "Hands-on Projects",
  },
  {
    value: "3+",
    label: "Major Projects",
  },
  {
    value: "4+",
    label: "Years Options Trading",
  },
]

export default function StatsBar() {
  const ref = useReveal()

  return (
    <section
      ref={ref}
      className="section py-20 max-w-7xl mx-auto px-6"
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4 gap-6
        bg-white/10 backdrop-blur-xl border border-white/10
        rounded-3xl p-8"
      >
        {stats.map((item) => (
          <div
            key={item.label}
            className="text-center group"
          >
            <h3
              className="text-4xl md:text-5xl font-bold text-cyan-400
              group-hover:scale-110 transition"
            >
              {item.value}
            </h3>

            <p className="mt-2 text-gray-300 text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
