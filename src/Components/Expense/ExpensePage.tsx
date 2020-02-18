import React from "react";
import { IExpense } from "../../Interface";
import {
  Segment,
  Divider,
  Statistic,
  List,
  Placeholder
} from "semantic-ui-react";
import { Expense } from "../../Contexts/expense";
import NewExpenseForm from "./NewExpenseForm";

const ExpenseList = React.lazy<any>(() => import("./ExpenseList"));

export default function ExpensePage(): JSX.Element {
  const { state } = React.useContext(Expense);

  const showTotalExpenses = (): any => {
    let totalCosts = state.expenses.reduce(function(sum: IExpense, d: any) {
      return sum + d.amount;
    }, 0);
    return state.expenses.length ? (
      <Statistic.Group horizontal>
        <Statistic>
          <Statistic.Value>{totalCosts}</Statistic.Value>
          <Statistic.Label>SEK</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    ) : (
      ""
    );
  };

  const showExpenseList = () => {
    return (
      <React.Suspense
        fallback={
          <Placeholder fluid>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>
          </Placeholder>
        }
      >
        {state.expenses.length ? (
          <List relaxed>
            <Divider hidden />
            <ExpenseList />
            <Divider />
          </List>
        ) : (
          ""
        )}
      </React.Suspense>
    );
  };

  return (
    <Segment>
      <NewExpenseForm />
      {showExpenseList()}
      {showTotalExpenses()}
    </Segment>
  );
}
