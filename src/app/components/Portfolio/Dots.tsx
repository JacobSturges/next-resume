import { cn } from "@/app/helpers/cn";

const dotClassName = "rounded-full borer-none w-3 h-3 bg-medium-light-grey";

type DotsProps = {
  className?: string;
  currentSlide: number;
  slideCount: number;
};

export function Dots({ className, currentSlide, slideCount }: DotsProps) {
  return (
    <div className={cn(className, "flex gap-1")}>
      {[...Array(slideCount).keys()].map((index) => (
        <button
          key={`slide-dot-${index}`}
          className={cn(currentSlide === index && "!bg-black", dotClassName)}
        />
      ))}
    </div>
  );
}
