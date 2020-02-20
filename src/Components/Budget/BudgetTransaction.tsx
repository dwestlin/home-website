import React, { useContext } from "react";
import { Budget } from "../../Contexts/Budget";
import { Button, Icon, Responsive, Card } from "semantic-ui-react";
import { IBudget } from "../../Interface";
import db from "../../Database/Firestore";

export default function BudgetTransaction({
  post: { id, name, type, amount }
}: any): JSX.Element {
  const { state, dispatch } = useContext(Budget);

  const removeTransaction = () => {
    // Remove the expense from state by filtering it.
    const newExpense = state.expenses.filter((fav: IBudget) => fav.id !== id);

    //Send the updated list to state.expsense
    dispatch({
      type: "REMOVE",
      payload: newExpense
    });

    db.collection("expenses")
      .doc(id)
      .delete()
      .catch((err: any) => console.log("ERROR", err));
  };

  return (
    <Responsive
      as={Card}
      fluid
      color={type === "Inkomst" ? "green" : "red"}
      minWidth={1}
      style={{ margin: 7 }}
    >
      <Card.Content>
        <Button
          color="red"
          name="trash"
          size="tiny"
          floated="right"
          onClick={() => {
            removeTransaction();
          }}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{amount}kr</Card.Meta>
      </Card.Content>
    </Responsive>
  );
}
