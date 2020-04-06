import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Navstyle = styled.nav`
  height: 30px;
  width: 100%;
  background: #222;

  ul {
    list-style: none;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-top: 1px solid #333;

    a {
      color: #eee;
      text-decoration: none;
      padding-bottom: 2.4px;
      transition: border-bottom 0.4s ease;
    }
    a.active {
      border-bottom: 2px solid #eee;
    }
  }
`;

const Navbar = () => {
  return (
    <Navstyle>
      <ul>
        <li>
          <NavLink exact to="/">
            World Stats
          </NavLink>
        </li>
        <li>
          <NavLink to="/world">All Countries</NavLink>
        </li>
        <li>
          <NavLink to="/news">Latest News</NavLink>
        </li>
      </ul>
    </Navstyle>
  );
};

export default Navbar;
