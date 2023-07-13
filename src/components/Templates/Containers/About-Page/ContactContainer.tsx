import { container } from "@/src/lib/utils/Types";
import { motion } from "framer-motion";

export default function ContactContainer(props: container) {
  const { children } = props;

  return (
    <motion.div
      className="px-5 lg:px-0 pt-20"
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
