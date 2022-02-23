import React, { useState } from "react";
import { nanoid } from "nanoid";
import "../styles/choices.css";

const Question = ({ showResults, selectOnClick, question, questionId, selectedAnswer }) => {
  const incorrectChoices = question.incorrect_answers;
  const corrAnswer = question.correct_answer;

  console.log("render");
  const answers = [...incorrectChoices, corrAnswer];

  const choices = answers.map((answer) => {
    const id = nanoid();
    let labelName = "answer-label";
    if (showResults) {
      if (corrAnswer === answer) {
        labelName += " highlight-correct";
      } else if (selectedAnswer === answer) {
        labelName += " highlight-incorrect";
      }
    }

    return (
      <div className="answer-choice-container" key={id}>
        <input
          className="answer-choice"
          type="radio"
          checked={selectedAnswer === answer}
          name={questionId}
          value={answer}
          onChange={selectOnClick}
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
      <h2>{question.question}</h2>
      {choices}
    </>
  );
};

export default Question;
