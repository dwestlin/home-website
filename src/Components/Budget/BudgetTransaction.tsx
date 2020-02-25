import React, { useContext } from "react";
import { Budget } from "../../Contexts/Budget";
import { Button, Icon, Card } from "semantic-ui-react";

export default function BudgetTransaction({
  post: { id, name, type, amount }
}: any): JSX.Element {
  const { deleteTransaction } = useContext(Budget);

  return (
    <Card
      fluid
      color={type === "Inkomst" ? "green" : "red"}
      style={{ margin: 7 }}
    >
      <Card.Content>
        <Button
          color="red"
          name="trash"
          size="tiny"
          floated="right"
          onClick={() => {
            deleteTransaction(id);
          }}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{amount}kr</Card.Meta>
      </Card.Content>
    </Card>
  );
}
