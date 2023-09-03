import { useElementSize, useViewportSize } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

type ScrollTextProps = {
  text: string;
  containerRef: React.RefObject<HTMLDivElement>;
};

const ScrollText: React.FC<ScrollTextProps> = ({
  text,
  containerRef,
}) => {
  const containerScroll = useScroll({
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const { height } = useViewportSize();
  const contentSize = useElementSize();

  const scrollTextYMotionValue = useTransform(
    containerScroll.scrollY,
    [0, height * 1.5],
    [0, contentSize.height]
  );

  const scrollTextOpacityMotionValue = useTransform(
    scrollTextYMotionValue,
    [0, contentSize.height / 2],
    [1, 0]
  );

  return (
    <motion.div
      ref={contentSize.ref}
      style={{
        x: "-50%",
        y: scrollTextYMotionValue,
        opacity: scrollTextOpacityMotionValue,
      }}
      className="fixed bottom-0 left-1/2 h-16 -translate-x-1/2"
    >
      <p className="text-neutral-200">{text}</p>
      <span className="mx-auto mt-2 block h-full w-px bg-neutral-200" />
    </motion.div>
  );
};

export default ScrollText;
