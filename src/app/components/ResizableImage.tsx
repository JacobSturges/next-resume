"use client"

import { myCld } from "@/app/core/cloudinary"
import { AdvancedImage } from "@cloudinary/react"
import { Resize } from "@cloudinary/url-gen/actions"

type ImageProps = {
  imageUrl: string
  alt: string
  width?: number
  height?: number
}

export function ResizableImage({ imageUrl, alt, width, height }: ImageProps) {
  const image = myCld.image(imageUrl)

  if (width) {
    image.resize(Resize.scale().width(width))
  } else if (height) {
    image.resize(Resize.scale().height(height))
  }

  return <AdvancedImage cldImg={image} alt={alt} />
}
