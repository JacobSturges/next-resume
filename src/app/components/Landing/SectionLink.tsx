import Link from "next/link";
import { Text } from "../ui/1-Text";
import React from "react";

type SectionLinkProps = {
  title: string;
  href: string;
  variant?: "regular" | "ultra";
};

export function SectionLink({
  title,
  href,
  variant = "regular",
}: SectionLinkProps) {
  return (
    <Link href={href} onClick={handleClick}>
      <Text className="hover:underline text-white" variant={variant}>
        {title}
      </Text>
    </Link>
  );

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = event.currentTarget;
    const { hash } = target;

    if (!hash) return;
    // Only cancel default behavior if href is referncing local tag ie #something
    event.preventDefault();

    const id = hash.replace(/^#/, "");
    const element = document.getElementById(id);

    if (!element) return;

    const stickyBar = document.getElementById("sticky-bar");
    const stickyBarHeight = stickyBar ? stickyBar.offsetHeight : 0;

    const y =
      element.getBoundingClientRect().top + window.scrollY - stickyBarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
