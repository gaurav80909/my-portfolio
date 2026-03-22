import greenEarth from "../assets/projects/green-earth.png"
import virusScanner from "../assets/projects/virus-scanner.png"
import cloudSecurity from "../assets/projects/cloud-security.png"
import portfolioImg from "../assets/projects/portfolio.png"
import campusImg from "../assets/projects/campus.png"

export const projects = [
  {
    title: "Green Earth",
    image: greenEarth,
    desc: "AI-powered climate intelligence platform for weather detection and anomaly prediction using scientific NetCDF datasets.",
    tech: ["React", "FastAPI", "Python", "ML"],
    github: "https://github.com/gaurav80909/GreenEarth",
    live: "https://greenearth-dashboard.onrender.com/",
  },
  {
    title: "Smart Campus",
    image: campusImg,
    desc: "A comprehensive management system with role-based dashboards for admins, students, and security personnel.",
    tech: ["React", "Tailwind", "Node.js", "Socket.io"],
    github: "https://github.com/gaurav80909/IIT-Management",
    live: "#",
  },
  {
    title: "Virus Scanner",
    image: virusScanner,
    desc: "Advanced malware detection using data structures.",
    tech: ["Python", "DSA", "Security"],
    github: "https://github.com/gaurav80909/virus-scanner",
    live: "#",
  },
  {
    title: "Cloud Security Lab",
    image: cloudSecurity,
    desc: "AWS IAM, MFA, VPC security hands-on labs.",
    tech: ["AWS", "IAM", "Cloud Security"],
    github: "https://github.com/gaurav80909/cloud-security-lab",
    live: "#",
  },
  {
    title: "3D Cyber Portfolio",
    image: portfolioImg,
    desc: "React + Three.js cyber animated portfolio.",
    tech: ["React", "Three.js", "Tailwind"],
    github: "https://github.com/gaurav80909/3d-portfolio",
    live: "https://yourportfolio.vercel.app",
  },
]



