import { useState } from "react";
const questoes = [
  {
    questText: "Qual é a particula ?",
    opcoesQuest: [
      { respQuest: "Mo", isCorrect: false },
      { respQuest: "Wa", isCorrect: true },
      { respQuest: "Ga", isCorrect: false },
    ],
  },
  {
    questText: "Qual é a particula  Wa?",
    opcoesQuest: [
      { respQuest: "Mo", isCorrect: false },
      { respQuest: "Wa", isCorrect: true },
      { respQuest: "Ga", isCorrect: false },
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
  return (
    <>
      <div>
        {mostraScore ? (
          <div className="anwser-score">
            <p>
              Você pontuou {score} de {questoes.length}
            </p>
          </div>
        ) : (
          <>
            <div className="question-lenght">
              {/* Contagem das questões */}
              <span>Questão {questaoAtual + 1}</span> / {questoes.length}
            </div>
            <div className="anwser-text">
              <h1>{questoes[questaoAtual].questText}</h1>
            </div>
            <div className="question-resp">
              {questoes[questaoAtual].opcoesQuest.map((opcaoQuest, index) => (
                <p
                  onClick={() => handleRespostaQuestao(opcaoQuest.isCorrect)}
                  key={index}
                >
                  {opcaoQuest.respQuest}
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default QuestionGame;
