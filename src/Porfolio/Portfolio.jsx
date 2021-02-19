import React, { useState } from "react";
import root from "../asserts/Images/root.jpg";
// import DataTransfer from "./DataTransfer";
import DataTransferProblem from "./DataTransferProblem";
import { Button } from "@material-ui/core";
export default function Portfolio() {
  const [display, displayComponent] = useState({
    Images: [
      { id: 1, src: null },
      { id: 2, src: null },
      { id: 3, src: null },
      { id: 4, src: null },
      { id: 5, src: null },
      { id: 6, src: null },
    ],
    ShowPerson: false,
  });

  console.log(Object);
  function onClickingHandler() {
    displayComponent({
      Images: [
        { id: 1, src: root },
        { id: 2, src: root },
        { id: 3, src: root },
        { id: 4, src: root },
        { id: 5, src: root },
        { id: 5, src: root },
      ],
      ShowPerson: true,
    });
  }
  return (
    <div>
      <Button color="primary" onClick={onClickingHandler} variant="outlined">
        Portfolio
      </Button>
      {/* <button onClick={onClickingHandler}> Portfolio</button> */}
      <div>
        {display.ShowPerson === true
          ? display.Images.map((i) => (
              <DataTransferProblem data={i.id} source={i.src} />
            ))
          : null}
      </div>
    </div>
  );
}
