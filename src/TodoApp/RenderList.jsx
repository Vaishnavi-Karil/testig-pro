import React from "react";

import ObjectTodo from "./ObjectTodo";
import RenderListTitle from "./RenderListTitle";
export default function RenderList() {
  console.log(ObjectTodo);
  console.log(ObjectTodo.List[0].title);
  const element = <h1>ToDo list </h1>;
  return (
    <div>
      {element}
      <ul>
        {ObjectTodo.List.map((todo, index) => (
          <RenderListTitle
            key={index}
            id={todo.id}
            title={todo.title}
            done={todo.done}
          />
        ))}
      </ul>
    </div>
  );
}
