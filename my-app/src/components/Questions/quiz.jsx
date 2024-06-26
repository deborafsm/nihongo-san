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
import cachorro from "../../img/animais/cachorro.png";
import gato from "../../img/animais/gato.png";
import coelho from "../../img/animais/coelho.png";
import rato from "../../img/animais/rato.png";
export const SideData = [
  {
    questTextHira: "オレンジ",
    questText: " Orenji",
    questTraducao: "Laranja",
    type:"Frutas",
    opcoesQuest: [
      
      {
        respQuest: <img src={maca} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "リンゴ/アップル",
        titlePt: "Ringo/(Apple)appuru",
        
      },
      {
        respQuest: <img src={abacaxi} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "ぱいなっぷる",
        titlePt: "Painappuru / pain",
      },
      {
        respQuest: <img src={banana} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "バナナ",
        titlePt: "Banana",
      },
      {
        respQuest: <img src={laranja} alt="" style={{ width: "120px" }} />,
        isCorrect: true,
        titleJpn: "オレンジ",
        titlePt: "Orendi",
      },
    ],
  },
  {
    questTextHira: "くず",
    questText: " appuru",
    questTraducao: "Maça",
    type:"Frutas",
    opcoesQuest: [
      {
        respQuest: <img src={laranja} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "オレンジ",
        titlePt: "Orendi",
      },
      {
        respQuest: <img src={abacaxi} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "ぱいなっぷる",
        titlePt: "Painappuru / pain",
      },
      {
        respQuest: <img src={banana} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "バナナ",
        titlePt: "Banana",
      },
      {
        respQuest: <img src={maca} alt="" style={{ width: "120px" }} />,
        isCorrect: true,
        titleJpn: "リンゴ/アップル",
        titlePt: "Ringo/(Apple)appuru",
      },
    ],
  },
  {
    questTextHira: "女性",
    questText: "Josei",
    questTraducao: "mulher",
    type:"Generos",
    opcoesQuest: [
      {
        respQuest: <img src={daughter} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "娘",
        titlePt: "Musume",
      },
      {
        respQuest: <img src={geisha} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "芸者",
        titlePt: "Gueixa",
      },
      {
        respQuest: <img src={man} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "男性",
        titlePt: "Homem",
      },
      {
        respQuest: <img src={woman} alt="" style={{ width: "120px" }} />,
        isCorrect: true,
        titleJpn: "女性",
        titlePt: "Josei",
      },
    ],
  },
  {
    questTextHira: "ねこ",
    questText: "Neko",
    questTraducao: "gato",
    type:"Animais",
    opcoesQuest: [
      {
        respQuest: <img src={gato} alt="" style={{ width: "120px" }} />,
        isCorrect: true,
        titleJpn: "ねこ",
        titlePt: "Neko",
      },
      {
        respQuest: <img src={cachorro} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "芸者",
        titlePt: "Inu",
      },
      {
        respQuest: <img src={coelho} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "うさぎ",
        titlePt: "Usagi",
      },
      {
        respQuest: <img src={rato} alt="" style={{ width: "120px" }} />,
        isCorrect: false,
        titleJpn: "ねずみ	",
        titlePt: "Nezumi",
      },
    ],
  },
];
