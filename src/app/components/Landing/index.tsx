import { cn } from "@/app/helpers/cn";
import { Heading } from "../ui/Heading";

export function Landing() {
  return (
    <div
      className={cn(
        "bg-landing bg-cover w-full h-screen",
        "flex flex-col justify-center items-center",
        "text-center pb-20",
      )}
    >
      <Heading className="text-white" variant="xxxl">
        Jacob Sturges
      </Heading>
      <Heading className="text-white" variant="h4">
        Senior software engineer
      </Heading>
    </div>
  );
}
