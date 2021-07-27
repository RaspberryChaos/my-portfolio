import React from "react";
import Navbar from "./Navbar";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div>
      <Meta />
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
