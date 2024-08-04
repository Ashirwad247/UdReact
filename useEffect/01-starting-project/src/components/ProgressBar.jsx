import React from "react";
import { useState, useEffect } from "react";

const ProgressBar = ({ timer }) => {
  const [remaningTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remaningTime} max={timer} />;
};

export default ProgressBar;
