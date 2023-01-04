import { useState, useEffect } from "react";
import style from "./style-quiz.css";
import img from "../../img/cong.gif";
import { SideData } from "./quiz";
const questoes = SideData;
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
    setMostraScore(0);
    setQuestaoAtual(0);
    setScore(0);
  }

  return (
    <>
      <div className="card-container">
        <div>
          {mostraScore ? (
            <div className="card-score">
              <p>
                Você pontuou {score} de {questoes.length}
              </p>

              <br />
              <button className="reset-button" onClick={() => Refazer()}>
                Refazer
              </button>
            </div>
          ) : (
            <>
              <div className="question-current">
                {/* Contagem das questões */}
                <span>Questão {questaoAtual + 1}</span> / {questoes.length}
              </div>
              <div className="question-text">
                <h4>{questoes[questaoAtual].questTextHira}</h4>
                <h3>{questoes[questaoAtual].questText}</h3>
              </div>
              <div className="question-resp-icon">
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
