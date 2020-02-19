import React, { useContext, useState } from "react";
import { Form, Input, Button } from "semantic-ui-react";
import { Expense } from "../../Contexts/expense";
import { db } from "../../Database/Firestore";

export default function NewExpenseForm() {
  const { dispatch } = useContext(Expense);
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

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
    <Form onSubmit={onSubmit}>
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
