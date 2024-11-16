export const calculatePlayedPercentage = (currentTime:number, duration:number) => {
    return duration ? (currentTime / duration) * 100 : 0;
  };
  