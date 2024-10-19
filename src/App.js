import React, { useState, useEffect } from "react";
import Video from "./components/Video/Video";
import db from "./firebase";
import "./App.css";
import Footer from "./components/BottomNav/Footer";
import Header from "./components/Header/Header";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) =>
      setVideos(snapshot.docs.map((doc) => doc.data()))
    );
   
  }, []);

  return (
    // BEM

    <div className="app">
      <Header />
      <div className="app__videos">
        {videos
          .sort((a, b) => a.index - b.index)
          .map(({ index, url, title, description, quizOptions, hasQuiz }) => {
            const myArray = quizOptions.quizDisplayTimeStamp.split(":");
            const displayQuizTimestampInt =
              Number(myArray[0]) * 60 + Number(myArray[1]);
            return (
              <>
                <Video
                  key={index}
                  url={url}
                  title={title}
                  description={description}
                  quizOptions={quizOptions}
                  displayQuizTimestampString={quizOptions.quizDisplayTimeStamp}
                  displayQuizTimestampInt={displayQuizTimestampInt}
                  hasQuiz={hasQuiz}
                  index={index}
                />
              </>
            );
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
