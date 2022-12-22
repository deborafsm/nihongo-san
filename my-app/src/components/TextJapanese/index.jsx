import React, { useState } from "react";
import style from "./style.css";
function Frases(props) {
  return (
    <div>
      <div className="container-text">
        <p className="text-hira">{props.jpnTextHira}</p>
        <p className="text-roma">{props.jpnTextRMj}</p>
        <p className="text-pt">{props.jpnPt}</p>
      </div>
    </div>
  );
}
export default Frases;
