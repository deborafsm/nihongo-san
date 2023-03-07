import React from "react";
import Card from "../components/Cards/CardMain";
import { ContainerCardSokuon } from "../style/CardPage";
import { animais } from "../json/animais";
import Title from "../components/Title/index";
import Button from "../components/Button";
export default function CardAnimals() {
  return (
    <>
      <div className="container-title">
        <Title text="Animais"></Title>
        <Button></Button>
      </div>
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
