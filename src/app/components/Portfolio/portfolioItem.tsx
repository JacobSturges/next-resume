import Link from "next/link";
import { Text } from "../ui/text";
import { cn } from "@/app/helpers/cn";
import { Heading } from "../ui/heading";
import { PortfolioItemImage } from "./portfolioItemImage";

type PortfolioItemProps = {
  title: string;
  text: string;
  image: string;
  link: string;
};

export function PortfolioItem({
  title,
  text,
  link,
  image,
}: PortfolioItemProps) {
  return (
    <Link
      href={link}
      className={cn(
        "flex flex-col items-center gap-5",
        "w-full h-[580px] md:w-[480px] md:h-[480px] p-6",
        "border border-black rounded-lg overflow-hidden group",
      )}
    >
      <Heading className="group-hover:underline" variant="h4">
        {title}
      </Heading>
      <Text variant="regular">{text}</Text>
      <div>
        <PortfolioItemImage imageUrl={image} />
      </div>
    </Link>
  );
}
