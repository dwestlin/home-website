import React, { useContext } from "react";
import { Expense } from "../../Contexts/expense";
import { List } from "semantic-ui-react";
import { IExpense } from "../../Interface";
import { db } from "../../Database/Firestore";

export default function ExpenseList(): JSX.Element {
  const { state, dispatch } = useContext(Expense);

  const removeExpense = (props: IExpense) => {
    // Remove the expense from state by filtering it.
    const newExpense = state.expenses.filter(
      (fav: IExpense) => fav.id !== props.id
    );

    //Send the updated list to state.expsense
    dispatch({
      type: "REMOVE",
      payload: newExpense
    });

    db.collection("expenses")
      .doc(props.id)
      .delete()
      .catch((err: any) => console.log("ERR", err));
  };

  return state.expenses.map((exp: any) => {
    return (
      <List.Item key={exp.id}>
        <List.Icon
          name="delete"
          size="large"
          color="red"
          animated="true"
          verticalAlign="middle"
          onClick={() => {
            removeExpense(exp);
          }}
        />
        <List.Content>
          <List.Header>{exp.name}</List.Header>
          <List.Description>{exp.amount} kr</List.Description>
        </List.Content>
      </List.Item>
    );
  });
}
