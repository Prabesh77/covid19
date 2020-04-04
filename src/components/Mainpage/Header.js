import React from "react";
import { Link } from "react-router-dom";

import LOGO from "../../LOGO.svg";
import fb from "../../facebook.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={LOGO} alt="a" />
      </Link>
      <div className="developer">
        <p>
          Developed with{" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Love_Heart_symbol.svg/1111px-Love_Heart_symbol.svg.png"
            alt="love"
          />{" "}
          by <br />
          <a
            href="https://www.facebook.com/prabesh.regmi.7"
            style={{ textDecoration: "none" }}>
            <img src={fb} alt="fb" />
            &nbsp; Prabesh Regmi
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
