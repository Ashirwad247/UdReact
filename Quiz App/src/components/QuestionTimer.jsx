import React, { useEffect, useState } from "react";

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
const timer=setTimeout(() => onTimeout(), timeout);
return ()=>{
  clearTimeout(timer);
};
  }, [timeout, onTimeout]);

  useEffect(() => {
    const interval=setInterval(() => {
      setRemainingTime((prvTime) => prvTime - 100);
    }, 100);
    return ()=>{
      clearInterval(interval);
    };
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeout} className={mode}></progress>
  );
};

export default QuestionTimer;
