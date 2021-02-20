import React from "react";
import "./ShowImageShowOne.css";

export default function ShowImageShowOne(props) {
  return (
    <div>
      <img src={props.source} alt="description" className="img" />
    </div>
  );
}
