import React, { useState } from 'react';
import Question from './Question';
import Feedback from './Feedback';

const quizData = [
  {
    texto: "O que significa HTML?",
    opcoes: [
      { texto: "Hyperlink Markup Language", correta: false },
      { texto: "Hypertext Markup Language", correta: true },
      { texto: "Home Tool Markup Language", correta: false },
      { texto: "Hypertext Management Language", correta: false },
    ],
  },
  {
    texto: "Qual é a função principal do CSS?",
    opcoes: [
      { texto: "Adicionar interatividade às páginas", correta: false },
      { texto: "Estilizar e formatar páginas", correta: true },
      { texto: "Criar a estrutura do documento", correta: false },
      { texto: "Gerenciar servidores web", correta: false },
    ],
  },
  {
    texto: "Qual tag HTML é usada para criar um link?",
    opcoes: [
      { texto: "link", correta: false },
      { texto: "a", correta: true },
      { texto: "href", correta: false },
      { texto: "url", correta: false },
    ],
  },
  {
    texto: "O que significa a sigla DOM no desenvolvimento web?",
    opcoes: [
      { texto: "Document Orientation Model", correta: false },
      { texto: "Document Object Model", correta: true },
      { texto: "Data Object Module", correta: false },
      { texto: "Dynamic Object Model", correta: false },
    ],
  },
  {
    texto: "Qual método é usado no JavaScript para selecionar um elemento pelo ID?",
    opcoes: [
      { texto: "getElementsByClassName", correta: false },
      { texto: "getElementById", correta: true },
      { texto: "querySelectorAll", correta: false },
      { texto: "getElementsByTagName", correta: false },
    ],
  },
];

const Quiz = () => {
  const [questaoAtual, setQuestaoAtual] = useState(0);
  const [respostas, setRespostas] = useState(Array(quizData.length).fill(null));
  const [finalizado, setFinalizado] = useState(false);

  const handleResposta = (indiceOpcao) => {
    const novasRespostas = [...respostas];
    novasRespostas[questaoAtual] = indiceOpcao;
    setRespostas(novasRespostas);
  };

  const finalizarQuiz = () => setFinalizado(true);

  return (
    <div>
      {!finalizado ? (
        <>
          <nav>
            {quizData.map((_, index) => (
              <button
                key={index}
                onClick={() => setQuestaoAtual(index)}
                disabled={questaoAtual === index}
              >
                {index + 1}
              </button>
            ))}
          </nav>
          <Question
            dados={quizData[questaoAtual]}
            onResposta={handleResposta}
            respostaSelecionada={respostas[questaoAtual]}
          />
          <button onClick={finalizarQuiz}>Avaliar Questões</button>
        </>
      ) : (
        <Feedback quizData={quizData} respostas={respostas} />
      )}
    </div>
  );
};

export default Quiz;
