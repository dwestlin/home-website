import React from "react";
import MenuBar from "./Components/MenuBar";
import { Container } from "semantic-ui-react";
import { BudgetExpenseProvider } from "./Contexts/Budget";
import "semantic-ui-css/semantic.min.css";
import { Router, RouteComponentProps } from "@reach/router";
import HomePage from "./Pages/Home";
import BudgetPage from "./Pages/Budget";
import RecipePage from "./Components/Recipe/RecipePage";

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

export default function App(): JSX.Element {
  return (
    <BudgetExpenseProvider>
      <Container>
        <MenuBar />
        <Router>
          <RouterPage pageComponent={<HomePage />} path="/" />
          <RouterPage pageComponent={<BudgetPage />} path="/budget" />
          <RouterPage pageComponent={<RecipePage />} path="/recipe" />
        </Router>
      </Container>
    </BudgetExpenseProvider>
  );
}
