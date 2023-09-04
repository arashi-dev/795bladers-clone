"use client";

import { useMergedRef } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { forwardRef, useRef } from "react";

type ScrollTransitionProps = React.PropsWithChildren<{
  className?: string;
  from: number;
  to: number;
  withOpacity?: boolean;
}>;

const ScrollTransition = forwardRef<HTMLDivElement, ScrollTransitionProps>(
  ({ children, className, from, to, withOpacity = false }, _ref) => {
    const ref = useRef<HTMLDivElement>(null);

    const mergedRef = useMergedRef(ref, _ref);

    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [from, to]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

    return (
      <motion.div
        ref={mergedRef}
        style={{ y, opacity: withOpacity ? opacity : 1 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }
);

ScrollTransition.displayName = "ScrollTransition";

export default ScrollTransition;
