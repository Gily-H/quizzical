import { nanoid } from "nanoid";
import React, { useEffect, useState } from "react";
import "../styles/choices.css";

export default function Question({ showResults, questionInfo }) {
  const [selected, setSelected] = useState("");
  const incAnswers = questionInfo.incorrect_answers;
  const corrAnswer = questionInfo.correct_answer;

  function selectOnClick(event) {
    setSelected(event.target.value);
  }

  const answers = [...incAnswers, corrAnswer];
  // const randomIndex = Math.floor(Math.random() * 3);
  // answers.splice(randomIndex, 0, questionInfo.correct_answer);

  const choices = answers.map((answer) => {
    const id = nanoid();
    let labelName = "answer-label";
    console.log(selected);
    if (showResults) {
      if (answer === corrAnswer) {
        labelName += " highlight-correct";
      } else {
        labelName += " highlight";
      }
    }

    return (
      <div key={nanoid()}>
        <input
          className="answer-choice"
          type="radio"
          name={questionInfo.question}
          checked={selected === answer}
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
      <h3>{questionInfo.question}</h3>
      {choices}
    </>
  );
}
