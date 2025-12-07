import { useKeenSlider } from "keen-slider/react"
import { useState } from "react"

export function usePortfolioSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,
    mode: "free-snap",
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 2, spacing: 30 },
      },
      "(min-width: 1536px)": {
        slides: { perView: 3, spacing: 30 },
      },
      "(min-width: 1800px)": {
        slides: { perView: 4, spacing: 30 },
      },
    },
    slides: {
      perView: 1,
      spacing: 30,
    },
    slideChanged: (slider) => {
      setCurrentSlide(slider.track.details.rel)
    },
    created: () => {
      setLoaded(true)
    },
  })

  const slideCount = instanceRef.current?.track.details.slides.length ?? 0

  return {
    sliderRef,
    loaded,
    currentSlide,
    slideCount,
    slideLeft,
    slideRight,
  }

  function slideLeft() {
    instanceRef.current?.prev()
  }

  function slideRight() {
    instanceRef.current?.next()
  }
}
