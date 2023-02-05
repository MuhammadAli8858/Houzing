import React from "react";
import Carousel from "../Carousel";
import Recommended from "../Recommended";
import Category from "../Category";
import WhyChoolUs from "../WhyChoolUs";
import Recent from "../Recent";
import Banner from "../Banner";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommended />
      <WhyChoolUs />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;
