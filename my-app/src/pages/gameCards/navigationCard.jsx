import cores from "../../img/paleta-de-tinta.png";
import profissoes from "../../img/medico.png";
import lugares from "../../img/restaurante.png";
import familia from "../../img/familia.png";
import viagem from "../../img/viagem-de-negocios.png";
import emergencia from "../../img/ligacao-de-emergencia.png";
import animal from "../../img/animais/leao_button.png";
import roupa from "../../img/roupas/camiseta.png";
import estacao from "../../img/estacoes_clima/climate.png";

// id,route,img

export const navigationCard = [
  {
    id: "1",
    route: "/cores",
    img: cores,
    pt: "Cores",
    name: "Iro",
    esc: "色 いろ",
  },
  {
    id: "2",
    route: "/profession",
    img: profissoes,
    pt: "Profissões",
    name: "Shokugyou",
    esc: "職業",
  },
  {
    id: "3",
    route: "/animals",
    img: animal,
    pt: "Animais",
    name: "Doubutsu ",
    esc: "動物 - どうぶつ",
  },
  {
    id: "4",
    route: "/roupas",
    img: roupa,
    pt: "Roupas",
    name: "Fuku ",
    esc: "服",
  },
  {
    id: "5",
    route: "/estacoes",
    img: estacao,
    pt: "Estacoes",
    name: "Fuku ",
    esc: "服",
  },
];
