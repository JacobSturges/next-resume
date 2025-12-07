import { AboutMe } from "./components/AboutMe"
import { Landing } from "./components/Landing"
import { Skills } from "./components/Skills"
import { StickyBar } from "./components/StickyBar"
import { Experince } from "./components/Experience"
import { Portfolio } from "./components/Portfolio"
import { Footer } from "./components/Footer"
import { Reference } from "./components/Reference"

export default function Home() {
  return (
    <div>
      <StickyBar />
      <Landing />
      <div className="[&>*:nth-child(even)]:bg-light-grey">
        <AboutMe />
        <Reference />
        <Skills />
        <Experince />
        <Portfolio />
      </div>
      <Footer />
    </div>
  )
}
