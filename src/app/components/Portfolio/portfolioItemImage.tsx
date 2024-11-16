"use client";

import { myCld } from "@/app/core/cloudinary";
import { AdvancedImage } from "@cloudinary/react";
import { Resize } from "@cloudinary/url-gen/actions";

type PortfolioItemImageProps = {
  imageUrl: string;
};

export function PortfolioItemImage({ imageUrl }: PortfolioItemImageProps) {
  const imgae = myCld.image(imageUrl).resize(Resize.scale().height(180));

  return <AdvancedImage cldImg={imgae} />;
}
