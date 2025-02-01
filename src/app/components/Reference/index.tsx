import { ResizableImage } from "../ResizableImage";
import { Section } from "../ui/Section";
import { Text } from "../ui/Text";

export function Reference() {
  return (
    <Section id="reference" title="Reference">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <ResizableImage
          imageUrl="/web-resume/pxyz"
          alt="PlaygroundXYZ logo"
          width={200}
        />
        <div className="flex flex-col gap-4">
          <Text className="italic" variant="ultra">
            &quot;Jacob and I collaborated at Playground XYZ on a variety of
            projects and technologies. Each time, I was impressed by his ability
            to quickly learn and master new stacks and workflows. He
            consistently demonstrated strong autonomy, taking full ownership of
            feature sets, effectively scoping and estimating the necessary work,
            and delivering high-quality results on time. I would gladly work
            with Jacob again if the opportunity arises.&quot;
          </Text>
          <Text variant="ultra">
            {" "}
            -{" "}
            <a
              className="underline hover:no-underline"
              href="https://www.linkedin.com/in/yoannbernex/"
            >
              <b>Yoann Bernex</b> (Head of Engineering Playground XYZ)
            </a>
          </Text>
        </div>
      </div>
    </Section>
  );
}
