export const calculatePlayedPercentage = (currentTime, duration) => {
    return duration ? (currentTime / duration) * 100 : 0;
  };
  