import { container } from "@/src/lib/Types";
import { motion } from "framer-motion";

export default function SkillsContainer(props: container) {
  const { children } = props;

  return (
    <div>
      <motion.div
        className="px-5 lg:px-0"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-xl lg:text-2xl text-black dark:text-white font-bold">
          Current favorite tech stack/tools
        </h2>

        {/* Skill's Icons */}
      </motion.div>
      <motion.div
        className="px-5 lg:px-0"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
