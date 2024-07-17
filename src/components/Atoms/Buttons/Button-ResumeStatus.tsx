import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { BiLinkExternal } from "react-icons/bi";

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
    <motion.div
      className={clsx(
        "flex flex-row gap-2 items-center font-ghaly font-semibold"
      )}
      initial="hide"
      animate="show"
    >
      <motion.div
        variants={animation}
        transition={{ delay: 1.2 }}
        className={clsx("relative z-10")}
      >
        <motion.div
          variants={isFreeVariants}
          transition={{ delay: 3 + 1.5, duration: 0.4 }}
          className="flex flex-row items-center text-sm md:text-[15px] text-gray-600 dark:text-teal-300 cursor-default"
        >
          <span className="relative flex h-4 w-4 mr-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 dark:bg-white opacity-75"></span>
            <span className="relative inline-flex top-1 left-1 rounded-full h-2 w-2 bg-violet-600 dark:bg-teal-300"></span>
          </span>
          AVAILABLE FOR HIRE
        </motion.div>
        <Link href={"/about"} passHref>
          <motion.div
            initial={{ x: -48, opacity: 0, pointerEvents: "none" }}
            animate={{ x: 0, opacity: 1, pointerEvents: "auto" }}
            transition={{ delay: 3 + 1.6, duration: 0.4 }}
            className={clsx(
              "absolute top-0 left-0 flex flex-row items-center cursor-pointer text-sm md:text-[15px] text-gray-600 dark:text-slate-300 dark:hover:text-white hover:text-[rgb(27,197,191)]"
            )}
          >
            <BiLinkExternal className="mr-2 h-[18px] w-[18px]" /> MORE ABOUT ME
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
}
