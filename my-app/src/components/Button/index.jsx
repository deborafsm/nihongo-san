import React from "react";
import seta from "../../img/img_web/seta-esquerda.png";
export default function index() {
  return (
    <div>
      <div class="container-button">
        <a class="button-img" href="/cards">
          <img src={seta} alt="" />
        </a>
      </div>
    </div>
  );
}
