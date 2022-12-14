import React, { useState } from 'react';

import Card_Flip from '../components/Cards/Card_Flip_Styled';
import Title from '../components/Title/index';
import Content from '../layout/Container/Container'
import hiramaji from '../json/hiragana.json'
import { ContainerCard } from '../style/CardPage.js'
import CardClick from '../components/CardClick/Card'
function Card() {
  // const [hiragana, setHiragana] = useState({})
  // const [romaji, setRomaji] = useState({})

  return (
    <>
      <Title text='Vogais e monógrafos (Seion)' />

      <ContainerCard>
        {hiramaji.map((hr) => (
          hr.hiragana ? <Card_Flip key={hr.id} HIRAGANA={hr.hiragana} ROMAJI={hr.romaji} /> : null
        ))}
        {/* {hiramaji.map((hr) => (
        hr.hiragana ? <Card_Flip key={hr.id} HIRAGANA="teste" ROMAJI="teste" /> : null
      ))} */}

        {/* <CardClick /> */}
      </ContainerCard>
    </>

  )
}

export default Card