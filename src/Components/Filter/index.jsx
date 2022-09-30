import React from "react";
import { Input, Button } from "../Generic";
import { Container, Icons } from "./style";

const Filter = () => {
  return (
    <Container>
      <Input
        icon={<Icons.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Button type="light">
        <Icons.Filter />
        Advanced
      </Button>
      {/* <Dropdown
        overlays={<h1>test</h1>}
        placeholder="bottomRight"
        arrow={{ pointAtCenter: true }}
      > */}
        <Button>
          <Icons.Search />
          Search
        </Button>
      {/* </Dropdown> */}
    </Container>
  );
};

export default Filter;
