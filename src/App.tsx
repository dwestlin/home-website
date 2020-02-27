import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import { BudgetProvider } from "./Contexts/BudgetContex";
import MenuBar from "./Pages/MenuBar";
import BudgetPage from "./Pages/Budget";

export default function App(): JSX.Element {
  return (
    <BudgetProvider>
      <Container>
        <Router>
          <MenuBar />
          <Route exact path="/" component={BudgetPage} />
          <Route exact path="/budget" component={BudgetPage} />
        </Router>
      </Container>
    </BudgetProvider>
  );
}
