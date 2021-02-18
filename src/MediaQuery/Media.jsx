import React from "react";
import root from "../asserts/Images/root.jpg";
import "./Media.css";

export default function Media() {
  return (
    <>
      <div className="container">
        <div className="Media">
          <img src={root} alt="root" className="img" />
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            saepe aperiam, rerum explicabo tempore quas hic suscipit ut neque
            quae et quam aut deleniti distinctio? Officiis ipsa recusandae ut
            veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Libero consequuntur aperiam ab consectetur accusamus amet, atque
            illum. Excepturi, eligendi distinctio. Itaque, perspiciatis quisquam
            esse est numquam quod fugit eius necessitatibus!
          </div>
        </div>
        <div className="Media">
          <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
            saepe aperiam, rerum explicabo tempore quas hic suscipit ut neque
            quae et quam aut deleniti distinctio? Officiis ipsa recusandae ut
            veniam. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Libero consequuntur aperiam ab consectetur accusamus amet, atque
            illum. Excepturi, eligendi distinctio. Itaque, perspiciatis quisquam
            esse est numquam quod fugit eius necessitatibus!
          </div>
          <img src={root} alt="root" className="img" />
        </div>
      </div>
    </>
  );
}
