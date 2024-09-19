import React, { useState } from "react";
import Answers from "./Answers";
import Questions from "../Questions";
import QuestionTimer from "./QuestionTimer";
const Question = ({ onSeletAnswer, index, onSkipAnswer }) => {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });
  function handleSelectAnswer(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: Questions[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSeletAnswer(answer);
      }, 2000);
    }, 1000);
  }

  let timer = 10000;
  if (answer.selectedAnswer) {
    timer = 1000;
  }
  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  let answerState = "";
  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answerState.isCorrect ? "correct" : "wrong";
  } else if (answerState.selectedAnswer) {
    answerState = "answered";
  }
  return (
    <div id="question">
      <QuestionTimer
        key={timer}
        timeout={timer}
        mode={answerState}
        onTimeout={answer.selectedAnswer===''?onSkipAnswer:null}
      />

      <h2>{Questions[index].text}</h2>
      <Answers
        answers={Questions[index].answers}
        selectedAnswer={answer.selectedAnswer}
        answerState={answerState}
        onSelect={onSeletAnswer}
      />
    </div>
  );
};

export default Question;
