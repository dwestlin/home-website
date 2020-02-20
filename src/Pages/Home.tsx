import React from "react";

import { Button, Form, Grid, Segment } from "semantic-ui-react";

export default function HomePage(): JSX.Element {
  return (
    <Grid textAlign="center">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />
            <Button fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
