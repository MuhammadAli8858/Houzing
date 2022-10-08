import React from "react";
import { Container, Content, Details, Divider, Icons, Img } from "./style.js";
import noimg from "../../assets/img/noimg1.jpg";

const HouseCard = ({ url, title, bed, bath, garage, ruler, info }) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div id="info"> {info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info"> {bed || 0} Bed</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info"> {bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info"> {garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info"> {ruler || 0} Ruler</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icons.Resize />
          <Icons.Love />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;
