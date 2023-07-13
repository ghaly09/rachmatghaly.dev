import { wrapper } from "@/src/lib/utils/Types";
import { motion } from "framer-motion";

export default function EducationWrapper(
  props: wrapper,
  delay: number = 0.6,
  duration: number = 0.8
) {
  const { children } = props;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: duration, delay: delay }}
    >
      {children}
    </motion.div>
  );
}
