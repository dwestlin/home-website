import React, { useCallback } from "react";
import app from "../Database/Firebase";
import { Redirect } from "react-router-dom";

const initialState: any = {
  user: null,
  isAuthenticated: false
};

export const AuthContext = React.createContext(initialState);

function reducer(state: any, action: any): any {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { ...state, isAuthenticated: false, user: null };
    default:
      return state;
  }
}

export function AuthProvider({ children }: JSX.ElementChildrenAttribute): any {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    const unsubscribe = app.auth().onAuthStateChanged(user => {
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
        localStorage.setItem("user", JSON.stringify(user.email));
      } else {
        state.isAuthenticated = false;
        state.user = null;
        localStorage.removeItem("user");
      }
    });
    return () => unsubscribe();
  }, [state]);

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
        let user = await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);

        let data = await app.auth().currentUser?.getIdToken();
        console.log(data);
        dispatch({ type: "LOGIN", payload: data });
        return <Redirect to="/" />;
      } catch (error) {
        alert(error);
      }
    },
    [dispatch]
  );

  return (
    <AuthContext.Provider value={{ state, dispatch, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
}
