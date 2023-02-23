import React from "react";
import CardC from "../components/Cards/CardMain";
import { ContainerCard } from "../style/CardPage";
import { estacoes } from "../json/estacoes";
export default function CardEstacoes() {
  return (
    <>
      <ContainerCard>
        {estacoes.map((estacao) => (
          <CardC
            ESC={estacao.kanji}
            PTB={estacao.pt}
            img={estacao.img}
            key={estacao.id}
          ></CardC>
        ))}
      </ContainerCard>
    </>
  );
}
