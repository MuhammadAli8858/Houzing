import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: fit-content;
`;

export const Img = styled.img`
  width: 100%;
  height: 571px;
  left: 0px;
  top: 128px;
`;

export const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
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
`;
Content.Title = styled.h1`
  width: 567px;
  height: 72px;

  margin-bottom: 48px;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  /* or 129% */

  text-align: center;
  letter-spacing: -0.02em;

  color: #ffffff;
`;
