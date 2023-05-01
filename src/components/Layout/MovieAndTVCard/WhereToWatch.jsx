import React, { useState } from "react";
import Chevron from "../../../assets/images/chevron_right.svg";

function WhereToWatch() {
  return (
    <div className="where-to-watch-div border-color-shadow mt">
      <div className="name">
        <h2>Where To Watch</h2>
        <img src={Chevron} alt="chevron image" className="closed" />
      </div>
    </div>
  );
}

export default WhereToWatch;
