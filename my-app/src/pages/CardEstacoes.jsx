import React from "react";
import CardC from "../components/Cards/CardMain";
import { ContainerCard } from "../style/CardPage";
import { estacoes } from "../json/estacoes";
import Title from "../components/Title";
export default function CardEstacoes() {
  return (
    <>
      <Title text="Estações"></Title>
      <ContainerCard>
        {estacoes.map((estacao) => (
          <CardC
            ESC={estacao.kanji}
            PTB={estacao.pt}
            HIRAGANA={estacao.jpn}
            img={estacao.img}
            key={estacao.id}
          ></CardC>
        ))}
      </ContainerCard>
    </>
  );
}
