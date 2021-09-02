import React from "react";
import info from "../../../data.json";

const cards = (props) => {
  const card = (
    <div className="card">
      <h4>{props.data.title}</h4>
      <img src={props.data.img} />
      <div className="hours">{props.data.hours}</div>
      <div className="format">{props.data.format}</div>
      <p>{props.data.description}</p>
    </div>
  );
  return card;
};

export default cards;
