import React, { useContext } from "react";
import { Budget } from "../../Contexts/BudgetContex";
import { Button, Icon, Card } from "semantic-ui-react";

export default function BudgetTransaction({ post }: any): JSX.Element {
  const { deleteTransaction } = useContext(Budget);

  return (
    <Card fluid color={post.type === "Inkomst" ? "green" : "red"}>
      <Card.Content>
        <Button
          color="red"
          name="trash"
          floated="right"
          onClick={() => {
            deleteTransaction(post.id);
          }}
        >
          <Icon name="trash" style={{ margin: 0 }} />
        </Button>
        <Card.Header>{post.name}</Card.Header>
        <Card.Meta>
          {post.type === "Utgift" ? "-" : ""}
          {post.amount}kr
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}
