import React, { useState } from "react";
import "./DataTransfer.css";
import SetImageCom from "./SetImageCom";

export default function DataTransferProblem(props) {
  const [img, setImage] = useState({
    Images: [{ id: null, scr: null }],
    show: false,
  });

  function fun(id, src) {
    console.log(id + "" + src);
    // const idd = id;
    // const srcc = src;

    // if (idd === props.id && srcc === props.source) {
    setImage({
      Images: [{ id: props.id, src: props.source }],
      show: true,
    });
    // }
  }
  return (
    <>
      <div>
        <img
          key={props.id}
          onClick={() => fun(props.id, props.source)}
          src={props.source}
          alt="root1"
          className="img"
        />
        {img.show === true ? (
          <SetImageCom getscr={img.Images.src} getid={img.Images.id} />
        ) : null}
      </div>
    </>
  );
}
