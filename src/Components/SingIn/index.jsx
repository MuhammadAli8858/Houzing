import React, { useState } from "react";
import { Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Singin = () => {
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
    message.info(" Добро пожаловать ");
  };

  const onSubmit = () => {
    request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
      }
      info();
    });
  };
  return (
    <Content>
      <div className="subTitle">Sing In </div>
      <Input onChange={onChange} placeholder="email" type="email" />
      <Input onChange={onChange} placeholder="password" type="password" />
      <Button width="%" onClick={onSubmit}>
        Login
      </Button>
    </Content>
  );
};

export default Singin;
