import React from "react";
import Footer from "./footer";
import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <div className="">
      <Navbar />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
