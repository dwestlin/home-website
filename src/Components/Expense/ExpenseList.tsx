import React, { useContext } from "react";
import { Expense } from "../../Contexts/expense";
import { List, Button, Table, Icon } from "semantic-ui-react";
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
      .catch((err: any) => console.log("ERROR", err));
  };

  return state.expenses.map((exp: any) => {
    return (
      <Table.Row key={exp.id}>
        <Table.Cell>{exp.name}</Table.Cell>
        <Table.Cell>{exp.amount}kr</Table.Cell>
        <Table.Cell>Utgift</Table.Cell>
        <Table.Cell textAlign="right">
          <Button size="tiny" color="green">
            <Button.Content visible>
              <Icon name="pen square" size="large" onClick={() => {}} />
            </Button.Content>
          </Button>
          <Button size="tiny" color="red">
            <Button.Content visible>
              <Icon
                name="trash"
                size="large"
                onClick={() => {
                  removeExpense(exp);
                }}
              />
            </Button.Content>
          </Button>
        </Table.Cell>
      </Table.Row>
    );
  });
}
