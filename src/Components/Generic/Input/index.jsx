import React from "react";
import { Container, Icon, Wrapper } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  icon,
  defaultValue,
  value,
  width,
  prefix,
  height,
}) => {
  return (
    <Wrapper>
    <Icon>{icon}</Icon>
      <Container
        prefix={prefix}
        icon={icon}
        placeholder={placeholder}
        name={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        type={type}
        width={width}
        height={height}
      />
    </Wrapper>
  );
};

export default Input;
