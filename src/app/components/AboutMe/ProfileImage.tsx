"use client"

import { myCld } from "@/app/core/cloudinary"
import { thumbnail } from "@cloudinary/url-gen/actions/resize"
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity"
import { face } from "@cloudinary/url-gen/qualifiers/focusOn"
import { max } from "@cloudinary/url-gen/actions/roundCorners"
import { format } from "@cloudinary/url-gen/actions/delivery"
import { auto } from "@cloudinary/url-gen/qualifiers/format"
import { AdvancedImage } from "@cloudinary/react"

export function ProfileImage() {
  const img = myCld
    .image("/web-resume/profile.jpg")
    .resize(
      thumbnail().width(300).height(300).zoom(0.8).gravity(focusOn(face())),
    )
    .roundCorners(max())
    .delivery(format(auto()))

  return <AdvancedImage cldImg={img} alt="jacob sturges profile picture" />
}
