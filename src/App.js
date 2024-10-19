import React, { useState } from "react";
import Video from "./components/Video/Video";
import "./App.css";
import "./App.css";
import Footer from "./components/BottomNav/Footer";
import Header from "./components/Header/Header";

function App() {


  const [videos] = useState([ { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4", title: "BK Studenten" , description:"blablla" } , { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK-2024.mov", title: "BK 2024", description:"blablla"  } ]);
 

  return (
    // BEM

    <div className="app">
      <Header />
      <div className="app__videos">
        {videos
          .sort((a, b) => a.index - b.index)
          .map(({ index, url, title, description}) => {
            console.log(index)
            return (
              <>
                <Video
                  key={"0"}
                  url={url}
                  title={title}
                  description={description}
                  index={"0"}
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
