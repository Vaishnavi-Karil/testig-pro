import React, { useState } from "react";
import "./DataTransfer.css";
import setImageCom from "./setImageCom";

export default function DataTransfer(props) {
  const [img, setImage] = useState({
    Images: [{ id: null, scr: null }],
    show: false,
  });

  function fun() {
    setImage({
      Images: [{ id: props.id, src: props.source }],
      show: true,
    });
  }
  return (
    <>
      <div>
        <img
          key={props.id}
          onClick={fun}
          src={props.source}
          alt="root1"
          className="img"
        />
        {img.show === true
          ? <h1>this is use to display one image </h1> || (
              <setImageCom source={img.Images.src} data={img.Images.id} />
            )
          : null}
      </div>
    </>
  );
}
