import React, { useState } from "react";
import "./Note.css";
import TextTruncate from "react-text-truncate";


function Note({note, handleCloseNote}) {
  const [max, setMax] = useState(false);
  
  return (
    <div className="note__container">
      <div className="note__header">
        Take a note @{note.timestamp}
    
      </div>
      <div className="note__input-container">
        <input
          className="note__input note__input-title"
          placeholder="Note title"
        />

        <div className="note__input-footer">
          <input className="note__input" placeholder="Note text..." />
          <span className="post-btn">Save</span>
        </div>
      </div>
      <div className="note__video-info">
        <div className="note__video-info-header">
          <b>{note.title}</b>
          <p>{note.displayQuizTimestampString}</p>
        </div>

        {max ? (
          <div onClick={() => setMax(false)}>
            <span>{note.description}</span>
            <strong style={{ marginTop: "1rem" }}>view less</strong>
          </div>
        ) : (
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={note.description}
            textTruncateChild={
              <span style={{ cursor: "pointer" }} onClick={() => setMax(true)}>
                <strong>view more</strong>
              </span>
            }
          />
        )}

        <p></p>
      </div>
    </div>
  );
}

export default Note;
