import React, { useState } from "react";
import "./VideoFooter.css";
import TextTruncate from "react-text-truncate"; // recommend


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
 
        <div className="post-pic">
          {hasQuiz ? (
            <h1>MDQUIZ ICON</h1>
          ) : (
            <img
              alt="pic of course"
              src="https://www.atletiek.nu/img/basicDesign/athletics.app%20logo_white.png"
            />
          )}

          <span className="profile-name">{title}</span>
     
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
