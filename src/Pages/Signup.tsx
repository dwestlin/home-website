import React from "react";
import { withRouter } from "react-router";

import { Header, Form, Button, Grid, Message } from "semantic-ui-react";
import { AuthContext } from "../Contexts/AuthContext";

const Signup = ({ history }: any) => {
  const { state, signup } = React.useContext(AuthContext);
  return (
    <Grid textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1">Sign up</Header>
        <Form onSubmit={signup} size="large">
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

          <Button fluid size="large" type="submit">
            Sign up
          </Button>
        </Form>
        {state.error && <Message negative>{state.error.message}</Message>}
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Signup);
