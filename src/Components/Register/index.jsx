import React from "react";
import { AndTabs, Container } from "./style";
import Singin from "../Singin/index.jsx";
import Singup from "../Singup/index.jsx";

export const Register = () => {
  return (
    <Container>
      <AndTabs
        defaultActiveKey="1"
        items={[
          {
            label: "Sing in",
            key: "1",
            children: <Singin />,
          },
          {
            label: "Sing up",
            key: "2",
            children: <Singup />,
          },
        ]}
      />
    </Container>
  );
};

export default Register;
