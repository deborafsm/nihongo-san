import React from "react";
import Card from "../components/Cards/CardMain";
import { roupas } from "../json/roupas.jsx";
export default function CardRoupas() {
  return (
    <div>
      {roupas.map((roupa) => (
        <Card
          key={roupa.id}
          ESC={roupa.jpn}
          HIRAGANA={roupa.esc}
          PTB={roupa.pt}
          img={roupa.img}
        ></Card>
      ))}
    </div>
  );
}
