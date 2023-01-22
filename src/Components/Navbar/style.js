import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";
import { ReactComponent as profile } from "../../assets/icons/profile.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
  width: 100%;

  max-width: 1440px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #b8ff06;
  }
`;
export const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffffff;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 0 32px;
  color: #ffffff;
`;

export const Profile = styled(profile)`
  width: 23px;
  height: 23px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #ffffff;
  padding: 16px;
  width: 177px;
  border-radius: 5px;
  box-shadow: 0px 20px 38px rgba(0, 0, 0, 0.06),
    0px 7px 46px rgba(0, 0, 0, 0.06), 0px 8px 15px rgba(0, 0, 0, 0.06);
`;

Menu.Item = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-size: 400;
  line-height: 20px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
  color: black;
`;
