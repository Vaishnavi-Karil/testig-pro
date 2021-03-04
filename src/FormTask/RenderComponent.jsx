import React from "react";

export default function RenderComponent(props) {
  return (
    <div>
      <h1>{props.dataEmail}</h1>
      <h1> {props.dataPassword}</h1>
    </div>
  );
}
