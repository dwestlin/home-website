import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { BudgetProvider } from "./Contexts/BudgetContex";
import { AuthProvider } from "./Contexts/AuthContext";
import MenuBar from "./Pages/MenuBar";
// import { PrivateRoute } from "./Components/PrivateRoute";

import HomePage from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import BudgetPage from "./Pages/Budget";

export default function App(): JSX.Element {
  return (
    <BudgetProvider>
      <AuthProvider>
        <Container>
          <Router>
            <MenuBar />
            <Route exact path="/" component={BudgetPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/budget" component={BudgetPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Router>
        </Container>
      </AuthProvider>
    </BudgetProvider>
  );
}
