import React, { useState } from 'react'
import img from '../../img/logo.svg'
import { CardTop, CardBody, CardBottom, Container, CardBodyBack } from './styleCardClick'
import s from './stylC.css';
import { FaClone } from 'react-icons/fa';
function Card() {
  const [click, setClick] = useState(0)
  console.log(click)
  // function clickMe() {
  //   btn = document.getElementById("switchB");
  //   console.log(btn)
  // }
  return (
    <>
      <input type="checkbox" id="switch" />
      <label class="flip-container" for="switch" >
        <div class="flipper">
          <div class="front">
            <img src="https://picsum.photos/id/411/300/200" />
          </div>
          <div class="back">
            <img src="https://picsum.photos/id/249/300/200" />
          </div>
        </div>
        <div className='button-flipper'>
          <button onClick={() => setClick(click)}><FaClone size={20} /></button>
        </div>
      </label>


    </>




  )
}

export default Card