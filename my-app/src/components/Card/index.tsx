import React from 'react'
import './style.css';

export interface CardProps {
  id: string;
  flipped?: boolean;
  back: string;
  handleClick?: (id: string) => void;
}
export function Card({ flipped = false, back, handleClick, id }: CardProps) {
  const cardClass = ['card_conteudo'];
  flipped && cardClass.push('card_conteudo--flipped')
  const handleClickFn = () => {
    if (handleClick) {
      flipped = true;
      handleClick(id);
    }
  }
  return (
    <>
    <div className="bodyCard">

      <div className="container">

        <div className="card" onClick={handleClickFn}>
          <div className={cardClass.join(' ')}>
            <div className="card_face card_face--front">
              ?
            </div>
            <div className="card_face card_face--back">
              {back}
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
