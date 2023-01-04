import { FaPaintBrush, FaInfoCircle } from "react-icons/fa";
import { MdQuiz, MdExtension, MdHome } from "react-icons/md";
import { TbLanguageHiragana } from "react-icons/tb";
import maca from "../../img/maca_smle.png";
import abacaxi from "../../img/abacaxi _smle.png";
import banana from "../../img/banana_smle.png";
import laranja from "../../img/laranja_smle.png";
export const SideData = [
    {
        questTextHira: "あの犬__可愛いです（あのいぬ__かわいいです)",
    questText: " Ano inu __ kawaii desu",
    questTraducao: "Aquele cachorro é fofinho",
    opcoesQuest: [
      {
        respQuest: <img src={maca} alt="" style={{ width: "130px" }} />,
        isCorrect: true,
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
        isCorrect: false,
      },
    ],
  },
  {
    questTextHira: "誕生日__いつですか？（たんじょうび__いつですか",
    questText: "Tanjoubi __ itsu desuka",
    questTraducao: "Quando que é a data de aniversário?",
    opcoesQuest: [
      { respQuest: "Wa は", isCorrect: true },
      { respQuest: "Mo も", isCorrect: false },
      { respQuest: "Ga が", isCorrect: false },
    ],
  },
  {
    questTextHira: "これ __ いくらですか？",
    questText: "Kore __ ikura desuka",
    questTraducao: "Quanto é isto?",
    opcoesQuest: [
      { respQuest: "Wa は", isCorrect: true },
      { respQuest: "Mo も", isCorrect: false },
      { respQuest: "Ga が", isCorrect: false },
    ],
  },
];
