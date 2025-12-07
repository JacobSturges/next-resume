import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Heading } from "../ui/Heading"
import { Text } from "../ui/Text"
import { cn } from "@/app/helpers/cn"

type SkillProps = {
  name: string
  text: string
  icon: IconProp
}

export function Skill({ name, text, icon }: SkillProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-6",
        "h-[400px] w-[360px] p-6 ",
        "border border-black rounded-lg overflow-hidden",
      )}
    >
      <FontAwesomeIcon className="h-20" icon={icon} size="2x" />
      <Heading variant="h4">{name}</Heading>
      <Text className="basis-0 grow text-center" variant="regular">
        {text}
      </Text>
    </div>
  )
}
