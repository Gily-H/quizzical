import React from "react";
import "../styles/StartPage.css";

const StartPage = ({ startGameHandler }) => {
  return (
    <div className="start-page">
      <h1 className="start-header">Quizzical</h1>
      <button className="play-btn" onClick={startGameHandler}>
        Start Quiz!
      </button>
    </div>
  );
};

export default StartPage;
