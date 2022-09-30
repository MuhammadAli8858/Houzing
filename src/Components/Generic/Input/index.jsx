import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  defaultValue,
  value,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      width={width}
      height={height}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
