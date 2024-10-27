import React, { useState } from "react";
import TextTruncate from "react-text-truncate";

function Note({ note, handleCloseNote }) {
  const [max, setMax] = useState(false);

  return (
    <div className="absolute bottom-0 h-[75%] w-full bg-white z-10 rounded-t-lg p-4">
      <button className="text-right text-gray-500" onClick={handleCloseNote}>
        close
      </button>
      <div className="flex items-center justify-between font-bold p-4">
        Take a note @{note.timestamp}
      </div>
      <div className="mt-4 bg-white rounded-2xl border border-gray-300 p-4 pt-2">
        <input
          className="w-full text-lg font-bold border-none outline-none"
          placeholder="Note title"
        />

        <div className="flex items-center mt-2">
          <input
            className="w-full border-none outline-none text-base"
            placeholder="Note text..."
          />
          <span className="text-blue-500 font-bold p-4 cursor-pointer">Save</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <b>{note.title}</b>
          <p>{note.displayQuizTimestampString}</p>
        </div>

        {max ? (
          <div onClick={() => setMax(false)}>
            <span>{note.description}</span>
            <strong className="mt-4 cursor-pointer">view less</strong>
          </div>
        ) : (
          <TextTruncate
            line={2}
            element="span"
            truncateText="…"
            text={note.description}
            textTruncateChild={
              <span className="cursor-pointer" onClick={() => setMax(true)}>
                <strong>view more</strong>
              </span>
            }
          />
        )}
      </div>
    </div>
  );
}

export default Note;
