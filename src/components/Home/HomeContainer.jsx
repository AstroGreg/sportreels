import React from "react";
import Container from "../container";
import Home from "./Home";

const HomeContainer = ({Nav} : {Nav: React.ReactNode}) => {
  return (
    <Container nav={Nav}>
      <Home />
    </Container>
  );
};

export default HomeContainer;