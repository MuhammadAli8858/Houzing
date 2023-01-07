import { Carousel } from "antd";
import React, { useRef } from "react";
import { Arrow, Blur, Container, Content, Img } from "./style";
import img1 from "../../assets/img/house3.png";
import img2 from "../../assets/img/house4.png";

const GenCarousel = () => {
  const slider = useRef();

  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "right") slider.current.next();
    if (name === "left") slider.current.prev();
  };
  return (
    <Container>
      <Carousel ref={slider} afterChange={onChange}>
        <Img src={img2} />
        <Img src={img1} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
        <Content.Price>$5,250 / month</Content.Price>
      </Content>
      <Arrow data-name="right" name="right" onClick={onMove} left={"true"} />
      <Arrow data-name="left" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
