import Link from "next/link";
import { Text } from "../ui/text";
import { ExperienceItemImage } from "./experienceItemImage";

type ExperienceItemProps = {
  name: string;
  link: string;
  logo: string;
  title: string;
  timeline: string;
  description: string;
};

export function ExperienceItem({
  name,
  link,
  logo,
  title,
  timeline,
  description,
}: ExperienceItemProps) {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-center">
      <Link href={link}>
        <ExperienceItemImage imageUrl={logo} />
      </Link>
      <div className="basis-0 grow">
        <Text variant="large">{name}</Text>
        <Text variant="regular">{title}</Text>
        <Text variant="regular" className="italic">
          {timeline}
        </Text>
        <Text variant="regular">{description}</Text>
      </div>
    </div>
  );
}
