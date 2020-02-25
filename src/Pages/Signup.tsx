import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../Database/Firebase";
import { Header, Form, Button, Grid, Segment } from "semantic-ui-react";

const Signup = ({ history }: any) => {
  const handleSignup = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <Grid textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h1">Sign up</Header>
        <Form onSubmit={handleSignup} size="large">
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
      </Grid.Column>
    </Grid>
  );
};

export default withRouter(Signup);
