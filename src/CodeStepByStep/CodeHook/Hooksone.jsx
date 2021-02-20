import React, { useState } from "react";

export default function Hooksone() {
  const [count, countState] = useState(0);
  // useEffect(() => {
  //   console.warn(count);
  // }, [count == 5]);
  //   useEffect always takes function

  function fun() {
    countState(count + 1);
  }
  return (
    <div>
      <h1> {count}</h1>
      <button onClick={fun(1)}>click me</button>
    </div>
  );
}
