import { Section } from "../ui/Section";
import { ExperienceItem } from "./ExperinceItem";

export function Experince() {
  return (
    <Section id="experience" title="Experience">
      <div className="flex flex-col gap-16">
        <ExperienceItem
          name="Frank Energie"
          link="https://www.frankenergie.nl/nl"
          title="Senior software engineer"
          logo="/web-resume/frank-energie"
          logoAlt="Frank Energie logo"
          timeline="Aug 2024 - Present"
          description="During my time at Frank Energie, I made significant contributions to both the website and mobile app. I resolved numerous technical issues and played a key role in leading the rework and redesign of the sign-up flow, enhancing both functionality and user experience."
        />
        <ExperienceItem
          name="PlaygroundXYZ / Gum Gum inc"
          link="https://playgroundxyz.com/"
          title="Senior software engineer"
          logo="/web-resume/pxyz"
          logoAlt="PlaygroundXYZ logo"
          timeline="Dec 2020 - Aug 2024"
          description="At Playground XYZ, I achieved a high level of proficiency as a developer, earning the title of Senior Software Engineer. This role marked the first time I took full ownership of entire projects, most notably the AIP Measurement Portal. I also collaborated closely with other developers on initiatives such as the AIP Vision Project, which allowed me to expand my expertise into mobile development. My work primarily involved technologies like React, GraphQL, and Kotlin."
        />
        <ExperienceItem
          name="Are Media (Formally Bauer)"
          link="https://www.aremedia.com.au/"
          title="Javascript developer"
          logo="/web-resume/are-media"
          logoAlt="Are Media logo"
          timeline="May 2019 - Dec 2020"
          description="During my time at Are Media, I advanced my skills as a developer, taking on larger projects and working more independently. This role marked a significant step in my growth as a frontend developer, as I began working with React and TypeScript for the first time. Notably, I contributed to the expansion and maintenance of the company’s various brand mastheads, including prominent Australian brands such as Women’s Weekly, Better Homes and Gardens and Now to Love."
        />
        <ExperienceItem
          name="News Corp Australia"
          link="https://www.newscorpaustralia.com/"
          title="Junior developer"
          logo="/web-resume/newscorp"
          logoAlt="News Corp Australia logo"
          timeline="Feb 2017 - May 2019"
          description="I started my journey at News Corp as an intern through the UNSW Co-op Internship Program, which led to a full-time position. During my time there, I developed fundamental skills as a developer, learned to contribute effectively to team efforts, and successfully delivered several major projects. My experience included working extensively with JavaScript and Node.js, with a highlight being my contributions to the development of NewsConnect 2.0."
        />
        <ExperienceItem
          name="UNSW"
          link="https://www.unsw.edu.au/"
          title="Bachelor's of Computer Science (Database Systems)"
          logo="/web-resume/unsw"
          logoAlt="University of New South Wales logo"
          timeline="2015 - 2021"
          description="I graduated with a Bachelor of Computer Science (Database Systems) from the high-ranking University of New South Wales. I successfully secured and completed two separate research projects and participated in the prestigious UNSW Co-op Internship Program during my studies."
        />
      </div>
    </Section>
  );
}
