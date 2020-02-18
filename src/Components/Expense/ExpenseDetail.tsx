import React from "react";
import { List } from "semantic-ui-react";
import { Expense } from "../../Contexts/expense";
import { IExpense } from "../../Interface";

export default function ExpenseDetail(props: IExpense): JSX.Element {
  const { state, dispatch } = React.useContext(Expense);
  const { name, amount, id }: IExpense = props;

  const removeExpense = () => {
    const newExpense = state.expenses.filter((fav: IExpense) => fav.id !== id);

    let dispatchObj = {
      type: "REMOVE",
      payload: newExpense
    };

    dispatch(dispatchObj);
  };

  return (
    <List.Item>
      <List.Icon
        name="delete"
        size="large"
        color="red"
        animated="true"
        verticalAlign="middle"
        onClick={() => {
          removeExpense();
        }}
      />
      <List.Content>
        <List.Header>{name}</List.Header>
        <List.Description>{amount} kr</List.Description>
      </List.Content>
    </List.Item>
  );
}
