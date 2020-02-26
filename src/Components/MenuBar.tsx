import React from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Menu } from "semantic-ui-react";
import { AuthContext } from "../Contexts/AuthContext";

export default function MenuBar() {
  const { logout } = React.useContext(AuthContext);

  return (
    <Header size="huge" icon textAlign="center">
      <Link to="/">
        <Icon name="blind" />
      </Link>

      <Menu inverted>
        <Menu.Item name="Ekonomi" as={Link} to="/budget" />
        {localStorage.getItem("user") ? (
          <Menu.Item
            position="right"
            name="Logout"
            as={Link}
            to="/login"
            onClick={() => logout()}
          />
        ) : (
          <Menu.Item position="left" name="Login" as={Link} to="/login" />
        )}
      </Menu>
    </Header>
  );
}
