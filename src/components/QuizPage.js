import React, { useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import "../styles/quizpage.css";

export default function QuizPage({ questions }) {
  const [showResults, setShowResults] = useState(false);

  function showResultsOnClick() {
    setShowResults((prevShowResults) => !prevShowResults);
  }

  const quizLayout = questions.results.map((question) => (
    <Question key={nanoid()} showResults={showResults} questionInfo={question} />
  ));

  return (
    <div className="quiz-container">
      {quizLayout}
      <button className="check-answers" onClick={showResultsOnClick}>
        Check Answers
      </button>
    </div>
  );
}
