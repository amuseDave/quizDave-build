const getLevel = (correctPercentage, quizType) => {
  if (quizType === "meditation-quiz") {
    if (correctPercentage <= 20) {
      return {
        level: "Beginner",
        text: "You are just beginning to learn about meditation. There's a whole world of mindfulness and tranquility waiting for you to explore.",
      };
    } else if (correctPercentage <= 40) {
      return {
        level: "Learner",
        text: "You have some basic knowledge of meditation. Keep learning and practicing to deepen your understanding.",
      };
    } else if (correctPercentage <= 60) {
      return {
        level: "Knowledgeable",
        text: "You have a good grasp of meditation concepts. Continue your journey to expand your knowledge further.",
      };
    } else if (correctPercentage <= 80) {
      return {
        level: "Proficient",
        text: "You are quite knowledgeable about meditation. Your understanding is strong, but there's always more to learn.",
      };
    } else {
      return {
        level: "Expert",
        text: "You have an excellent understanding of meditation. Your knowledge is comprehensive and well-rounded.",
      };
    }
  }
  if (quizType === "fitness-quiz") {
    if (correctPercentage <= 20) {
      return {
        level: "🐣Beginner🐣",
        text: "You are just starting to learn about fitness. Keep exploring to build a strong foundation of knowledge.",
      };
    } else if (correctPercentage <= 40) {
      return {
        level: "📖Learner📖",
        text: "You have some basic knowledge of fitness. Continue learning to improve your understanding and apply it effectively.",
      };
    } else if (correctPercentage <= 60) {
      return {
        level: "🧠Knowledgeable🧠",
        text: "You know a fair amount about fitness. Keep up the good work and expand your knowledge further.",
      };
    } else if (correctPercentage <= 80) {
      return {
        level: "💪Proficient💪",
        text: "You are quite knowledgeable about fitness. Your understanding is strong, and you can build on this foundation.",
      };
    } else {
      return {
        level: "🏆Expert🏆",
        text: "You have an excellent understanding of fitness. Your knowledge is comprehensive and well-rounded.",
      };
    }
  }
};
export default function Achievement({ correctPercentage, quizType }) {
  const levelInfo = getLevel(correctPercentage, quizType);

  return (
    <div className="achievement-level">
      <h3>{levelInfo.level}</h3>
      <p>{levelInfo.text}</p>
    </div>
  );
}
