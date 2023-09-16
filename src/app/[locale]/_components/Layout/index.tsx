import React from "react";
import Header from "./Header";
import InfoBox from "../InfoBox";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <InfoBox />
    </>
  );
};

export default Layout;
