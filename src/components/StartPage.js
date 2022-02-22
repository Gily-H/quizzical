import React from "react";
import "../styles/startpage.css";

export default function StartPage({ startGameHandler }) {
  return (
    <div className="start-page">
      <h1 className="start-header">Quizzical</h1>
      <p className="start-description">description</p>
      <button className="start-btn" onClick={startGameHandler}>
        Start Quiz!
      </button>
    </div>
  );
}
