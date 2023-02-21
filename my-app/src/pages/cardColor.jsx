import React from 'react'
import CardC from '../components/Cards/CardMain'
import { ContainerCardSokuon } from '../style/CardPage'
import Title from '../components/Title/index'
// import aka from '../../img/aka.png'
import iro from '../json/iro.json'
export default function CardColor() {
    return (
        <>
        <Title text='いろ'/>
          
            <ContainerCardSokuon>
                {iro.map((iro) => (

                    <CardC key={iro.id} HIRAGANA={iro.hiragana} img={iro.img} ESC={iro.romaji}/>
                ))}

            </ContainerCardSokuon>
        </>
    )
}
