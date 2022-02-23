import React from "react";
import { nanoid } from "nanoid";
import "../styles/Question.css";

const Question = ({ showResults, questionInfo }) => {
  const choices = questionInfo.answers.map((answer) => {
    const id = nanoid();
    let labelName = "answer-label";
    if (showResults) {
      if (questionInfo.correctAnswer === answer) {
        labelName += " highlight-correct";
      } else if (questionInfo.selectedAnswer === answer) {
        labelName += " highlight-incorrect";
      }
    }

    return (
      <div className="answer-choice-container" key={id}>
        <input
          className="answer-choice"
          type="radio"
          checked={questionInfo.selectedAnswer === answer}
          name={questionInfo.id}
          value={answer}
          onChange={questionInfo.selectOnClick}
          id={id}
        />
        <label className={labelName} htmlFor={id}>
          {answer}
        </label>
      </div>
    );
  });

  return (
    <>
      <h2>{questionInfo.question}</h2>
      {choices}
    </>
  );
};

export default Question;
