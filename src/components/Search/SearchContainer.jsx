import React from "react";
import Container from "../container";
import Search from "./search";

const SearchContainer = ({Nav} : {Nav: React.ReactNode}) => {
  return (
    <Container nav={Nav}>
      <Search />
    </Container>
  );
};

export default SearchContainer;