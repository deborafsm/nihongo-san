import React from "react";
import Card from "../components/Cards/CardMain";
import { roupas } from "../json/roupas.jsx";
import Title from "../components/Title";
export default function CardRoupas() {
  return (
    <div>
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
