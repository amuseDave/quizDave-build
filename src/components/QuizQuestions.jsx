import { MEDITATION_QUIZ, FITNESS_QUIZ } from "../questions";
import { useState, useCallback } from "react";
import "./QuizQuestions.css";
import QuizState from "./QuizState";
import QuizSummary from "./QuizSummary";

export default function QuizQuestions({
  timer,
  setQuizEnd,
  quizType,
  resetQuiz,
}) {
  let displayQuizHTML;
  const [curQ, setCurQ] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions =
    quizType === "meditation-quiz" ? MEDITATION_QUIZ : FITNESS_QUIZ;

  const submitAnswer = useCallback(
    (answer) => {
      // return;

      setAnswers((prevAnswers) => [...prevAnswers, answer]);
      if (curQ === 9) {
        setQuizEnd();
        return;
      }
      setCurQ((prevQ) => prevQ + 1);
    },
    [curQ]
  );

  if (questions.length !== answers.length) {
    const shuffledAnswers = [...questions[curQ].answers].sort(
      () => Math.random() - 0.5
    );
    displayQuizHTML = (
      <QuizState
        submitAnswer={submitAnswer}
        answers={shuffledAnswers}
        currentQuestion={questions[curQ]}
      />
    );
  } else {
    displayQuizHTML = (
      <QuizSummary
        resetQuiz={resetQuiz}
        quizType={quizType}
        answers={answers}
        questions={questions}
      />
    );
  }

  return (
    <div className={`question ${answers.length === 9 ? "completed" : null}`}>
      {timer > 0 ? (
        <h1 className="timer-start-quiz">{timer}</h1>
      ) : (
        displayQuizHTML
      )}
    </div>
  );
}
