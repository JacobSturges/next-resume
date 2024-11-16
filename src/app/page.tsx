import { library } from "@fortawesome/fontawesome-svg-core";
import { AboutMe } from "./components/AboutMe";
import { Landing } from "./components/Landing";
import { Skills } from "./components/Skills";
import { StickyBar } from "./components/StickyBar";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { Experince } from "./components/Experience";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";

library.add(fab);
library.add(fas);

export default function Home() {
  return (
    <div>
      <StickyBar />
      <Landing />
      <div className="[&>*:nth-child(even)]:bg-[#eeeeee]">
        <AboutMe />
        <Skills />
        <Experince />
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}
