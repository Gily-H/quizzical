import React from "react";

const Score = ({ score, playHandler }) => {
  return (
    <div className="score-container">
      <span className="score-text">You Scored {score}/5 correct answers</span>
      <button className="play-btn" onClick={playHandler}>
        Play Again
      </button>
    </div>
  );
};

export default Score;
