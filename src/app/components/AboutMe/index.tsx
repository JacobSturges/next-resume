import { Text } from "../ui/Text";
import { toWords } from "number-to-words";
import { Section } from "../ui/Section";
import { ProfileImage } from "./ProfileImage";

export function AboutMe() {
  const workStartDate = new Date(Date.parse("01 Feb 2017"));
  const today = new Date();
  const diff = today.getFullYear() - workStartDate.getFullYear();
  const diffWord = toWords(diff);

  return (
    <Section id="about-me" title="About me">
      <div className="flex gap-14 flex-col md:flex-row items-center">
        <div className="h-[300px] w-[300px]">
          <ProfileImage />
        </div>

        <Text variant="ultra" className="flex items-center basis-0 grow">
          I am a Senior software engineer originally from Australia but now
          based in Amsterdam, Netherlands. During my {diffWord} years of
          professional experience in software development, I have acquired
          expertise across a diverse array of technologies. My commitment to
          continuous learning and problem-solving is reflected in my elevated
          level of technical proficiency. I am driven by a strong passion for
          innovation and am eager to contribute to any team by leveraging my
          skills to address the challenges at hand.
        </Text>
      </div>
    </Section>
  );
}
