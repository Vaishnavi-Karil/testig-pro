import React from "react";
import root from "../asserts/Images/root.jpg";
import "../Components/Home.css";
export default function Home() {
  return (
    <div>
      <h1>Home Component </h1>
      <div>
        <div className="card-wrapper">
          <img src={root} alt="description" />
        </div>
        <div className="text-wrapper item">
          <span>i -phone</span>
          <span>price : $1000.0 </span>
        </div>
        <div>
          <button>addToCart</button>
        </div>
      </div>
    </div>
  );
}
