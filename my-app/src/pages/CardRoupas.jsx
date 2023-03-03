import React from "react";
import Card from "../components/Cards/CardMain";
import { roupas } from "../json/roupas.jsx";
import Title from "../components/Title";
import Button from "../components/Button";
export default function CardRoupas() {
  return (
    <div>
      <Button></Button>
      <Title text="Roupas"></Title>
      {roupas.map((roupa) => (
        <Card
          key={roupa.id}
          ESC={roupa.jpn}
          HIRAGANA={roupa.kana}
          PTB={roupa.pt}
          img={roupa.img}
        ></Card>
      ))}
    </div>
  );
}
