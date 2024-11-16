import { Section } from "../ui/section";
import { Skill } from "./skill";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex justify-evenly flex-wrap gap-10">
        <Skill
          name="ReactJS"
          text="The front-end web framework I am most experienced in is React. I have built and maintained numerous web apps in this framework."
          icon={["fab", "react"]}
        />
        <Skill
          name="Typescript"
          text="Typescript is an iteration of JavaScript that allows for typing. This language is extremely flexible and can be used to solve just about any software problem. I am most proficient in this language as well as plain JavaScript."
          icon={["fab", "js"]}
        />
        <Skill
          name="Database's"
          text="While undertaking my degree in Computer Science, I majored in Database systems. My high degree of competence with this technology has proven an asset many times during my professional career. I am experienced with both relational and non-relational databases."
          icon={["fas", "database"]}
        />

        <Skill
          name="Kotlin"
          text="I have spent the last couple of years working on an Android app for Playground XYZ and have thus developed strong skills in Kotlin Android development."
          icon={["fab", "android"]}
        />

        <Skill
          name="Python"
          text="For many years, I have enjoyed working in Python. In particular, I have used it for several personal data/analytics projects. The power and ease of use make this language the perfect tool for data-focused projects."
          icon={["fab", "python"]}
        />
      </div>
    </Section>
  );
}
