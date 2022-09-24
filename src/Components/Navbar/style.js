import styled from "styled-components";
import { ReactComponent as logoImg } from "../../assets/icons/logo.svg";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--colorPrimary);
  color: #ffffff;
  padding: var(--padding);
  height: 64px;
  font-size: 16px;
`;

export const Section = styled.div`
  display: flex;
  align-items: center;
  `;
export const Logo = styled(logoImg)`
  width: 30px;
  margin-right: 12px;
  & path {
    fill: #ffffff;
  }
`;
