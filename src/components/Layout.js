import React from "react";

const Layout = ({ children, grid }) => {
  return <div className={grid ? "grid grid-cols-3 gap-4" : "flex flex-col gap-4"}>{children}</div>;
};

export default Layout;
