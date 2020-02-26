import React, { useCallback } from "react";
import app from "../Database/Firebase";

import authReducer from "./AuthReducer";

const initialState: any = {
  user: null,
  isAuthenticated: false,
  error: null
};

export const AuthContext = React.createContext(initialState);

export function AuthProvider({ children }: JSX.ElementChildrenAttribute): any {
  const [state, dispatch] = React.useReducer(authReducer, initialState);

  React.useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch({ type: "LOGIN", payload: user });
      } else {
        dispatch({ type: "LOGOUT" });
        localStorage.removeItem("user");
      }
    });
    return unsubscribe();
  }, []);

  function logout() {
    app.auth().signOut();
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  }

  const login = useCallback(
    async event => {
      event.preventDefault();

      const { email, password } = event.target.elements;

      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        let data = await app.auth().currentUser?.getIdToken();
        localStorage.setItem("user", JSON.stringify(data));
        dispatch({ type: "LOGIN", payload: data });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error });
      }
    },
    [dispatch]
  );

  const signup = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, logout, login, signup }}>
      {children}
    </AuthContext.Provider>
  );
}
