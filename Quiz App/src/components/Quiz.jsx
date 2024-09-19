import React, { useState, useCallback, useRef } from "react";
import quizCompImg from "../assets/quiz-complete.png";
import Questions from "../Questions";
import Question from "./Question";
import Summary from "./Summary";
const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQIndex = userAnswers.length;

  const quizIsComplete = activeQIndex === Questions.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsComplete) {
   return <Summary userAnswers={userAnswers}/>
  }

  return (
    <div id="quiz">
      <Question
        key={activeQIndex}
        index={activeQIndex}
        onSeletAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
};

export default Quiz;
