import React from "react";
import Footer from "./footer";
import LayoutNavbar from "./navbar";

function Layout({ children }) {
  return (
    <>
      <LayoutNavbar />
      <div className="main">{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
