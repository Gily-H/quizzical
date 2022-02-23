import React, { useState } from "react";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import useFetch from "./hooks/useFetch";
import "./styles/app.css";

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const baseUrl = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple";
  const questions = useFetch(baseUrl);

  const startHandler = () => {
    setGameStart((prevGameStart) => !prevGameStart);
  };

  return (
    <main className="main-container">
      {gameStart ? (
        <QuizPage questions={questions} startGameHandler={startHandler} />
      ) : (
        <StartPage startGameHandler={startHandler} />
      )}
    </main>
  );
};

export default App;
