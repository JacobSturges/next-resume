"use client";
import { useState } from "react";
import { cn } from "../../helpers/cn";
import { SectionLink } from "../Landing/SectionLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
export function StickyBar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuMobileDisplay = showMenu ? "flex" : "hidden";
  return (
    <div
      id="sticky-bar"
      className={cn(
        "flex flex-col justify-between fixed top-0 w-full",
        "md:flex-row",
        "px-4 md:px-20 py-4",
        "bg-black",
      )}
    >
      <div className="flex justify-between center">
        <SectionLink
          href="https://jacobsturges.com"
          title="jacobsturges.com"
          variant="ultra"
        />
        <button
          className="text-white md:hidden"
          onClick={handleBarsClick}
          aria-label="show section dropdown"
        >
          <FontAwesomeIcon icon={["fas", "bars"]} size="2x" />
        </button>
      </div>
      <div
        className={cn(
          menuMobileDisplay,
          "flex-col gap-4 items-center",
          "md:flex md:flex-row",
        )}
        onClick={() => setShowMenu(false)}
      >
        <SectionLink href="#about-me" title="about me" />
        <SectionLink href="#skills" title="skills" />
        <SectionLink href="#experience" title="experience" />
        <SectionLink href="#portfolio" title="portfolio" />
        <SectionLink href="#contact" title="contact" />{" "}
      </div>
    </div>
  );

  function handleBarsClick() {
    setShowMenu((showMenu) => !showMenu);
  }
}
