import clsx from "clsx";
import React from "react";

type ArgumentTextProps = React.PropsWithChildren<{
  className?: string;
}>;

const ArgumentText: React.FC<ArgumentTextProps> = ({ children, className }) => {
  return (
    <h3
      className={clsx(
        "justify-self-end text-[25vw]/[1.2] font-bold -tracking-[.02em] text-neutral-200 sm:text-[10vw]/[1.2]",
        className
      )}
    >
      {children}
    </h3>
  );
};

export default ArgumentText;
