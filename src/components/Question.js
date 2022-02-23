import React from "react";
import { nanoid } from "nanoid";
import { sanitize } from "../utils/stringSanitizer";
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
          {sanitize(answer)}
        </label>
      </div>
    );
  });

  return (
    <div className="question-container">
      <h2 className="question-text">{sanitize(questionInfo.question)}</h2>
      <div className="answer-choices-container">{choices}</div> 
      <hr/>
    </div>
  );
};

export default Question;
