"use client";

import React, { useRef, createContext, useContext } from "react";

const ContainerRefContext = createContext<React.RefObject<HTMLDivElement>>({
  current: null,
});

export const useContainerRef = () => {
  return useContext(ContainerRefContext);
};

const Container: React.FC<React.PropsWithChildren> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="relative my-[20vh] h-screen justify-between"
    >
      <ContainerRefContext.Provider value={ref}>
        {children}
      </ContainerRefContext.Provider>
    </div>
  );
};

export default Container;
