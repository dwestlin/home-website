import React from "react";
import app from "../Database/Firebase";

const initialState: any = {
  user: null,
  isAuthenticated: false
};

export const AuthContext = React.createContext(initialState);

function reducer(state: any, action: any): any {
  switch (action.type) {
    case "LOGIN":
      return { ...state, isAuthenticated: true, user: action.payload.user };
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
    return () => {
      return unsubscribe();
    };
  }, [state]);

  function logout() {
    app.auth().signOut();
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
