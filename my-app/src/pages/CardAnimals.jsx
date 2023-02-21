import React from "react";
import Card from "../components/Cards/CardMain";
import { ContainerCardSokuon } from "../style/CardPage";
import { animais } from "../json/animais";
import Title from '../components/Title/index'
export default function CardAnimals() {
  return (
    <>
    <Title text = "Animais"></Title>
      <ContainerCardSokuon>
        {animais.map((animal) => (
          <Card
            key={animal.id}
            HIRAGANA={animal.jpn}
            PTB={animal.pt}
            ESC={animal.esc}
            img={animal.img}
          ></Card>
        ))}
      </ContainerCardSokuon>
    </>
  );
}
