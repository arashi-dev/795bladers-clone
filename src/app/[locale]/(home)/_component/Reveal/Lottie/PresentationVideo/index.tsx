import { useElementSize } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import { RxTriangleRight } from "react-icons/rx";

type PresentationVideoProps = {
  text: string;
  containerRef: React.RefObject<HTMLDivElement>;
};

const PresentationVideo: React.FC<PresentationVideoProps> = ({
  text,
  containerRef,
}) => {
  const containerScroll = useScroll({
    target: containerRef,
    offset: ["0.065 0", "0.6 0"],
  });

  const contentSize = useElementSize();

  const yMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0, 0.25, 0.75, 1],
    [contentSize.height / 2, 0, 0, -(contentSize.height / 2)]
  );

  const opacityMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0, 1, 1, 0]
  );

  return (
    <motion.div
      ref={contentSize.ref}
      style={{
        x: "-50%",
        y: yMotionValue,
        opacity: opacityMotionValue,
      }}
      className="fixed bottom-10 left-1/2 flex h-14 -translate-x-1/2 items-center justify-center gap-4 whitespace-nowrap rounded-full bg-neutral-50 px-8 tracking-widest"
    >
      <RxTriangleRight className="text-2xl" />
      <p className="text-sm font-bold uppercase text-zinc-800">{text}</p>
    </motion.div>
  );
};

export default PresentationVideo;
