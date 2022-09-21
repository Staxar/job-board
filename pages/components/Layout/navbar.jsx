import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/docs/5.0/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          ></Image>
          Bootstrap
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
