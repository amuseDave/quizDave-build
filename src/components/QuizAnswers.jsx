export default function QuizAnswers({
  answers,
  answerState,
  submitAnswer,
  answer,
}) {
  const styleClasses = answerState === "skipped" ? "skipped-answers" : null;
  console.log(answerState === "skipped");
  console.log(styleClasses);

  return (
    <ul>
      {answers.map((a) => {
        const styleClasses2 =
          answer === a && answerState === undefined
            ? "selected"
            : answer === a &&
              (answerState === "correct" || answerState === "wrong")
            ? answerState
            : null;
        return (
          <li key={a}>
            <button
              id={styleClasses2}
              className={`${styleClasses} answer-bttn`}
              disabled={
                !answerState ||
                answerState === "skipped" ||
                answerState === "correct" ||
                answerState === "wrong"
              }
              onClick={(e) => {
                submitAnswer(a);
              }}
            >
              {a}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
