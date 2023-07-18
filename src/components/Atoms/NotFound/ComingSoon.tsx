import Image from "next/image";
import React from "react";
import { Reveal } from "../../ui/FramerMotion/onReveal";

export default function ComingSoon() {
  return (
    <div className="flex flex-col items-center mt-5">
      <Reveal delay={0.3} duration={0.5}>
        <Image
          src={
            "https://res.cloudinary.com/druckyjuu/image/upload/v1689704459/Projects/haveNoFavorite_m06z9w.png"
          }
          width={300}
          height={300}
          alt="Comming Soon"
        />
      </Reveal>
      <Reveal delay={0.4} duration={0.5}>
        <p className="text-2xl font-bold dark:color-base-ghaly mt-2">
          Coming Soon!
        </p>
      </Reveal>
    </div>
  );
}
