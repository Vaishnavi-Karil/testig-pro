import React, { useEffect, useState } from "react";

export default function Hooksone() {
  const [count, countState] = useState(0);
  useEffect(() => {
    console.warn(count);
  }, [count === 5]);
  //   useEffect always takes function

  function fun() {
    countState(count + 1);
  }
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={fun}>click me</button>
    </div>
  );
}
