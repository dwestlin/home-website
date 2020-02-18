import React, { useContext } from "react";
import { Expense } from "../../Contexts/expense";
import { List } from "semantic-ui-react";
import { removeExpense } from '../../Actions'
export default function ExpenseList(): JSX.Element {
  const { state, dispatch } = useContext(Expense);

  return state.expenses.map((exp: any) => {
    return (
      <List.Item>
        <List.Icon
          name="delete"
          size="large"
          color="red"
          animated="true"
          verticalAlign="middle"
          onClick={() => {
            removeExpense(exp, state, dispatch);
          }}
        />
        <List.Content>
          <List.Header>{exp.name}</List.Header>
          <List.Description>{exp.amount} kr</List.Description>
        </List.Content>
      </List.Item>
    )
  });
}
