import React from "react";
import "../css/box.css"
function Box({ img, category }) {
  return (
   
      <div className="mycard">

        <img  src={img} alt={category} />
        <div>{category}</div>
      </div>
   
  );
}

export default Box;