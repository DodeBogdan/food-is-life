import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import nav from "./navbarData.js";

const NavBar = () => {
  return (
    <ul>
      {nav.map((data) => {
        const { id, path, name } = data;
        return (
          <li key={id}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                isActive ? "active navButtons" : "navButtons"
              }
            >
              {name}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavBar;
