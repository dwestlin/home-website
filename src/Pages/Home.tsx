import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";

const HomePage = ({ history }: any): JSX.Element => {
  if (!localStorage.getItem("user")) {
    return <Redirect to="/login" />;
  }

  return <Fragment>Välkommen</Fragment>;
};

export default HomePage;
