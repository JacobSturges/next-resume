import { cn } from "@/app/helpers/cn"
import React, { HTMLAttributes } from "react"

export type TextProps = HTMLAttributes<HTMLElement> & {
  variant: "mega" | "ultra" | "large" | "regular" | "small" | "micro"
}

export function Text({ variant, className, ...rest }: TextProps) {
  return (
    <p
      data-variant={variant}
      className={cn(
        "text-black leading-[1.56]",
        "[&_b]:shadow-none [&_strong]:shadow-none",
        "[&_a]:transition-colors [&_a]:duration-150 [&_a]:text-scooter [&_a]:underline [&_a]:hover:text-scooterDark [&_a]:focus-visible:text-scooterDark",
        variant === "mega" && "text-[24px]",
        variant === "ultra" && "text-[20px]",
        variant === "large" && "text-[18px]",
        variant === "regular" && "text-[16px]",
        variant === "small" && "text-[14px]",
        variant === "micro" && "text-[11px]",
        className,
      )}
      {...rest}
    />
  )
}
