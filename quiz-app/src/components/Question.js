import React from 'react';

const Question = ({ dados, onResposta, respostaSelecionada }) => {
  return (
    <div className="question">
      <h2>{dados.texto}</h2>
      <ul className="options-list">
        {dados.opcoes.map((opcao, index) => (
          <li key={index} className="question-item">
            <label>
              <input
                type="radio"
                name="resposta"
                value={index}
                checked={respostaSelecionada === index}
                onChange={() => onResposta(index)}
              />
              {opcao.texto}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
