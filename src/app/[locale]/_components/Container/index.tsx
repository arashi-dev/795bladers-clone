"use client";

import React, { useRef, createContext, useContext } from "react";

const ContainerRefContext = createContext<React.RefObject<HTMLDivElement>>({
  current: null,
});

export const useContainerRef = () => {
  return useContext(ContainerRefContext);
};

type ContainerProps = React.PropsWithChildren<{
  className?: string;
}>;

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={className}>
      <ContainerRefContext.Provider value={ref}>
        {children}
      </ContainerRefContext.Provider>
    </div>
  );
};

export default Container;
