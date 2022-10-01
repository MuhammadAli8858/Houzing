import React, { forwardRef } from "react";
import { Container, Icon, Wrapper } from "./style";

export const Input = forwardRef(
  (
    {
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
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
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
  }
);

export default Input;
