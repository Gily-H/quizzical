import React, { useState } from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import "../styles/quizpage.css";

const QuizPage = ({ questions }) => {
  const [showResults, setShowResults] = useState(false);
  const [selected, setSelected] = useState(() => {
    const selectedAnswers = {};
    for (let i = 0; i < 5; i++) {
      selectedAnswers[`question${i}`] = "";
    }
    return selectedAnswers;
  });

  const showResultsOnClick = () => {
    setShowResults((prevShowResults) => !prevShowResults);
  };

  const selectAnswer = (event) => {
    setSelected((prevSelected) => ({
      ...selected,
      [event.target.name]: event.target.value,
    }));
  };

  const quizLayout = questions.results.map((question, idx) => {
    const questionId = `question${idx}`;
    return (
      <Question
        key={nanoid()}
        showResults={showResults}
        selectOnClick={selectAnswer}
        question={question}
        questionId={questionId}
        selectedAnswer={selected[questionId]}
      />
    );
  });

  return (
    <div className="quiz-container">
      {quizLayout}
      <button className="check-answers" onClick={showResultsOnClick}>
        Check Answers
      </button>
    </div>
  );
};

export default QuizPage;
