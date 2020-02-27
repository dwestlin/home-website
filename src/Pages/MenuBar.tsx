import React from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Menu } from "semantic-ui-react";

export default function MenuBar() {
  return (
    <Header size="huge" icon textAlign="center">
      <Link to="/">
        <Icon name="blind" />
      </Link>

      <Menu inverted>
        <Menu.Item name="Ekonomi" as={Link} to="/" />
      </Menu>
    </Header>
  );
}
