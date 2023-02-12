import React from "react";
import Card from "../components/Cards/CardMain";
import { ContainerCardSokuon } from "../style/CardPage";
import { animais } from "../json/animais";
export default function CardAnimals() {
  return (
    <>
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
