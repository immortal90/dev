import React, { ReactNode } from "react";

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default Layout;
