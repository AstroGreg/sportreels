// Home.jsx
import React from "react";
import VideoContainer from "../Video/rendering/VideoContainer";

const Home = () => {
  const videoUrls = [
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/PK-800m.mp4",
      title: "PK 800m 2025 indoor",
      description: "Senioren, Heat 1",
      thumbnails: {
        240: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-800m/first_frame_240px.jpg",
        480: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-800m/first_frame_480px.jpg",
        720: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-800m/first_frame_720px.jpg",
        1080: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-800m/first_frame_1080px.jpg",
      },
    },
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
      title: "BK Studenten 2024",
      description: "Senioren, Heat 4 outdoor",
      thumbnails: {
        240: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK-studenten/BK_studenten_frame_240px.jpg",
        480: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK-studenten/BK_studenten_frame_480px.jpg",
        720: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK-studenten/BK_studenten_frame_720px.jpg",
        1080: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK-studenten/BK_studenten_frame_1080px.jpg",
      },
    },
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/BK-2024.mp4",
      title: "BK 800m 2024 outdoor",
      description: "Senioren, Heat 1",
      thumbnails: {
        240: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK/BK_frame_240px.jpg",
        480: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK/BK_frame_480px.jpg",
        720: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK/BK_frame_720px.jpg",
        1080: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/BK/BK_frame_1080px.jpg",
      },
    },
    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/PK-1500m.mp4",
      title: "PK 1500m 2025 indoor",
      description: "Senioren, Heat 1",
      thumbnails: {
        240: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-1500m/first_frame_240px.jpg",
        480: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-1500m/first_frame_480px.jpg",
        720: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-1500m/first_frame_720px.jpg",
        1080: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-1500m/first_frame_1080px.jpg",
      },
    },

    {
      url: "https://awssportreels.s3.eu-central-1.amazonaws.com/PK-400m.mp4",
      title: "PK 400m 2025 indoor",
      description: "Senioren, Heat 2",
      thumbnails: {
        240: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-400m/first_frame_240px.jpg",
        480: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-400m/first_frame_480px.jpg",
        720: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-400m/first_frame_720px.jpg",
        1080: "https://awssportreels.s3.eu-central-1.amazonaws.com/thumbnails/PK-400m/first_frame_1080px.jpg",
      },
    },
  ];

  return <VideoContainer videoUrls={videoUrls} />;
};

export default Home;
