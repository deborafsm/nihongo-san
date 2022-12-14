import React from 'react'
import img from '../../img/img_card.jpg'
import { FLIP_CONTAINER, FLIPER, FLIP_FOOTER, FRONT, BACK, H1, ContainerImg, ContainerTitle } from '../../style/CardStyle.js'

function Card({ HIRAGANA, ROMAJI }) {
  return (
    <>


      <FLIP_CONTAINER className="flip-container">
        {/* <input type='checkbox' className="sw"></input> */}
        <FLIPER className="flipper">
          <FRONT className="front">
            <ContainerImg>
              {/* <img src={img} alt="" /> */}
              <ContainerTitle>
                <H1>{HIRAGANA}</H1>
              </ContainerTitle>
            </ContainerImg>
          </FRONT>
          <BACK className="back">
            <ContainerImg>
              {/* <img src={img} alt="" /> */}
              <ContainerTitle>
                <H1>{ROMAJI}</H1>
              </ContainerTitle>
            </ContainerImg>
          </BACK>
        </FLIPER>
       
      </FLIP_CONTAINER>

    </>

  )
}

export default Card