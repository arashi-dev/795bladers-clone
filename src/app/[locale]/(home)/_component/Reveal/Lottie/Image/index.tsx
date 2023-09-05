import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import _frames from "./../frames.json";

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

type LottieImageProps = {
  containerRef: React.RefObject<HTMLDivElement>;
};

const LottieImage: React.FC<LottieImageProps> = ({ containerRef }) => {
  const imagesRef = useRef(
    new Array<HTMLImageElement | null>(frames.assets.length).fill(null)
  );
  const containerScroll = useScroll({
    target: containerRef,
    layoutEffect: false,
    offset: ["start center", "end start"],
  });

  const indexMotionValue = useTransform(
    containerScroll.scrollYProgress,
    [0, 0.3, 1],
    [0, frames.assets.length - 1, frames.assets.length - 1]
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

  const opacityMotionValue = useTransform(
    opacityScroll.scrollYProgress,
    [0, 0.08, 0.6, 0.9],
    [0.7, 1, 1, 0.05]
  );

  useEffect(() => {
    imagesRef.current.forEach((img) => img && (img.style.display = "none"));

    const target = imagesRef.current[index];

    if (target) {
      target.style.display = "block";
    }
  }, [index]);

  return (
    <motion.div
      style={{ opacity: opacityMotionValue }}
      className="sticky top-0 block h-screen w-full overflow-hidden"
    >
      <div className="relative h-full w-full">
        {useMemo(
          () =>
            frames.assets.map((img, i) => (
              <Image
                key={img.id}
                ref={(ref) => (imagesRef.current[i] = ref)}
                src={img.p}
                alt=""
                className="hidden object-cover"
                sizes="100vw"
                fill
              />
            )),
          []
        )}
      </div>
    </motion.div>
  );
};

export default LottieImage;
