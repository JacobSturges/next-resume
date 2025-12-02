"use client";

import Link from "next/link";
import { Text } from "../ui/Text";
import React, { useMemo } from "react";
import { cn } from "@/app/helpers/cn";
import { useSectionInView } from "./hooks/use-section-in-view";

type SectionLinkProps = {
  title: string;
  href: string;
  variant?: "regular" | "ultra";
  className?: string;
};

export function SectionLink({
  title,
  href,
  variant = "regular",
  className,
}: SectionLinkProps) {
  const sectionId = useMemo(() => {
    if (!href.startsWith("#")) return null;
    return href.replace(/^#/, "");
  }, [href]);

  const isSectionActive = useSectionInView(sectionId);

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn("group text-center", className)}
      aria-current={isSectionActive ? "true" : undefined}
      data-active={isSectionActive ? "" : undefined}
    >
      <Text
        className={cn(
          "text-white w-full",
          "transition-shadow duration-200",
          "group-hover:[text-shadow:0_0_16px_rgba(255,255,255,0.85)] group-focus-visible:[text-shadow:0_0_16px_rgba(255,255,255,0.85)]",
          isSectionActive && "md:[text-shadow:0_0_16px_rgba(255,255,255,0.90)]",
        )}
        variant={variant}
      >
        {title}
      </Text>
    </Link>
  );

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    const target = event.currentTarget;
    const { hash } = target;

    if (!hash) {
      return;
    }
    // Only cancel default behavior if href is referencing local tag ie #something
    event.preventDefault();

    const id = hash.replace(/^#/, "");
    const element = document.getElementById(id);

    if (!element) {
      return;
    }

    const stickyBar = document.getElementById("sticky-bar");
    const stickyBarHeight = stickyBar ? stickyBar.offsetHeight : 0;

    const y =
      element.getBoundingClientRect().top + window.scrollY - stickyBarHeight;

    window.scrollTo({ top: y, behavior: "smooth" });
  }
}
