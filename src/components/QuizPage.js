import React, { useState } from "react";
import Question from "./Question";
import Score from "./Score";
import { nanoid } from "nanoid";
import "../styles/QuizPage.css";

const QuizPage = ({
  questions,
  startGameHandler,
  showResults,
  showResultsHandler,
  hideResultsHandler,
  questionsHandler,
}) => {
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState(() => {
    const answers = [];
    questions.forEach((question) => {
      const questionAnswers = [...question.incorrect_answers];
      const randomIdx = Math.floor(Math.random() * answers.length);
      questionAnswers.splice(randomIdx, 0, question.correct_answer);
      answers.push(questionAnswers);
    });
    return answers;
  });

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
    showResultsHandler();
    updateScore();
  };

  const updateScore = () => {
    let score = 0;
    questions.forEach((question, idx) => {
      if (question.correct_answer === selected[`question${idx}`]) {
        score++;
      }
    });

    setScore(score);
  };

  const quizLayout = questions.map((question, idx) => {
    const questionId = `question${idx}`;
    const questionInfo = {
      id: questionId,
      question: question.question,
      answers: answers[idx],
      correctAnswer: question.correct_answer,
      selectedAnswer: selected[questionId],
      selectOnClick: selectAnswer,
    };
    return <Question key={nanoid()} showResults={showResults} questionInfo={questionInfo} />;
  });

  return (
    <div className="quiz-container">
      {quizLayout}
      <div className="results-container">
        {showResults ? (
          <Score
            score={score}
            questionCount={questions.length}
            playHandler={startGameHandler}
            hideResults={hideResultsHandler}
            questionsHandler={questionsHandler}
          />
        ) : (
          <button className="check-answers-btn" onClick={showResultsOnClick}>
            Check Answers
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
