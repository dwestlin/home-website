import React from "react";
import { Expense } from "../../Contexts/expense";
import { Form, Input, Button, Grid, Header } from "semantic-ui-react";
import { db } from "../../Database/Firestore";

export default function NewBudgetForm() {
  const { dispatch } = React.useContext(Expense);
  const [name, setName] = React.useState<string>("");
  const [amount, setAmount] = React.useState<number>(0);

  const onSubmit = (e: any) => {
    e.preventDefault();

    let data = {
      name: name,
      amount: amount
    };

    db.collection("expenses")
      .add(data)
      .then((docs: any) => {
        let id = docs.id;
        dispatch({ type: "ADD", payload: { id, ...data } });
        setName("");
        setAmount(0);
      });
  };

  return (
    <Grid.Column>
      <Header as="h1">Inkomst</Header>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            onChange={e => setName(e.target.value)}
            placeholder="Mottagare"
            value={name}
          />
        </Form.Field>
        <Form.Field>
          <Input
            type="number"
            onChange={e => setAmount(e.target.valueAsNumber)}
            placeholder="Utgift"
            value={amount}
          />
        </Form.Field>
        <Button color="green" fluid type="submit">
          Lägg till
        </Button>
      </Form>
    </Grid.Column>
  );
}
