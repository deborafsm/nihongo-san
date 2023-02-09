import React from "react";
import Card from "../components/Cards/CardMain";
import profession from "../json/professions.json";
import { ContainerCardSokuon } from "../style/CardPage";
export default function CardProf() {
  return (
    <>
      <ContainerCardSokuon>
        {profession.map((profession) => (
          <Card
            key={profession.id}
            img={profession.img}
            HIRAGANA={profession.esc}
            PTB={profession.pt}
          ></Card>
        ))}
      </ContainerCardSokuon>
    </>
  );
}
