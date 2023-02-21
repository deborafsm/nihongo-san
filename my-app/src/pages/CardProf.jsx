import React from "react";
import Card from "../components/Cards/CardMain";
import profession from "../json/professions.json";
import { ContainerCardSokuon } from "../style/CardPage";
import Title from "../components/Title";
export default function CardProf() {
  return (
    <>
    <Title text="Profissões"></Title>
      <ContainerCardSokuon>
        {profession.map((profession) => (
          <Card
            key={profession.id}
            img={profession.img}
            HIRAGANA={profession.esc}
            ESC={profession.jpn}
            PTB={profession.pt}
          ></Card>
        ))}
      </ContainerCardSokuon>
    </>
  );
}
