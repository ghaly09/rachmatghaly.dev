import { aboutConfig } from "@/src/config/about-config";
import Image from "next/image";
import React from "react";

export default function GhalyPhoto() {
  return (
    <Image
      className={aboutConfig.photoGhaly.style}
      src={aboutConfig.photoGhaly.src}
      alt={aboutConfig.photoGhaly.alt}
      width={1000}
      height={1000}
    />
  );
}
