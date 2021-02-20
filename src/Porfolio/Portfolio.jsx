import React, { useState } from "react";
import root from "../asserts/Images/root.jpg";
import DataTransferProblem from "./DataTransferProblem";
import { Button } from "@material-ui/core";
import ShowImageShowOne from "./ShowImageShowOne";
// import { ImageSearchTwoTone } from "@material-ui/icons";
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
    showImageShowOne: false,
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
        { id: 6, src: root },
      ],
      ShowPerson: true,
      showImageShowOne: false,
    });
  }

  function ImageShowOne(ImageShowOneIndex, sorcess) {
    let data = ImageShowOneIndex;
    let sorc = sorcess;

    console.log(data, sorc);

    displayComponent({
      Images: [{ id: data, src: sorc }],
      showImageShowOne: true,
    });
  }
  return (
    <div>
      <Button color="primary" onClick={onClickingHandler} variant="outlined">
        Portfolio
      </Button>

      <div>
        {display.ShowPerson === true
          ? display.Images.map((i, index) => (
              <DataTransferProblem
                click={() => {
                  ImageShowOne(index, i.src);
                }}
                key={i.id}
                source={i.src}
              />
            ))
          : null}

        {display.showImageShowOne === true
          ? display.Images.map((i) => (
              <ShowImageShowOne key={i.id} source={i.src} />
            ))
          : null}
      </div>
    </div>
  );
}
