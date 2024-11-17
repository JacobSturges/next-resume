"use client";

import { myCld } from "@/app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from "@cloudinary/url-gen/actions";

type ExperienceItemImageProps = {
  imageUrl: string;
  alt: string;
};

export function ExperienceItemImage({
  imageUrl,
  alt,
}: ExperienceItemImageProps) {
  const imgae = myCld.image(imageUrl).resize(Resize.scale().width(200));

  return <AdvancedImage cldImg={imgae} alt={alt} />;
}
