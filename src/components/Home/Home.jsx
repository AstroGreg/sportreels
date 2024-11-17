import React from "react";
import VideoContainer from "../Video/rendering/VideoContainer";

import "../../App.css";


function App({Nav} : {Nav: React.ReactNode}) {
  
  const videoUrls = [ { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4", title: "BK Studenten" , description:"blablla" } , { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK-2024.mov", title: "BK 2024", description:"blabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablablla"  } , { url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4" , title: "Sporza 1500m", description:"blab"}]
  return (
 <div className="h-full md:w-auto w-full">
    <div className="relative md:w-auto w-full h-[90%] snap-start ">
        <VideoContainer videoUrls={videoUrls} /> 
    </div>
    <div className="h-[10%]">
        {Nav}
    </div>
  </div>
  );
}

export default App;
