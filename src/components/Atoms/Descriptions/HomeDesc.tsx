import React from "react";
import { Reveal } from "../../ui/FramerMotion/onReveal";

export default function HomeDesc() {
  return (
    <div className="mt-32">
      <Reveal delay={0.2} duration={0.5}>
        <h2 className="text-2xl md:text-5xl text-white font-bold">Hi!</h2>
      </Reveal>
      <Reveal delay={0.3} duration={0.5}>
        <h2 className="text-3xl md:text-6xl text-white font-bold">
          I'm Rachmat
          <span className="font-ghaly ghaly-effect px-2 text-transparent focus:text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]">
            Ghaly
          </span>
        </h2>
      </Reveal>
      <Reveal delay={0.4} duration={0.5}>
        <p className="text-sm md:text-xl max-w-2xl pb-5 text-slate-200 font-base font-sans mt-5">
          a <span className="font-semibold">Front-End Engineer</span> who love
          clean design and modern UI design activities to build visually
          attractive applications with user-friendly interactions.
        </p>
      </Reveal>
    </div>
  );
}
