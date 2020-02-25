import React, { Fragment } from "react";
import LoginPage from "./Login";
import { AuthContext } from "../Contexts/Auth";

export default function HomePage(): JSX.Element {
  const { state } = React.useContext(AuthContext);
  React.useEffect(() => {}, [state.isAuthenticated]);

  return (
    <Fragment>
      {localStorage.getItem("user") ? (
        `Välkommen ${
          state.user
            ? state.user.email
            : localStorage.getItem("user")!.replace(/"/g, "")
        }`
      ) : (
        <LoginPage />
      )}
    </Fragment>
  );
}
