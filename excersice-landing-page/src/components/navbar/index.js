import info from "../../../data.json";
import React from "react";
import "./navbar.css";

const navbar = (
  <nav>
    <img className="imgNavbar" src={info.navbar.img} />
    {info.navbar.links.map((link) => (
      <a href="$">{link}</a>
    ))}
  </nav>
);

export default navbar;
