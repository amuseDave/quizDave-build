import "./Quiz.css";
import QuizQuestions from "./QuizQuestions";
import { useState, useEffect } from "react";

export default function Quiz() {
  const [isStarting, setIsStarting] = useState(false);
  const [quizType, setQuizType] = useState(null);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (!timer) return;
    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 1) {
          return prevTimer - 1;
        } else {
          clearInterval(interval);
          setIsStarting(true);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [quizType]);

  function setQuizEnd() {
    setIsStarting("end");
  }
  function resetQuiz() {
    setQuizType(null);
    setIsStarting(false);
    setTimer(null);
  }

  const startQuizHTML = quizType ? (
    <QuizQuestions
      key={quizType}
      setQuizEnd={setQuizEnd}
      quizType={quizType}
      timer={timer}
      resetQuiz={resetQuiz}
    />
  ) : isStarting === null ? (
    <>
      <h2>
        <button
          className="quiz-set-bttn meditation-button"
          onClick={() => {
            setQuizType("meditation-quiz");
            setTimer(3);
          }}
        >
          Meditation Quiz
        </button>
      </h2>
      <h2>
        <button
          className="quiz-set-bttn fitness-button"
          onClick={() => {
            setQuizType("fitness-quiz");
            setTimer(3);
          }}
        >
          Fitness Quiz
        </button>
      </h2>
    </>
  ) : (
    <h2>
      <button
        className="start-button"
        onClick={() => {
          setIsStarting(null);
        }}
      >
        Start quiz
      </button>
    </h2>
  );

  return (
    <main
      className={`quiz ${quizType} ${
        isStarting && quizType === null ? "starting" : null
      } ${timer === 0 ? "quiz-expand" : null} ${
        isStarting === "end" ? "quiz-expand-end" : null
      }`}
    >
      {startQuizHTML}
    </main>
  );
}
