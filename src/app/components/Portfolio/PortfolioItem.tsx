import Link from "next/link";
import { Text } from "../ui/text";
import { cn } from "@/app/helpers/cn";
import { Heading } from "../ui/heading";
import { PortfolioItemImage } from "./PortfolioItemImage";

type PortfolioItemProps = {
  title: string;
  text: string;
  image: string;
  imageAlt: string;
  link: string;
};

export function PortfolioItem({
  title,
  text,
  link,
  image,
  imageAlt,
}: PortfolioItemProps) {
  return (
    <Link
      href={link}
      className={cn(
        "flex flex-col items-center gap-6",
        "w-full h-[640px] md:w-[480px] md:h-[580px] p-10",
        "border border-black rounded-lg overflow-hidden group",
      )}
    >
      <div>
        <PortfolioItemImage imageUrl={image} alt={imageAlt} />
      </div>
      <Heading className="text-center group-hover:underline" variant="h4">
        {title}
      </Heading>
      <Text variant="regular">{text}</Text>
    </Link>
  );
}
