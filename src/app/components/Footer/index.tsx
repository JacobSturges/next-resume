import Link from "next/link"
import { Text } from "../ui/Text"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Heading } from "../ui/Heading"

export function Footer() {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <div
      id="contact"
      className="flex flex-col gap-2 items-center bg-black p-10"
    >
      <Heading variant="h4" className="text-white">
        Get in Contact
      </Heading>

      <Text variant="regular" className="text-white">
        Email Address:{" "}
        <Link
          className="hover:no-underline"
          href="mailto:jacob.sturges96@gmail.com"
        >
          jacob.sturges96@gmail.com
        </Link>
      </Text>

      <div className="flex text-white gap-2">
        <Link href="https://github.com/JacobSturges" aria-label="my Github">
          <FontAwesomeIcon
            className="h-8 w-8"
            icon={["fab", "github-square"]}
            size="2x"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/jacob-sturges/"
          aria-label="my LinkedIn"
        >
          <FontAwesomeIcon
            className="h-8 w-8"
            icon={["fab", "linkedin"]}
            size="2x"
          />
        </Link>
      </div>

      <Text variant="regular" className="text-white">
        © {year} Jacob Sturges. All rights reserved.
      </Text>
    </div>
  )
}
