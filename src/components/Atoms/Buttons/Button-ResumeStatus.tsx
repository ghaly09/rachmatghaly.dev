import React from "react";
import { BsFillFileEarmarkTextFill } from "react-icons/Bs";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import clsx from "clsx";

export default function StatusAndResume() {
  const shouldReduceMotion = useReducedMotion();

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
    <Link
      href={"https://www.linkedin.com/in/rachmat-ghaly/"}
      target="_blank"
      className="flex flex-row items-center font-ghaly font-semibold cursor-pointer text-slate-300 hover:text-white"
    >
      <motion.div className={clsx("flex gap-2")} initial="hide" animate="show">
        <motion.div
          variants={animation}
          transition={{ delay: 1.3 }}
          className={clsx("relative z-10")}
        >
          <motion.div
            variants={isFreeVariants}
            transition={{ delay: 4 + 1.5, duration: 0.4 }}
            className="flex flex-row items-center"
          >
            <span className="relative flex h-4 w-4 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex top-1 left-1 rounded-full h-2 w-2 bg-[rgb(0,218,210)]"></span>
            </span>
            AVAILABLE FOR HIRE
          </motion.div>

          <motion.div
            initial={{ x: -48, opacity: 0, pointerEvents: "none" }}
            animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
            transition={{ delay: 4 + 1.6, duration: 0.4 }}
            className={clsx("absolute top-0 left-0 flex flex-row items-center")}
          >
            <BsFillFileEarmarkTextFill className="mr-2 h-[18px] w-[18px]" />{" "}
            RESUME
          </motion.div>
        </motion.div>
      </motion.div>
    </Link>
  );
}
