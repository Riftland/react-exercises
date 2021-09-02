import info from "../../../data.json";
import React from "react";
import "./bootcamps.css";
import Cards from "../cards";

const cardNames = ["cs", "ds", "fs", "dm", "ux"];

const bootcamps = (
  <div>
    <h5>{info.bootcamps.title}</h5>
    <h1 className="headerBootcamps">{info.bootcamps.header}</h1>
    <div className="cards">
      {cardNames.map((cardName) => (
        <Cards key={cardName} data={info.bootcamps[cardName]} />
      ))}
    </div>
  </div>
);

export default bootcamps;
