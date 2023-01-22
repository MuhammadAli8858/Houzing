import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick, width, disabled, style }) => {
  return (
    <Container
      style={style}
      disabled={disabled}
      onClick={onClick}
      type={type}
      width={width}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
