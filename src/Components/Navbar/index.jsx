import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import { Wrapper, Container, Logo, Section, Link, Main } from "./style";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "actives"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Section>
          <Section>
            <button>Sing in</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};

export default Navbar;
