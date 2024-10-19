import React from "react";
import "./QuizOptions.css";

function QuizOptions({ quizOptions, handleQuizOptionSelect }) {
  console.log("QUIZ OPTIONS", quizOptions);
  return (
    <div className="quizContainer">
      {quizOptions.quizOptions.options.map((quizOption, index) => (
        <button
          key={index}
          className="quizOption"
          // className={`quizOption ${
          //   quizOptions.isCorrectAnswer ? "yellow" : "purple"
          // }`}
            onClick={() => handleQuizOptionSelect(index, quizOptions.quizOptions)}
        >
          {quizOption}
        </button>
      ))}
    </div>
  );
}

export default QuizOptions;
