import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import { nanoid } from "nanoid";
import "../styles/quizpage.css";

const QuizPage = ({ questions, startGameHandler }) => {
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(() => {
    const selectedAnswers = {};
    for (let i = 0; i < 5; i++) {
      selectedAnswers[`question${i}`] = "";
    }
    return selectedAnswers;
  });

  const selectAnswer = (event) => {
    setSelected((prevSelected) => ({
      ...prevSelected,
      [event.target.name]: event.target.value,
    }));
  };

  const showResultsOnClick = () => {
    setShowResults((prevShowResults) => !prevShowResults);
    updateScore();
  };

  const updateScore = () => {
    let score = 0;
    questions.results.map((question, idx) => {
      if (question.correct_answer === selected[`question${idx}`]) {
        score++;
      }
    });

    setScore(score);
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
      <hr />
      {showResults ? (
        <Score score={score} playHandler={startGameHandler} />
      ) : (
        <button className="check-answers" onClick={showResultsOnClick}>
          Check Answers
        </button>
      )}
    </div>
  );
};

export default QuizPage;
