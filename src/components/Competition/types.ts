// src/types.ts
export interface VideoEvent {
  time: string;
  count: number;
  category: string;
  round: string;
  video: string; // actual video URL
  title: string; // short title for display
  description: string;
  author: string;
  watchCount: number; // used for sorting by popularity
}

export interface EventGroup {
  name: string;
  events: VideoEvent[];
}
