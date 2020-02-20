import React from "react";
import { Link } from "@reach/router";
import { Header, Icon, Menu } from "semantic-ui-react";

export default function MenuBar() {
  return (
    <Header as="h1" icon textAlign="center">
      <Icon name="blind" circular />
      <Menu inverted>
        <Menu.Item name="Start" as={Link} to="/" />
        <Menu.Item name="Ekonomi" as={Link} to="/budget" />
        <Menu.Item name="Recept" as={Link} to="/recipe" />
      </Menu>
    </Header>
  );
}
