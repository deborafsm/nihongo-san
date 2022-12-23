import { useState, useEffect } from "react";
import style from "./style.css";
import img from "../../img/cong.gif";
const questoes = [
  {
    questTextHira: "あの犬__可愛いです（あのいぬ__かわいいです)",
    questText: " Ano inu __ kawaii desu",
    opcoesQuest: [
      { respQuest: "Wa は", isCorrect: true },
      { respQuest: "Mo も", isCorrect: false },
      { respQuest: "Ga が", isCorrect: false },
    ],
  },
  {
    questTextHira: "誕生日__いつですか？（たんじょうび__いつですか",
    questText: "Tanjoubi __ itsu desuka",
    opcoesQuest: [
      { respQuest: "Wa は", isCorrect: true },
      { respQuest: "Mo も", isCorrect: false },
      { respQuest: "Ga が", isCorrect: false },
    ],
  },
];
function QuestionGame() {
  // Mostra Score do jogo
  const [mostraScore, setMostraScore] = useState(false);
  //   Score atual
  const [score, setScore] = useState(0);
  //   Questão Atual
  const [questaoAtual, setQuestaoAtual] = useState(0);

  function handleRespostaQuestao(isCorrect) {
    if (isCorrect) {
      // Acresce o ponto no score
      setScore(score + 1);
    }

    const proximaQuestao = questaoAtual + 1;
    if (proximaQuestao < questoes.length) {
      setQuestaoAtual(proximaQuestao);
    } else {
      setMostraScore(true);
    }
  }

  function Refazer() {
    setMostraScore(0)
    setQuestaoAtual(0)
  }

  return (
    <>
      <div className="container-anwser">
        <div className="content">
          {mostraScore ? (
            <div className="anwser-score">
              <p>
                Você pontuou {score} de {questoes.length}
              </p>
              {/* <img src={img} alt="" /> */}
              <button onClick={() => Refazer()}>Refazer</button>
            </div>
          ) : (
            <>
              <div className="question-lenght">
                {/* Contagem das questões */}
                <span>Questão {questaoAtual + 1}</span> / {questoes.length}
              </div>
              <div className="anwser-text">
                <h4>{questoes[questaoAtual].questTextHira}</h4>
                <h3>{questoes[questaoAtual].questText}</h3>
              </div>
              <div className="question-resp">
                {questoes[questaoAtual].opcoesQuest.map((opcaoQuest, index) => (
                  <button
                    onClick={() => handleRespostaQuestao(opcaoQuest.isCorrect)}
                    key={index}
                  >
                    {opcaoQuest.respQuest}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default QuestionGame;
