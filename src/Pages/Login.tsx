import React from "react";

import { AuthContext } from "../Contexts/Auth";
import { Button, Form, Grid, Header, Message } from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";

const LoginPage = () => {
  const { login } = React.useContext(AuthContext);

  if (localStorage.getItem("user")) {
    return <Redirect to="/" />;
  }

  return (
    <Grid textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1">Login</Header>
        <Form onSubmit={login} size="large">
          <Form.Input
            name="email"
            icon="user"
            iconPosition="left"
            placeholder="E-mail address"
          />
          <Form.Input
            name="password"
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button type="submit" fluid size="large">
            Login
          </Button>
        </Form>
        <Message>
          Not a member? <Link to="/signup">Sign up</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginPage;
