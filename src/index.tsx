import React from "react";
import ReactDOM from "react-dom";
import { ExpenseProvider } from "./Contexts/expense";
import "semantic-ui-css/semantic.min.css";
import { Router, RouteComponentProps } from "@reach/router";
import App from "./App";
import LandingPage from "./LandingPage";
import ExpensePage from "./Components/Expense/ExpensePage";
import RecipePage from "./Components/Recipe/RecipePage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
ReactDOM.render(
  <ExpenseProvider>
    <Router>
      <App path="/">
        <RouterPage pageComponent={<LandingPage />} path="/" />
        <RouterPage pageComponent={<ExpensePage />} path="/expense" />
        <RouterPage pageComponent={<RecipePage />} path="/recipe" />
      </App>
    </Router>
  </ExpenseProvider>,
  document.getElementById("root")
);
