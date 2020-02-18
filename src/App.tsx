import React from "react";
import { Link } from "@reach/router";
import { Header, Icon, Menu, Container } from "semantic-ui-react";

export default function App(props: any): JSX.Element {
  return (
    <Container>
      <Header as="h1" icon textAlign="center">
        <Icon name="blind" circular />
        <Menu inverted>
          <Menu.Item>
            <Link to="/">Start</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/expense">Ekonomi</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/recipe">Recept</Link>
          </Menu.Item>
        </Menu>
      </Header>
      {props.children}
    </Container>
  );
}
