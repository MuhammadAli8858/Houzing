import styled from "styled-components";
import { ReactComponent as email } from "../../assets/icons/cardMassage.svg";
import { ReactComponent as calculator } from "../../assets/icons/calculator.svg";
import { ReactComponent as cardHouse } from "../../assets/icons/cardHouse.svg";
import { ReactComponent as cardMaps } from "../../assets/icons/cardMaps.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
  height: 434px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 235px;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

export const Icons = styled.div``;
Icons.Email = styled(email)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;
Icons.Calculator = styled(calculator)`
  margin-bottom: 24px;
`;
Icons.House = styled(cardHouse)`
  margin-bottom: 24px;
`;
Icons.Maps = styled(cardMaps)`
  margin-bottom: 24px;
`;
