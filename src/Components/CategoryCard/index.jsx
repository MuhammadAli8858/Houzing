import React from "react";
import { Blur, Container, Content, Img } from "./style.js";
import noimg from "../../assets/img/noimg1.jpg";
import category from "../../assets/img/category.png";

const HouseCard = ({ data = {} }) => {
  const { name } = data;
  return (
    <Container>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default HouseCard;
