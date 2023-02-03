import { FaPaintBrush, FaInfoCircle } from "react-icons/fa";
import { MdQuiz, MdExtension, MdHome } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";
import { GiCardJoker } from "react-icons/gi";
export const SideData = [
  {
    id: "123",
    title: "Home",
    path: "/home",
    icon: <MdHome />,
    cName: "Home",
  },
  {
    id: "123456",
    title: "Monógrafos",
    path: "/monografos",
    icon: <TbLanguageHiragana />,
    cName: "Gramatica",
  },
  {
    id: "123789",
    title: "Dígrafos",
    path: "/digrafos",
    icon: <TbLanguageHiragana />,
    cName: "Gramatica",
  },
  {
    id: "123012",
    title: "Geminados",
    path: "/germinados",
    icon: <TbLanguageHiragana />,
    cName: "Gramatica",
  },
  {
    id: "123013",
    title: "Cores",
    path: "/cores",
    icon: <FaPaintBrush />,
    cName: "Jogo",
  },
  {
    id: "123013",
    title: "Cards",
    path: "/cards",
    icon: <GiCardJoker />,
    cName: "Jogo",
  },
  {
    id: "123015",
    title: "Jogo da Memoria",
    path: "/game",
    icon: <MdExtension />,
    cName: "Jogo",
  },
  {
    id: "123014",
    title: "Particulas",
    path: "/particula",
    icon: <TbLanguageHiragana />,
    cName: "Gramatica",
  },
  {
    id: "123016",
    title: "Qual é a particula ?",
    path: "/particula-game",
    icon: <MdQuiz />,
    cName: "Jogo",
  },
  {
    id: "123017",
    title: "Quiz",
    path: "/quiz-game",
    icon: <MdQuiz />,
    cName: "Jogo",
  },
];
