import React from 'react'
import CardYouon from '../components/Cards/Card_Flip_Styled'
import dataDigrafos from '../json/youon.json'
import { ContainerCardYouon } from '../style/CardPage'
import Title from '../components/Title/index';
export default function CardDigrafos() {
   
    return (
        <>
           <Title text="Dígrafos (Youon)" colorTitle="pink"/>
            <ContainerCardYouon>
                {dataDigrafos.map((digrafo) => (
                    <CardYouon key={digrafo.id} HIRAGANA={digrafo.hiragana} ROMAJI={digrafo.romaji} />
                ))}
            </ContainerCardYouon>
        </>
    )
}
