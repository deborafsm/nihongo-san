import React from "react";
import Card from "../components/Cards/CardMain";
import { roupas } from "../json/roupas.jsx";
import Title from "../components/Title";
import Button from "../components/Button";
import { ContainerCard } from "../style/CardPage";
export default function CardRoupas() {
  return (
    <div>
      <div className="container-title">
        <Title text="Roupas"></Title>
        <Button></Button>
      </div>
      <ContainerCard>
        {roupas.map((roupa) => (
          <Card
            key={roupa.id}
            ESC={roupa.jpn}
            HIRAGANA={roupa.kana}
            PTB={roupa.pt}
            img={roupa.img}
          ></Card>
        ))}
      </ContainerCard>
    </div>
  );
}
