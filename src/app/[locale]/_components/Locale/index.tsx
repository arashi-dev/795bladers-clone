"use client";

import React, { createContext, useContext, useMemo } from "react";

const LocaleContext = createContext({
  locale: "",
});

export const useAppLocale = () => {
  return useContext(LocaleContext);
};

type LocaleProviderProps = React.PropsWithChildren<{
  locale: string;
}>;

const LocaleProvider: React.FC<LocaleProviderProps> = ({
  locale,
  children,
}) => {
  const value = useMemo(
    () => ({
      locale,
    }),
    [locale]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
};

export default LocaleProvider;
