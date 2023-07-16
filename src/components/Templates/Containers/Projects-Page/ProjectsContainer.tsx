import * as React from "react";
import { motion } from "framer-motion";
import { container } from "@/src/lib/Types";

export default function ProjectsContainer({ children }: container) {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.ul
      className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-between items-start px-5 lg:px-0 mt-3"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.ul>
  );
}
