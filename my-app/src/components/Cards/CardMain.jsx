import React from "react";
import img from "../../img/img_card.jpg";
import {
  FLIP_CONTAINER,
  FLIPER,
  FLIP_FOOTER,
  FRONT,
  BACK,
  H3,
  H2,
  ContainerImg,
  ContainerTitle,
} from "../../style/CardStyle.js";

function Card({ HIRAGANA, img, ESC, PTB }) {
  return (
    <>
      <FLIP_CONTAINER className="flip-container">
        {/* <input type='checkbox' className="sw"></input> */}
        <FLIPER className="flipper">
          <FRONT className="front">
            <ContainerImg>
              <img src={img} className="img" />
              <ContainerTitle></ContainerTitle>
            </ContainerImg>
            <H2>{PTB}</H2>
          </FRONT>
          <BACK className="back">
            <ContainerImg>
              {/* <img src={img} alt="" /> */}
              <ContainerTitle>
                <H3>{HIRAGANA}</H3>
                <H2>{ESC}</H2>
                
              </ContainerTitle>
            </ContainerImg>
          </BACK>
        </FLIPER>
      </FLIP_CONTAINER>
    </>
  );
}

export default Card;
