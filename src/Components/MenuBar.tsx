import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Header, Icon, Menu } from "semantic-ui-react";
import { AuthContext } from "../Contexts/Auth";

export default function MenuBar() {
  const { state, logout } = React.useContext(AuthContext);

  React.useEffect(() => {}, [state]);
  return (
    <Header size="large" icon textAlign="center">
      <Link to="/">
        <Icon size="massive" name="blind" circular />
      </Link>
      <Menu inverted>
        {localStorage.getItem("user") ? (
          <Fragment>
            <Menu.Item name="Ekonomi" as={Link} to="/budget" />
            <Menu.Item
              position="right"
              name="Logout"
              onClick={() => logout()}
            />
          </Fragment>
        ) : (
          <Menu.Item position="left" name="Login" as={Link} to="/login" />
        )}
      </Menu>
    </Header>
  );
}
