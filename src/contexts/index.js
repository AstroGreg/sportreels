import React from "react";
import { QuizReelContextProvider } from "../contexts/QuizReelContext";

function Provider({ children }) {
  return <QuizReelContextProvider>{children}</QuizReelContextProvider>;
}

export default Provider;
