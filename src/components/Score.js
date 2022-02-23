import React from "react";

const Score = ({ score, questionCount, playHandler, hideResults, questionsHandler }) => {
  const restartGame = () => {
    playHandler();
    hideResults();
    questionsHandler();
  };

  return (
    <div className="score-container">
      <span className="score-text">
        You Scored {score}/{questionCount} correct answers
      </span>
      <button className="check-answers-btn" onClick={restartGame}>
        Play Again
      </button>
    </div>
  );
};

export default Score;
