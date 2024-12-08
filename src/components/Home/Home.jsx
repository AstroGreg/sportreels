import React from "react";
import VideoContainer from "../Video/rendering/VideoContainer";

import "../../App.css";

const Home = () => {
  const videoUrls = [
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
      title: "BK Studenten",
      description: "blablla",
    },
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK-2024.mov",
      title: "BK 2024",
      description:
        "blabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablabllablablla",
    },
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
      title: "Sporza 1500m",
      description: "blab",
    },
  ];
  return <VideoContainer videoUrls={videoUrls} />;
};

export default Home;
