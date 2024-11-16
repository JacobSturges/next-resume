"use client";

import { myCld } from "@/app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from "@cloudinary/url-gen/actions";

type ExperienceItemImageProps = {
  imageUrl: string;
};

export function ExperienceItemImage({ imageUrl }: ExperienceItemImageProps) {
  const imgae = myCld.image(imageUrl).resize(Resize.scale().width(200));

  return <AdvancedImage cldImg={imgae} />;
}
