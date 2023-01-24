import styled from "styled-components";
import { ReactComponent as house } from "../../assets/icons/house.svg";
import { ReactComponent as apartment } from "../../assets/icons/apartment.svg";
import { ReactComponent as office } from "../../assets/icons/office.svg";
import { ReactComponent as villa } from "../../assets/icons/villa.svg";

export const Container = styled.div`
  border-radius: 3px;
  width: 100%;
  max-width: 280px;
  min-width: 230px;

  max-height: 380px;
  min-height: 350px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

export const Img = styled.img`
  border-radius: 3px;

  width: 100%;
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  justify-content: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;

  color: #ffffff;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  border-radius: 3px;
`;

export const Icons = styled.div``;

Icons.House = styled(house)``;
Icons.Apartment = styled(apartment)``;
Icons.Office = styled(office)``;
Icons.Villa = styled(villa)``;
