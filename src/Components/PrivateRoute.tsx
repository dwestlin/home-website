import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { AuthContext } from "../Contexts/Auth";

export const PrivateRoute = ({ component: Component, ...rest }: any): any => {
  const { state } = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={props =>
        state.isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};
