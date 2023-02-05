import { Table } from "antd";
import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

export const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 30px;
  margin-top: 32px;
`;

export const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: auto;
  margin-top: 50px;
`;

export const AntTable = styled(Table)``;

export const Button = styled.button`
  display: flex;
  margin-left: auto;
  margin-bottom: auto;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  font-family: "Montserrat";
  font-weight: 600;
  height: ${({ he }) => (he ? "39px" : "27px")};
  min-width: 91px;
  max-width: ${({ mw }) => (mw ? "130px" : "91px")};
  width: 100%;
  background: #0d263b;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  :active {
    transform: scale(0.95);
  }
`;

export const Icons = styled.div``;

Icons.Edit = styled(edit)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
  :hover {
    & path {
      fill: blue;
    }
  }
`;
Icons.Delete = styled(del)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
  :hover {
    & path {
      fill: red;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-left: ${({ left }) => left && "16px"};
  margin-top: ${({ mt }) => mt};
`;

User.Img = styled.img`
  width: 113px;
  height: 113px;
`;
