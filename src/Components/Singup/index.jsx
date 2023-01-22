import React, { useState } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Singup = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const info = () => {
    message.info("Добро пожаловать ");
  };

  const onSubmit = () => {
    request({
      url: `/public/auth/register`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      navigate("/singin");
      info();
    });
  };
  return (
    <Content>
      <div className="subTitle">Sing Up </div>
      <Input onChange={onChange} placeholder="email" type="email" />
      <Input onChange={onChange} placeholder="firstname" type="text" />
      <Input onChange={onChange} placeholder="lastname" type="text" />
      <Input onChange={onChange} placeholder="password" type="password" />
      <Input
        onChange={onChange}
        placeholder="Re-enter password"
        type="password"
      />
      <Button width="%" onClick={onSubmit}>
        Login
      </Button>
    </Content>
  );
};

export default Singup;
