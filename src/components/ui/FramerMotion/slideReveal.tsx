import { motion, useAnimation, useInView } from "framer-motion";
import * as React from "react";

interface RevealProps {
  children: JSX.Element;
  className?: string;
  width?: "fit-content" | "100%";
  delay: number;
  duration: number;
}

export const SlideReveal = ({
  children,
  className,
  width = "fit-content",
  delay = 0.2,
  duration = 0.5,
}: RevealProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  React.useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", width }}
      className={className}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: duration,
          delay: delay,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "rgb(61,224,102)",
          zIndex: 20,
        }}
      />
    </div>
  );
};
