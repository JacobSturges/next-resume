import Link from "next/link"
import { Text } from "../ui/Text"
import { cn } from "@/app/helpers/cn"
import { Heading } from "../ui/Heading"
import { ResizableImage } from "../ResizableImage"

type PortfolioItemProps = {
  title: string
  text: string
  image: string
  imageAlt: string
  link: string
}

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
        "h-full p-10",
        "border border-black rounded-lg overflow-hidden group",
      )}
    >
      <div>
        <ResizableImage imageUrl={image} alt={imageAlt} height={180} />
      </div>
      <Heading className="text-center group-hover:underline" variant="h4">
        {title}
      </Heading>
      <Text variant="regular">{text}</Text>
    </Link>
  )
}
