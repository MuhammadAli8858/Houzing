import React from "react";
import { Blur, Container, Content, Img } from "./style.js";
import noimg from "../../assets/img/noimg1.jpg";
import category from "../../assets/img/category.png";

const CategoryCard = ({ onClick, data = {} }) => {
  const { name } = data;
  return (
    <Container onClick={onClick}>
      <Img src={category || noimg} />
      <Blur />
      <Content>{name || "Category Name"}</Content>
    </Container>
  );
};

export default CategoryCard;
