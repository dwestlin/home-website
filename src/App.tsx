import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";

import { Container } from "semantic-ui-react";
import { BudgetExpenseProvider } from "./Contexts/Budget";
import { AuthProvider } from "./Contexts/Auth";

import MenuBar from "./Components/MenuBar";
import { PrivateRoute } from "./Components/PrivateRoute";

import HomePage from "./Pages/Home";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";
import BudgetPage from "./Pages/Budget";

export default function App(): JSX.Element {
  return (
    <BudgetExpenseProvider>
      <AuthProvider>
        <Container>
          <Router>
            <MenuBar />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <PrivateRoute exact path="/budget" component={BudgetPage} />
            <Route exact path="/signup" component={SignupPage} />
          </Router>
        </Container>
      </AuthProvider>
    </BudgetExpenseProvider>
  );
}
