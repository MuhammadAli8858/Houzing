import styled from "styled-components";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as bed } from "../../assets/icons/bed.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as resize } from "../../assets/icons/resize.svg";
import { ReactComponent as download } from "../../assets/icons/download.svg";

import { ReactComponent as airConditioner } from "../../assets/icons/air-conditioner 1.svg";
import { ReactComponent as barbeque } from "../../assets/icons/barbecue.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as gym } from "../../assets/icons/gym.svg";
import { ReactComponent as lawn } from "../../assets/icons/lawn.svg";
import { ReactComponent as laundry } from "../../assets/icons/laundry.svg";
import { ReactComponent as microwave } from "../../assets/icons/microwave.svg";
import { ReactComponent as outdoorShower } from "../../assets/icons/outdoor-shower.svg";
import { ReactComponent as refrigerator } from "../../assets/icons/refrigerator.svg";
import { ReactComponent as sauna } from "../../assets/icons/sauna.svg";
import { ReactComponent as swimmingPool } from "../../assets/icons/swimmer.svg";
import { ReactComponent as TVCable } from "../../assets/icons/TVCable.svg";
import { ReactComponent as washer } from "../../assets/icons/washer.svg";
import { ReactComponent as wifi } from "../../assets/icons/wifi.svg";
import { ReactComponent as windowCoverings } from "../../assets/icons/windowCoverings.svg";
import { ReactComponent as diningRoom } from "../../assets/icons/diningRoom.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => `${gap}px`};
  ~ .user {
    background: #ffffff;
    border: 1px solid #e6e9ec;
    border-radius: 3px;
    margin-left: 20px;
    padding: 24px;
    gap: 24px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid #e6e9ec;
  padding: 5px;
  color: #000000;
  margin-bottom: 10px;
  border-radius: 4px;
  width: 200px;
  font-weight: 500;
  font-style: normal;
  /* font-family: "Silkscreen", cursive; */
  font-family: "Montserrat";
  :focus {
    border-bottom: 1px solid #000000;
  }
  :active {
    opacity: 0.7;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  margin: auto;
  justify-content: ${({ jc }) => jc};
  width: 100%;
  padding: var(--padding);
  max-width: var(--width);
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Content = styled.div`
  display: flex;
  align-items: ${({ flex }) => flex && "center"};
  justify-content: ${({ flex }) => !flex && "center"};
  flex-direction: ${({ flex }) => !flex && "column"};
`;

export const FirstName = styled.div`
  text-align: end;
  margin-top: -20px;
  color: #696969;
`;
export const Del = styled.del`
  color: #696969;
`;
Content.Title = styled.div`
  width: 100%;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: ${({ large }) => (large ? "24px" : "18px")};
  line-height: 32px;

  letter-spacing: -0.02em;
  color: #0d263b;

  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  padding-top: 16px;
  margin-top: 32px 0;
`;

Details.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  margin: 0 24px 0 8px;
`;

export const Icons = styled.div``;

Icons.Share = styled(share)`
  display: flex;
  padding: 2px;
  background: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Love = styled(love)`
  display: fle x;
  padding: 2px;
  background: #f6f8f9;
  border-radius: 10px;
  width: 35px;
  height: 35px;
  margin: 0 10px 0 26px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;
Icons.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  color: #696969;
`;

Icons.Bed = styled(bed)``;
Icons.Bath = styled(bath)``;
Icons.Garage = styled(garage)``;
Icons.Ruler = styled(ruler)``;
Icons.Resize = styled(resize)``;
Icons.Download = styled(download)`
  margin-right: 10px;
`;

export const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 50%;
`;

Icons.AirConditioner = styled(airConditioner)``;
Icons.Barbeque = styled(barbeque)``;
Icons.Dryer = styled(dryer)``;
Icons.Gym = styled(gym)``;

Icons.Lawn = styled(lawn)``;
Icons.Laundry = styled(laundry)``;
Icons.Microwave = styled(microwave)``;
Icons.OutdoorShower = styled(outdoorShower)``;

Icons.Refrigerator = styled(refrigerator)``;
Icons.Sauna = styled(sauna)``;
Icons.SwimmingPool = styled(swimmingPool)``;
Icons.TVCable = styled(TVCable)``;

Icons.Washer = styled(washer)``;
Icons.Wifi = styled(wifi)``;
Icons.WindowCoverings = styled(windowCoverings)``;
Icons.DiningRoom = styled(diningRoom)``;

export const Description = styled.div`
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
`;

Description.Title = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin-top: 16px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
export const Documents = styled.div`
  display: flex;
  gap: 50px;
`;

export const Download = styled.a`
  margin-left: 24px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

export const User = styled.div``;

User.Img = styled.img`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const Property = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-bottom: 24px;
  margin-top: 24px;
`;

ImageContainer.Main = styled.img`
  width: 100%;
  max-width: 580px;
  max-height: 400px;
`;

ImageContainer.Subimg = styled.img`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;

export const Blur = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: bold;
  position: absolute;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */

  letter-spacing: -0.02em;

  width: 100%;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;

Blur.Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 280px;
  max-height: 190px;
`;
