import React from 'react';

const Feedback = ({ quizData, respostas }) => {
  const pontuacao = respostas.filter((resposta, index) => {
    return quizData[index].opcoes[resposta]?.correta;
  }).length;

  return (
    <div className="feedback">
      <h2>Resultados</h2>
      <p>Você acertou {pontuacao} de {quizData.length} questões.</p>
      <ul className="feedback-list">
        {quizData.map((questao, index) => (
          <li key={index} className="feedback-item">
            {questao.texto}: {quizData[index].opcoes[respostas[index]]?.correta ? "Correta" : "Errada"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Feedback;
