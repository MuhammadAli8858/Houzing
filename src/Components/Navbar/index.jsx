import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Logo, Section } from "../Navbar/style";
import { Wrapper } from "./style";
import logoImg from '../../assets/icons/logo.svg'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Section>
          <Logo /> <h3>Houzing</h3>
        </Section>
        <Section>2</Section>
        <Section>3</Section>
      </Wrapper>
      <Outlet />
    </Container>
  );
};

export default Navbar;
