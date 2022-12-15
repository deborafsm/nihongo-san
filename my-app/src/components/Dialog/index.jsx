import React, { useState } from "react";
import style from "./style.css";
function Dialog(props) {
  return (
    <>
    <br />
      <div className="frase-style">
        <div className="frase-style-hiragana">
          {/* <p>わたしはぶらじるじんです</p> */}
          <p>{props.text}</p>
        </div>
        {/* <p>私はブラジル人です</p> */}
        <p>{props.fraseh}</p>
      </div>
    </>
  );
}

export default Dialog;
