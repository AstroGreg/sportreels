import React from "react";
import Container from "../container";
import Upload from "./Upload";

const UploadContainer = ({Nav} : {Nav: React.ReactNode}) => {
  return (
    <Container nav={Nav}>
      <Upload />
    </Container>
  );
};

export default UploadContainer;