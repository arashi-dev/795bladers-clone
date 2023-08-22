import React from "react";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import "~/styles/globals.css";

type LayoutProps = React.PropsWithChildren<{
  params: {
    locale: string;
  };
}>;

const Layout: React.FC<LayoutProps> = ({ children, params }) => {
  const locale = useLocale();

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang="en">
      <body className="no-scrollbar">{children}</body>
    </html>
  );
};

export default Layout;
