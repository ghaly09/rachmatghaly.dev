import { wrapper } from "@/src/lib/utils/Types";
import { motion } from "framer-motion";

export default function EducationWrapper(props: wrapper) {
  const { children } = props;

  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
