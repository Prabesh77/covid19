import React from "react";
import { Link } from "react-router-dom";

import fb from "../../facebook.svg";
import Star from "../../Star.png";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={Star} alt="a" className="star" />
        <h4 className="logo-text">CovidCount</h4>
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
          <br />
          <a
            href="https://www.facebook.com/sumeet.dahal.35"
            style={{ textDecoration: "none" }}>
            <img src={fb} alt="fb" />
            &nbsp; Sumit Dahal
          </a>
        </p>
      </div>
    </div>
  );
};

export default Header;
