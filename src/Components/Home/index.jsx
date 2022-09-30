import React from "react";
// import Button from "../Generic/Button";
import { Input, Button } from "../Generic/idex";
// import { Input, Button } from "../Generic";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      Home
      <Input width={200} placeholder={"test"} />
      <Button>test</Button>
    </Container>
  );
};

export default Home;
