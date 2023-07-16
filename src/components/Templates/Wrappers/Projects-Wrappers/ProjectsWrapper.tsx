import * as React from "react";
import { motion } from "framer-motion";
import { wrapper } from "@/src/lib/Types";

export default function ProjectsWrapper({ children }: wrapper) {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return <motion.li variants={item}>{children}</motion.li>;
}
