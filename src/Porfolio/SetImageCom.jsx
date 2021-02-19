import React from "react";

export default function SetImageCom(props) {
  return (
    <div>
      <img src={props.getsrc} key={props.getid} alt="img description" />
    </div>
  );
}
