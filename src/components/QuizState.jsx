import QuizAnswers from "./QuizAnswers";
import TimerProgress from "./TimerProgress";
import { useState, useCallback } from "react";

export default function QuizState({ answers, currentQuestion, submitAnswer }) {
  const [answerState, setAnswerState] = useState(true);
  const [answer, setAnswer] = useState("");
  const progressTime =
    answerState === true
      ? 10000
      : answerState === undefined
      ? 800
      : answerState === "correct" || answerState === "wrong"
      ? 1500
      : answerState === "skipped"
      ? 1500
      : null;
  const handleSkip = useCallback(() => {
    setAnswerState((prevState) => {
      return prevState === "skipped"
        ? true
        : prevState === true
        ? "skipped"
        : null;
    });
    if (answerState === "skipped") {
      submitAnswer(null);
    }
  }, [answerState]);

  const handleSubmit = useCallback(
    (a) => {
      if (answerState === true) {
        setAnswer(a);
        setAnswerState(undefined);
      }
      if (answerState === undefined) {
        const isCorrect =
          answer === currentQuestion.answers[0] ? "correct" : "wrong";
        setAnswerState(isCorrect);
      }
      if (answerState === "correct" || answerState === "wrong") {
        submitAnswer(answer);
        setAnswerState(true);
      }
    },
    [answerState, currentQuestion, answer]
  );

  return (
    <>
      <TimerProgress
        key={progressTime}
        answerState={answerState}
        totalTime={progressTime}
        skipAnswer={handleSkip}
        handleSubmit={handleSubmit}
      />
      <h2 className="cur-question">{currentQuestion.q}</h2>
      <QuizAnswers
        key={answerState}
        answer={answer}
        answerState={answerState}
        submitAnswer={handleSubmit}
        answers={answers}
      />
    </>
  );
}
