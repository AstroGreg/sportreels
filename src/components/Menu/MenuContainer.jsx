import React from "react";
import Container from "../container";
import Menu from "./Menu";

const MenuContainer = ({Nav} : {Nav: React.ReactNode}) => {
  return (
    <Container nav={Nav}>
      <Menu />
    </Container>
  );
};

export default MenuContainer;