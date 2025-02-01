import { cn } from "@/app/helpers/cn";
import { FC, HTMLAttributes } from "react";

type HeadingProps = HTMLAttributes<HTMLElement> & {
  variant: "xxxl" | "xxl" | "xl" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "span";
};

export const Heading: FC<HeadingProps> = ({
  as = "div",
  variant,
  className,
  ...rest
}) => {
  const Comp = as;
  return (
    <Comp
      data-variant={variant}
      className={cn(
        "font-bold text-black leading-[1.25]",
        variant === "xxxl" && "text-[64px]",
        variant === "xxl" && "text-[52px]",
        variant === "xl" && "text-[52px]",
        variant === "h1" && "text-[48px]",
        variant === "h2" && "text-[44px]",
        variant === "h3" && "text-[36px]",
        variant === "h4" && "text-[28px]",
        variant === "h5" && "text-[21px]",
        variant === "h6" && "text-[18px]",
        className,
      )}
      {...rest}
    />
  );
};
