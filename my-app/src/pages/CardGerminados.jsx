import React from 'react'
import CardGerm from '../components/Cards/Card_Flip_Styled'
import { ContainerCardSokuon } from '../style/CardPage'
import dataGerminados from '../json/sokuon.json'
import Title from '../components/Title/index';
export default function CardGerminados() {
    return (
        <>
        <Title text='Geminados (Sokuon)'/>
         
            <ContainerCardSokuon>
                {dataGerminados.map((germinado) => (
                    <CardGerm key={germinado.id} HIRAGANA={germinado.hiragana} ROMAJI={germinado.romaji} />
                ))}
            </ContainerCardSokuon>
        </>
    )
}
