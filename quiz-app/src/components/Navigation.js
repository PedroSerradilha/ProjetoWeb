import React from 'react';

function Navigation({ questaoAtual, totalQuestoes, proximaQuestao, finalizarQuiz }) {
  return (
    <div>
      {questaoAtual < totalQuestoes - 1 ? (
        <button onClick={proximaQuestao}>Próxima</button>
      ) : (
        <button onClick={finalizarQuiz}>Finalizar Quiz</button>
      )}
    </div>
  );
}

export default Navigation;
