"use client";

import { useElementSize, useMergedRef, useViewportSize } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import React, { useRef } from "react";

type PhotoProps = {
  imageSrc: ImageProps["src"];
  rotation: number;
};

const Photo: React.FC<PhotoProps> = ({ imageSrc, rotation }) => {
  const ref = useRef<HTMLDivElement>(null);

  const elemSize = useElementSize();
  const { height } = useViewportSize();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [rotation, rotation * 0.4, 0]
  );

  return (
    <div
      style={{
        top:
          height * 0.5 -
          elemSize.height * 0.5 -
          (height - elemSize.height) * 0.5,
      }}
      className="sticky flex h-screen items-center justify-center"
    >
      <motion.div ref={useMergedRef(ref, elemSize.ref)} style={{ rotateZ }}>
        <Image
          src={imageSrc}
          alt=""
          className="max-h-[70vh] w-auto max-w-[110vw] object-cover sm:max-w-[50vw]"
        />
      </motion.div>
    </div>
  );
};

export default Photo;
