"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import _frames from "./frames.json";
import Image from "next/image";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useElementSize } from "@mantine/hooks";
import { useContainerRef } from "~/app/[locale]/_components/Container";

type Frame = {
  id: string;
  w: number;
  h: number;
  u: string;
  p: string;
  e: number;
};

type Frames = {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: Frame[];
};

const frames = _frames as Frames;

const Images: React.FC = () => {
  const containerRef = useContainerRef();
  const elemSize = useElementSize();
  const imagesRef = useRef(
    new Array<HTMLImageElement | null>(frames.assets.length).fill(null)
  );

  const containerScroll = useScroll({
    layoutEffect: false,
    target: containerRef,
    offset: ["start center", "end start"],
  });

  const indexMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0, .3],
    [0, frames.assets.length - 1]
  );

  const [index, setIndex] = useState(0);

  useMotionValueEvent(indexMotionValue, "change", (v) =>
    setIndex(Math.ceil(v))
  );

  const opacityScroll = useScroll({
    layoutEffect: false,
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    opacityScroll.scrollYProgress,
    [0, 0.3, 0.55, 0.7],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    imagesRef.current.forEach((img) => img && (img.style.display = "none"));

    const target = imagesRef.current[index];

    if (target) {
      target.style.display = "block";
    }
  }, [index]);

  return (
    // <div ref={containerRef} className="h-[500vh]">
      <motion.div
        ref={elemSize.ref}
        style={{ opacity }}
        className="sticky top-0 -z-10 h-screen overflow-hidden"
      >
        <div className="relative h-screen w-screen">
          {useMemo(
            () =>
              frames.assets.map((img, i) => (
                <Image
                  key={img.id}
                  ref={(ref) => (imagesRef.current[i] = ref)}
                  src={img.p}
                  alt=""
                  className="hidden object-cover"
                  fill
                />
              )),
            []
          )}
        </div>
      </motion.div>
    // </div>
  );
};

export default Images;
