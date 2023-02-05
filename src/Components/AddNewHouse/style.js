import { Select } from "antd";
import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
`;

export const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  justify-content: ${({ gap }) => (gap ? "space-between" : "start")};
  gap: 20px;
  margin-bottom: 20px;
`;

export const SelectAnt = styled(Select)`
  min-width: 200px;
  max-width: 200px;
  width: 100%;
  .ant-select-selector {
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

export const Icons = styled.div``;

Icons.Delete = styled(del)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }

  :hover {
    & path {
      fill: red;
    }
  }
`;
