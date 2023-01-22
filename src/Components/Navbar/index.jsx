import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import Footer from "../Footer";
import Button from "../Generic/Button";
import {
  Wrapper,
  Container,
  Logo,
  Section,
  Link,
  Main,
  Menu,
  Profile,
} from "./style";
import { Dropdown } from "antd";
// import placements from "rc-tooltip/lib/placements";

export const Navbar = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate();

  const onClick = () => {
    return navigate("/singin");
  };
  const onClickProfile = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "logout") {
      localStorage.removeItem("token");
      navigate(`/home`);
    } else {
      navigate(`${name}`);
    }
  };

  const menu = (
    <Menu>
      <Menu.Item data-name="myprofile" onClick={onClickProfile}>
        My Profile
      </Menu.Item>
      <Menu.Item data-name="myproperties" onClick={onClickProfile}>
        My Properties{" "}
      </Menu.Item>
      <Menu.Item data-name="favourite" onClick={onClickProfile}>
        Favourites
      </Menu.Item>
      <Menu.Item data-name="logout" onClick={onClickProfile}>
        Log out
      </Menu.Item>
    </Menu>
  );

  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo>
            <Logo /> <h3 style={{ color: "white" }}>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({ title, path, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "actives"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Section>
          <Section>
            {token ? (
              <Dropdown
                overlay={menu}
                placement="topRight"
                arrow={{ pointAtCenter: true }}
                trigger="click"
              >
                <Profile type={"dark"} />
              </Dropdown>
            ) : (
              <Button onClick={onClick} type={"dark"}>
                Sing in
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
