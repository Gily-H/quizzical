import React, { useState, useEffect } from "react";
import axios from "axios";
import StartPage from "./components/StartPage";
import QuizPage from "./components/QuizPage";
import "./styles/App.css";

const App = () => {
  const [gameStart, setGameStart] = useState(false);
  const [displayResults, setDisplayResults] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [fetchNewQuestions, setFetchNewQuestions] = useState(false);

  const baseUrl = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple";
  useEffect(() => {
    axios
      .get(baseUrl)
      .then((res) => setQuestions(res.data.results))
      .catch((err) => console.log(err));
  }, [fetchNewQuestions]);

  const startHandler = () => {
    setGameStart((prevGameStart) => !prevGameStart);
  };

  const getNewQuestions = () => {
    setFetchNewQuestions((prevFetchNewQuestions) => !prevFetchNewQuestions);
  };

  const showResults = () => {
    setDisplayResults(true);
  };

  const hideResults = () => {
    setDisplayResults(false);
  };

  return (
    <main className="main-container">
      {gameStart ? (
        <QuizPage
          questions={questions}
          startGameHandler={startHandler}
          showResults={displayResults}
          showResultsHandler={showResults}
          hideResultsHandler={hideResults}
          questionsHandler={getNewQuestions}
        />
      ) : (
        <StartPage startGameHandler={startHandler} />
      )}
    </main>
  );
};

export default App;
