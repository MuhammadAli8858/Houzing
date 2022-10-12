import React from "react";
import { Container, Content, Details, Divider, Icons, Img } from "./style.js";
import noimg from "../../assets/img/noimg1.jpg";

const HouseCard = ({ data = {} }) => {
  const {
    attachments,
    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
  } = data;
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div id="info"> {address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icons.Bed />
            <div className="info"> {houseDetails?.beds || 0} Bed</div>
          </Details.Item>
          <Details.Item>
            <Icons.Bath />
            <div className="info"> {houseDetails?.bath || 0} Bath</div>
          </Details.Item>
          <Details.Item>
            <Icons.Garage />
            <div className="info"> {houseDetails?.garage || 0} Garage</div>
          </Details.Item>
          <Details.Item>
            <Icons.Ruler />
            <div className="info"> {houseDetails?.area || 0}kv</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item>
          <div className="info">
            <del>${salePrice || 0}/mo</del>
          </div>
          <div className="subTitle">${price || 0}/mo</div>
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
