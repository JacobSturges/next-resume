import { Section } from "../ui/1-Section";
import { Skill } from "./Skill";

export function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex justify-evenly flex-wrap gap-10">
        <Skill
          name="ReactJS/NextJS"
          text="Expertise in building modern web applications with ReactJS, leveraging component-driven architecture and hooks for dynamic interfaces. Skilled in NextJS for server-side rendering, and optimized routing for performant and SEO-friendly applications."
          icon={["fab", "react"]}
        />

        <Skill
          name="NodeJS"
          text="Experienced in backend development using NodeJS, creating scalable and efficient RESTful APIs, handling asynchronous workflows, and integrating with databases. Familiar with frameworks like Express.js, GraphQL and ApolloJS."
          icon={["fab", "node-js"]}
        />

        <Skill
          name="React Native"
          text="Adept at developing cross-platform mobile applications using React Native, with a focus on responsive designs, seamless navigation, and integration of native modules for enhanced performance on iOS and Android devices."
          icon={["fab", "react"]}
        />

        <Skill
          name="Typescript"
          text="Expertise in using TypeScript for static typing in JavaScript applications, ensuring code scalability and reducing runtime errors with interfaces, generics, and advanced type features."
          icon={["fab", "js"]}
        />
        <Skill
          name="Database's"
          text="Experience with relational databases (PostgreSQL, MySQL) and NoSQL databases (MongoDB, Firebase), optimizing queries and designing schemas for scalable data management."
          icon={["fas", "database"]}
        />

        <Skill
          name="Python"
          text="Adept in Python for scripting, data manipulation, and backend services, including web frameworks like Flask for robust application development."
          icon={["fab", "python"]}
        />
      </div>
    </Section>
  );
}
