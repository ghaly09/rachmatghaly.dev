import { aboutConfig } from "@/src/config/about-config";
import Image from "next/image";
import React from "react";
import { Skeleton } from "../../ui/skeleton";

export default function GhalyPhoto() {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  return (
    <div>
      {!imageLoaded && (
        <Skeleton className="rounded-md w-60 h-[370px] md:w-[315px]" />
      )}

      <Image
        className={aboutConfig.photoGhaly.style}
        src={aboutConfig.photoGhaly.src}
        alt={aboutConfig.photoGhaly.alt}
        width={1000}
        height={1000}
        onLoad={() => setImageLoaded(true)}
      />
    </div>
  );
}
