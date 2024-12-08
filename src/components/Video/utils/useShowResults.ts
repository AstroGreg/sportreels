import { useState } from "react";

interface Result {
  position: number;
  name: string;
  club: string;
  result: string;
  isPB: boolean;
  isSB: boolean;
}

export const useShowResults = (
  initialResults: Result[],
  title: string,
  description: string,
  setResultsDisplayed: (boolean: Boolean) => void
) => {
  const [resultsWindow, setResultsWindow] = useState({
    active: false,
    title: "",
    description: "",
    timestamp: "",
  });

  const showResults = () => {
    setResultsDisplayed(true);
    const timestamp = new Date(100 * 1000).toISOString().slice(14, 19);
    setResultsWindow({
      ...resultsWindow,
      active: true,
      title,
      description,
      timestamp,
    });
  };

  const closeResults = () => {
    setResultsDisplayed(false);
    setResultsWindow({ ...resultsWindow, active: false });
  };

  return {
    resultsWindow,
    showResults,
    closeResults,
    results: initialResults,
  };
};
