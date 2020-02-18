import React from "react";
import { List } from "semantic-ui-react";
import { Expense } from "../../Contexts/expense";
import { IExpense } from "../../Interface";

export default function ExpenseDetail(props: IExpense): JSX.Element {
  const { state, dispatch } = React.useContext(Expense);
  const { name, amount, id } = props;
  return (
    <List.Item>
      <List.Icon
        name="delete"
        size="large"
        color="red"
        animated="true"
        verticalAlign="middle"
        onClick={() => {
          const withoutExpense = state.expenses.filter(
            (fav: any) => fav.id !== id
          );

          let dispatchObj = {
            type: "REMOVE",
            payload: withoutExpense
          };

          dispatch(dispatchObj);
        }}
      />
      <List.Content>
        <List.Header>{name}</List.Header>
        <List.Description>{amount} kr</List.Description>
      </List.Content>
    </List.Item>
  );
}
