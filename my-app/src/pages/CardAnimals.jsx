import React from "react";
import Card from "../components/Cards/CardMain";
import { ContainerCardSokuon } from "../style/CardPage";
import { animais } from "../json/animais";
import Title from "../components/Title/index";
import Button from "../components/Button";
export default function CardAnimals() {
  return (
    <>
      <Button></Button>
      <Title text="Animais"></Title>
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
