import { useEffect } from "react"

export default function StarCursor() {
  useEffect(() => {
    const createStar = (e) => {
      const star = document.createElement("span")
      star.className = "cursor-star"

      star.style.left = e.clientX + "px"
      star.style.top = e.clientY + "px"

      document.body.appendChild(star)

      setTimeout(() => {
        star.remove()
      }, 900)
    }

    window.addEventListener("mousemove", createStar)

    return () => {
      window.removeEventListener("mousemove", createStar)
    }
  }, [])

  return null
}
