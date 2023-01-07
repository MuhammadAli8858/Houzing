import React from "react";
import { Blur, Container, Content, Img } from "./style";
import { Button } from "../Generic";
import img2 from "../../assets/img/house4.png";

const Banner = () => {
  return (
    <Container>
      <Img src={img2} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is the Week`s Most Popular Home
        </Content.Title>
        <Button>Read more</Button>
      </Content>
    </Container>
  );
};

export default Banner;
