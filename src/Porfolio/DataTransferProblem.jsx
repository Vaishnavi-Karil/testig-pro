import React from "react";
import "./DataTransfer.css";

export default function DataTransferProblem(props) {
  return (
    <div>
      <img
        onClick={props.click}
        className="imgg"
        src={props.source}
        alt="description"
      />
    </div>
  );
}
