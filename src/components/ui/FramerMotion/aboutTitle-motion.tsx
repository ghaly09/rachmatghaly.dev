import * as React from "react";
import { motion } from "framer-motion";

interface motionProps {
  children: React.ReactNode;
}

export default function AboutTitleMotion(props: motionProps) {
  const { children } = props;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
