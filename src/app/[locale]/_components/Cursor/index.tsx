"use client";

import { useMouse } from "@mantine/hooks";
import clsx from "clsx";
import React, { createContext, useContext, useMemo, useState } from "react";
import { BiExpandHorizontal } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";

type Cursors = "default" | "drag-x" | "to-right";

const CursorContext = createContext<{
  setCursor: React.Dispatch<React.SetStateAction<Cursors>>;
  cursor: Cursors;
}>({
  cursor: "default",
  setCursor: () => {
    throw new Error("not implemented");
  },
});

export const useCursor = () => {
  return useContext(CursorContext);
};

const CursorProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [cursor, setCursor] = useState<Cursors>("default");

  const { x, y } = useMouse({ resetOnExit: true });

  return (
    <CursorContext.Provider
      value={useMemo(() => ({ setCursor, cursor }), [cursor])}
    >
      <div
        style={{ left: x, top: y }}
        className={clsx(
          "pointer-events-none fixed z-[9999] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white transition",
          {
            "opacity-0": x === 0 && y === 0,
            "scale-[.2]": cursor === "default",
            "scale-100": cursor === "drag-x" || cursor === "to-right",
          }
        )}
      >
        {cursor === "drag-x" && <BiExpandHorizontal className="text-2xl" />}
        {cursor === "to-right" && <BsArrowRight className="text-2xl" />}
      </div>

      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;
