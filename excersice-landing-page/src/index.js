import React from "react";
import ReactDOM from "react-dom";
import data from "../data.json";
import navbar from "./components/navbar";
import header from "./components/header";
import bootcamps from "./components/bootcamps";

const App = (
  <div>
    {navbar}
    {header}
    {bootcamps}
  </div>
);

ReactDOM.render(App, document.getElementById("app"));
