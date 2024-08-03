import { useEffect, useState } from "react";
import "./TimerProgress.css";

export default function TimerProgress({
  totalTime,
  skipAnswer,
  answerState,
  handleSubmit,
}) {
  const [timerProgress, setTimerProgress] = useState(totalTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerProgress((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 5;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 5);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  useEffect(() => {
    if (timerProgress === 0) {
      skipAnswer();
    }
    if (timerProgress === 0 && answerState === undefined) {
      handleSubmit();
    }
    if (
      timerProgress === 0 &&
      (answerState === "correct" || answerState === "wrong")
    ) {
      handleSubmit();
    }
  }, [timerProgress, skipAnswer]);

  const progressClass =
    answerState === "skipped"
      ? "skipped"
      : answerState === undefined
      ? "undefined"
      : answerState === "correct"
      ? "correct"
      : answerState === "wrong"
      ? "wrong"
      : null;
  return (
    <progress
      className={`select ${progressClass}`}
      value={timerProgress}
      max={totalTime}
    ></progress>
  );
}
