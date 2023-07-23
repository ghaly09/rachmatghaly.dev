import * as React from "react";
import { SlideReveal } from "../../ui/FramerMotion/slideReveal";
import { Button } from "../../ui/button";
import StatusAndResume from "../Buttons/Button-ResumeStatus";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import Link from "next/link";

export default function HomeDesc() {
  const [ghalyEffect, setGhalyEffect] = React.useState("");

  React.useEffect(() => {
    if (ghalyEffect == "ghaly-effect") {
      setTimeout(() => {
        setGhalyEffect("clear-ghaly-effect");
      }, 60000);
    } else {
      setTimeout(() => {
        setGhalyEffect("ghaly-effect");
      }, 10000);
    }
  }, [ghalyEffect]);

  return (
    <div className="mt-32">
      <SlideReveal delay={0.2} duration={0.5}>
        <h2 className="text-2xl md:text-5xl text-white font-bold">Hi!</h2>
      </SlideReveal>
      <SlideReveal delay={0.3} duration={0.5}>
        <h2 className="text-3xl md:text-6xl text-white font-bold">
          I'm Rachmat
          <span
            className={`font-ghaly ${ghalyEffect} px-2 text-transparent focus:text-transparent bg-clip-text bg-gradient-to-r from-[rgb(0,218,210)] to-[rgb(61,224,102)]`}
          >
            Ghaly
          </span>
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.4} duration={0.5}>
        <p className="text-sm md:text-xl max-w-2xl pb-5 text-slate-200 font-base font-sans mt-5">
          a <span className="font-semibold">Front-End Engineer</span> who loves
          clean design and modern UI design activities to build visually
          attractive applications with user-friendly interactions.
        </p>
      </SlideReveal>

      <div className="flex flex-row gap-5 mt-5">
        <Reveal delay={0.5} duration={0.5}>
          <Button
            className="bg-[#0e1111] border-[1px] border-slate-600 text-[15px] font-ghaly rounded-sm"
            variant={"outline"}
          >
            <Link href={"/about"}>More about me</Link>
          </Button>
        </Reveal>

        {/* Work Status and Resume */}
        <StatusAndResume />
      </div>
    </div>
  );
}
