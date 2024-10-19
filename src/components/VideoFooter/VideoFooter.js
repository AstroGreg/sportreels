import React, { useState } from "react";
import "./VideoFooter.css";
import TextTruncate from "react-text-truncate"; // recommend
import QuizOptions from "../QuizOptions/QuizOptions";
import { MdQuiz } from "react-icons/md";
// import useVideoPlayer from "../../hooks/useVideoPlayer";
function VideoFooter({
  title,
  description,
  displayQuiz,
  handleQuizOptionSelect,
  quizOptions,
  hasQuiz,
}) {
  const [max, setMax] = useState(false);

  return (
    <div
      className={`videoContainer ${
        max || displayQuiz ? "maxVideoContainer" : ""
      }`}
    >
      <div className="videoFooter">
        <div className="quizOptions">
          {displayQuiz && hasQuiz ? (
            <QuizOptions
              quizOptions={quizOptions}
              handleQuizOptionSelect={handleQuizOptionSelect}
            />
          ) : null}
          {/* {isOptionSelected ? <QuizOptions quizOptions={quizOptions} handleQuizOptionSelect={handleQuizOptionSelect} />} */}
        </div>
        <div className="post-pic">
          {hasQuiz ? (
            <MdQuiz className="icons" />
          ) : (
            <img
              alt="pic of course"
              src="https://res.cloudinary.com/ak-124210/image/upload/v1642434078/yjnzwmihmhghxkwnb6n9.png"
            />
          )}

          <span className="profile-name">{title}</span>
          {!displayQuiz ? <button className="signup-cta">Signup</button> : null}
        </div>
        <div className="video-caption">
          {!max ? (
            <TextTruncate
              line={1}
              element="span"
              truncateText="…"
              text={description}
              textTruncateChild={
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setMax(true)}
                >
                  <strong>view more</strong>
                </span>
              }
            />
          ) : (
            <span style={{ cursor: "pointer" }} onClick={() => setMax(false)}>
              {description} <br />
              <strong style={{ marginTop: "1rem" }}>view less</strong>
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
