import info from "../../../data.json";
import React from "react";
import "./header.css";

const header = (
  <div className="header">
    <div className="headerText">
      <h1>{info.header.title}</h1>
      <h4>{info.header.subheading}</h4>
      <p>{info.header.paragraph}</p>
      <button>{info.header.button}</button>
    </div>
    <img className="imgHeader" src={info.header.img} />
  </div>
);

export default header;
