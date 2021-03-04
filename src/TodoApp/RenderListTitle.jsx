import React from "react";

export default function RenderListTitle(props) {
  //   document.write("hello world");

  return (
    <div>
      <span>
        <li>
          <span>{props.id}</span>
          <span> {props.title}</span>
          <span>{props.done}</span>
        </li>
      </span>
    </div>
  );
}
