import * as React from "react";
import { SlideReveal } from "../../ui/FramerMotion/slideReveal";
import { Button } from "../../ui/button";
import { BsFillFileEarmarkTextFill } from "react-icons/Bs";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

const animation = {
  hide: {
    x: -16,
    opacity: 0,
  },
  show: {
    x: 0,
    opacity: 1,
  },
};

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

  const shouldReduceMotion = useReducedMotion();

  let isFreeVariants = {
    hide: {
      x: 0,
      opacity: 1,
    },
    show: {
      x: -48,
      opacity: 0,
    },
  };

  if (shouldReduceMotion) {
    isFreeVariants = {
      hide: {
        x: 0,
        opacity: 1,
      },
      show: {
        x: 0,
        opacity: 0,
      },
    };
  }

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
        <Button
          className="bg-[#0e1111] border-[1px] border-slate-600 font-ghaly rounded-sm"
          variant={"outline"}
        >
          More about me
        </Button>

        <Link
          href={"https://www.linkedin.com/in/rachmat-ghaly/"}
          target="_blank"
          className="flex flex-row items-center font-ghaly font-semibold cursor-pointer text-slate-300 hover:text-white"
        >
          <motion.div
            className={clsx("flex gap-2")}
            initial="hide"
            animate="show"
          >
            <motion.div
              variants={animation}
              transition={{ delay: 2.8 }}
              className={clsx("relative z-10")}
            >
              <motion.div
                variants={isFreeVariants}
                transition={{ delay: 4 + 1.5, duration: 0.4 }}
              >
                AVAILABLE FOR HIRE
              </motion.div>

              <motion.div
                initial={{ x: -48, opacity: 0, pointerEvents: "none" }}
                animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
                transition={{ delay: 4 + 1.6, duration: 0.4 }}
                className={clsx(
                  "absolute top-0 left-0 flex flex-row items-center"
                )}
              >
                <BsFillFileEarmarkTextFill className="mr-2 h-[18px] w-[18px]" />{" "}
                RESUME
              </motion.div>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}
