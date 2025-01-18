// src/data.ts
import { EventGroup } from "./types";

export const loopEvents: EventGroup[] = [
  {
    name: "60 meter",
    events: [
      {
        time: "17:45",
        count: 15,
        category: "MIN-M",
        round: "Series",
        video:
          "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
        title: "60m Heat - MIN-M",
        description: "A quick 60m heat race.",
        author: "Alice",
        watchCount: 340,
      },
      {
        time: "17:55",
        count: 12,
        category: "MIN-V",
        round: "Series",
        video:
          "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
        title: "60m Heat - MIN-V",
        description: "Another 60m heat race.",
        author: "Bob",
        watchCount: 500,
      },
    ],
  },
  {
    name: "200 meter",
    events: [
      {
        time: "19:00",
        count: 12,
        category: "SCH-V",
        round: "Series",
        video:
          "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
        title: "200m - SCH-V",
        description: "Exciting 200m sprint for SCH-V.",
        author: "Charlie",
        watchCount: 1500,
      },
      {
        time: "19:10",
        count: 10,
        category: "SCH-M",
        round: "Series",
        video:
          "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
        title: "200m - SCH-M",
        description: "Heated 200m run for SCH-M.",
        author: "Diana",
        watchCount: 1200,
      },
    ],
  },
  // Add more Loop events if needed...
];

export const veldEvents: EventGroup[] = [
  {
    name: "Kogelstoten",
    events: [
      {
        time: "16:30",
        count: 8,
        category: "PUP-V",
        round: "",
        video:
          "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
        title: "Kogelstoten - PUP-V",
        description: "Powerful throws in PUP-V shot put.",
        author: "Erik",
        watchCount: 1800,
      },
    ],
  },
  {
    name: "Hoogspringen",
    events: [
      {
        time: "18:00",
        count: 15,
        category: "PUP-M",
        round: "",
        video:
          "https://awssportreels.s3.eu-central-1.amazonaws.com/BK+studenten+2023.MP4",
        title: "Hoogspringen - PUP-M",
        description: "High jump attempts for PUP-M.",
        author: "Fiona",
        watchCount: 450,
      },
    ],
  },
  // Add more Veld events if needed...
];
