import styled from "styled-components";
import { Tabs } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  width: 100%;
  background: #e6e9ec;
`;

export const AndTabs = styled(Tabs)`
  width: 100%;
  max-width: 580px;
  margin: 64px;
`;
