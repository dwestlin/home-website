import React, { useContext, useState } from "react";
import uuidv4 from "uuid/v4";
import { Form, Input, Button } from "semantic-ui-react";
import { Expense } from "../../Contexts/expense";

export default function NewExpenseForm() {
  const { dispatch } = useContext(Expense);
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let id = uuidv4();
    dispatch({ type: "ADD", payload: { id, name, amount } });
    setName("");
    setAmount(0);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Namn</label>
        <Input
          onChange={e => setName(e.target.value)}
          placeholder="Mottagare"
          value={name}
        />
      </Form.Field>
      <Form.Field>
        <label>Belopp</label>
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
  );
}
