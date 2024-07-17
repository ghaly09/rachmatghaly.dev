import * as React from "react";
import { SlideReveal } from "../../ui/FramerMotion/slideReveal";
import { Button } from "../../ui/button";
import StatusAndResume from "../Buttons/Button-ResumeStatus";
import { Reveal } from "../../ui/FramerMotion/onReveal";
import Link from "next/link";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import clsx from "clsx";
import { homeConfig } from "@/src/config/home-config";
import { IconTech } from "../Icons/IconTech";

export default function HomeDesc() {
  const [ghalyEffect, setGhalyEffect] = React.useState("");
  const [hoverSocialMedia, setHoverSocialMedia] = React.useState<any>({
    Figma: "",
    GitHub: "",
  });

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
    <div className="my-32 px-5 lg:px-0">
      <SlideReveal delay={0.2} duration={0.5}>
        <h2 className="text-2xl md:text-5xl text-[#0e1111] dark:text-white font-bold">
          Hi!
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.3} duration={0.5}>
        <h2 className="text-3xl md:text-6xl text-[#0e1111] dark:text-white font-bold">
          I&apos;m Rachmat
          <span
            className={`font-ghaly ${ghalyEffect} px-2 text-transparent focus:text-transparent bg-clip-text color-ghaly`}
          >
            Ghaly
          </span>
        </h2>
      </SlideReveal>
      <SlideReveal delay={0.4} duration={0.5}>
        <p className="text-sm md:text-xl max-w-2xl pb-5 text-gray-600 dark:text-slate-200 font-base font-sans mt-5">
          a <span className="font-semibold">Front-End Engineer</span> who loves
          clean design and modern UI design activities to build visually
          attractive applications with user-friendly interactions.
        </p>
      </SlideReveal>

      <div className="flex flex-row gap-5 mt-5">
        <Reveal delay={0.5} duration={0.5}>
          <Button
            className="relative z-30 dark:bg-[#0e1111] border-[1px] border-slate-600 text-sm sm:text-[15px] font-ghaly font-semibold rounded-sm cursor-pointer dark:hover:bg-gray-800 hover:duration-300"
            variant={"outline"}
          >
            <Link
              href={homeConfig.resume}
              target="_blank"
              className={clsx("flex flex-row items-center")}
              passHref
            >
              <BsFillFileEarmarkTextFill className="mr-2 h-[18px] w-[18px]" />{" "}
              Resume
            </Link>
          </Button>
        </Reveal>

        {/* Work Status and Resume */}
        <StatusAndResume />
      </div>

      {/* check it out */}
      <Reveal delay={0.7} duration={0.5}>
        <div className="flex gap-5 mt-8">
          {homeConfig.iconsLink.map((data: any, index: number) => {
            return (
              <Link
                href={data.directLink}
                target="_blank"
                key={index}
                className={`flex flex-row gap-1 items-center text-[16px] cursor-pointer font-semibold text-gray-500 dark:text-slate-400 hover:text-gray-900`}
                onMouseOver={() =>
                  setHoverSocialMedia({ [data.iconName]: data.color })
                }
                onMouseOut={() => setHoverSocialMedia({ [data.iconName]: "" })}
                passHref
              >
                <IconTech
                  icon={data.icon}
                  iconName={data.iconName}
                  className={`bg-transparent pr-[1px] text-[18px] duration-500 ${
                    hoverSocialMedia[data.iconName]
                  }`}
                />
                <p className="dark:hover:text-white duration-500">
                  {data.title}
                </p>
              </Link>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
