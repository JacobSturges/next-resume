import React from "react";
import { Heading } from "./1-Heading";

type SectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function Section({ id, title, children, className }: SectionProps) {
  return (
    <div id={id} className="flex flex-col gap-16 p-8 md:p-16">
      <Heading variant="h2" className="text-center">
        {title}
      </Heading>
      <div className={className}>{children}</div>
    </div>
  );
}
