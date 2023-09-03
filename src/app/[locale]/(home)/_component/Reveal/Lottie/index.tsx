"use client";

import React, { useRef } from "react";
import LottieImage from "./Image";
import ScrollText from "./ScrollText";
import PresentationVideo from "./PresentationVideo";
import Caption from "./Caption";

type LottieProps = {
  scrollText: string;
  presentationVideoText: string;
  captionText: string;
};

const Lottie: React.FC<LottieProps> = ({
  scrollText,
  presentationVideoText,
  captionText,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative h-[400vh]">
      <LottieImage containerRef={containerRef} />

      <ScrollText containerRef={containerRef} text={scrollText} />

      <PresentationVideo
        containerRef={containerRef}
        text={presentationVideoText}
      />

      <Caption text={captionText} />
    </div>
  );
};

export default Lottie;
