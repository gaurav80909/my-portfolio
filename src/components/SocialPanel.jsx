import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
  FaInstagram,
} from "react-icons/fa"
import {
  SiTryhackme,
  SiLeetcode,
} from "react-icons/si"

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub size={28} color="#ffffff" />, // GitHub white
    link: "https://github.com/gaurav80909",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} color="#0A66C2" />, // LinkedIn blue
    link: "https://www.linkedin.com/in/gaurav-kumar-aa52a42ab/",
  },
  {
    name: "HackerRank",
    icon: <FaHackerrank size={28} color="#00EA64" />, // HackerRank green
    link: "https://www.hackerrank.com/chaurasiyag7250",
  },
  {
    name: "TryHackMe",
    icon: <SiTryhackme size={28} color="#C11111" />, // TryHackMe red
    link: "https://tryhackme.com/p/Gaurav999.",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={28} color="#FFA116" />, // LeetCode orange
    link: "https://leetcode.com/u/Gaurav80909/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={28} color="#E4405F" />, // Instagram pink
    link: "https://www.instagram.com/_lov_guru_84ya/", // 👉 apna username yahan daal dena
  },
]

export default function SocialPanel() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <div
        className="flex flex-wrap justify-center gap-6
        bg-white/10 backdrop-blur-xl border border-white/10
        rounded-3xl p-8"
      >
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center
            w-24 h-24 rounded-2xl
            bg-black/40 border border-white/10
            hover:border-cyan-400 hover:-translate-y-2
            hover:shadow-[0_0_30px_#22d3ee55]
            transition-all duration-300"
          >
            {/* ICON */}
            <div className="group-hover:scale-125 transition">
              {social.icon}
            </div>

            {/* NAME */}
            <span className="mt-2 text-xs text-gray-300 group-hover:text-cyan-400">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
