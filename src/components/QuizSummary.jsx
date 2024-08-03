import "./QuizSummary.css";
import Achievement from "./Achievement";
import resetBttn from "../assets/icons8-close-48.png";
export default function QuizSummary({
  answers,
  questions,
  quizType,
  resetQuiz,
}) {
  const quizClass =
    quizType === "fitness-quiz"
      ? "quiz-summary-fitness"
      : "quiz-summary-meditation";
  const quizClass2 =
    quizType === "fitness-quiz"
      ? "quiz-summary-fitness-question-text"
      : "quiz-summary-meditation-question-text";
  const totalAnswers = answers.length;
  const skippedAnswers = answers.filter((answer) => answer === null);
  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].answers[0]
  );
  const wrongAnswers =
    totalAnswers - skippedAnswers.length - correctAnswers.length;

  const skippedPercentage = Math.round(
    (skippedAnswers.length / totalAnswers) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers.length / totalAnswers) * 100
  );
  const wrongPercentage = Math.round((wrongAnswers / totalAnswers) * 100);

  return (
    <>
      <div className="reset-bttn" onClick={resetQuiz}>
        <img src={resetBttn} alt="" />
      </div>
      <Achievement quizType={quizType} correctPercentage={correctPercentage} />
      <h1 className={quizClass}>
        Correct: <span style={{ color: "#00ff9d" }}>{correctPercentage}%</span>,
        Wrong: <span style={{ color: "#ff5a4e" }}>{wrongPercentage}%</span>
        {skippedPercentage === 0 ? null : ", Skipped: "}
        {skippedPercentage === 0 ? null : (
          <span style={{ color: "#ffac3f" }}>{skippedPercentage}%</span>
        )}
      </h1>
      <ul className="questions-list">
        {questions.map((question, index) => {
          const correctAnswer = question.answers[0];
          const userAnswer = answers[index];
          const isCorrect = correctAnswer === userAnswer;

          return (
            <li key={index} className={`question-item ${quizClass2}`}>
              <h3>{question.q}</h3>
              <div className="answers-container">
                <div className="answer-container">
                  <span className="answer-text">Correct answer:</span>
                  <h4 className="correct-answer">{correctAnswer}</h4>
                </div>

                <div className="answer-container">
                  <span className="answer-text">Your answer:</span>
                  <h4
                    className={
                      userAnswer === null
                        ? "skipped"
                        : isCorrect
                        ? "correct-user-answer"
                        : "wrong-user-answer"
                    }
                  >
                    {userAnswer === null ? "Skipped answer" : `${userAnswer} `}
                  </h4>

                  <div className="icon">
                    {isCorrect ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="#9dffb2"
                          d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                        />
                      </svg>
                    ) : !isCorrect && userAnswer !== null ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 384 512"
                      >
                        <path
                          fill="#ff7171b7"
                          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                        />
                      </svg>
                    ) : userAnswer === null ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="#ffdb98"
                          d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74l0 1.4c0 17.7 14.3 32 32 32s32-14.3 32-32l0-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7l0-3.6c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                        />
                      </svg>
                    ) : null}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
