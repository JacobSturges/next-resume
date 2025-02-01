import React from "react";
import { Heading } from "./heading";

type SectionProps = {
  id: string;
  title: string;
  children?: React.ReactNode;
};

export function Section({ id, title, children }: SectionProps) {
  return (
    <div id={id} className="flex flex-col gap-16 p-8 md:p-16">
      <Heading variant="h2" className="text-center">
        {title}
      </Heading>
      <div>{children}</div>
    </div>
  );
}
