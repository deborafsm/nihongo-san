import { FaPaintBrush, FaInfoCircle } from "react-icons/fa";
import { MdQuiz, MdExtension, MdHome } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";
import maca from "../../img/maca_smle.png";
import abacaxi from "../../img/abacaxi _smle.png";
import banana from "../../img/banana_smle.png";
import laranja from "../../img/laranja_smle.png";
import daughter from "../../img/daughter.png";
import woman from "../../img/woman.png";
import geisha from "../../img/geisha.png";
import man from "../../img/man.png";
export const SideData = [
  {
    questTextHira: "オレンジ",
    questText: " Orenji",
    questTraducao: "Laranja",
    opcoesQuest: [
      {
        respQuest: <img src={maca} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={abacaxi} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={banana} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={laranja} alt="" style={{ width: "130px" }} />,
        isCorrect: true,
      },
    ],
  },
  {
    questTextHira: "くず",
    questText: " Kuzu",
    questTraducao: "Maça",
    opcoesQuest: [
      
      {
        respQuest: <img src={laranja} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={abacaxi} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={banana} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={maca} alt="" style={{ width: "130px" }} />,
        isCorrect: true,
      },
    ],
  },
  {
    questTextHira: "女性",
    questText: " Josei",
    questTraducao: "mulher",
    opcoesQuest: [
      
      {
        respQuest: <img src={daughter} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={geisha} alt="" style={{ width: "130px" }} />,
        isCorrect: true,
      },
      {
        respQuest: <img src={man} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
      {
        respQuest: <img src={woman} alt="" style={{ width: "130px" }} />,
        isCorrect: false,
      },
    ],
  }
];
