import { useState, useEffect } from "react"

export function useSectionInView(sectionId: string | null) {
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    if (!sectionId) {
      return
    }

    const element = document.getElementById(sectionId)
    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting)
      },
      {
        root: null,
        rootMargin: "-35% 0px -35% 0px",
        threshold: 0,
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [sectionId])

  return isActive
}
