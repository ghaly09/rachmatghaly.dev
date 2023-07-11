import * as React from "react";
import { motion } from "framer-motion";

interface motionProps {
  children: React.ReactNode;
}

export default function AboutDescMotion(props: motionProps) {
  const { children } = props;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.3,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
}
