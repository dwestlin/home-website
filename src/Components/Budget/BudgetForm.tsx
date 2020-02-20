import React, { useContext, useState } from "react";
import { Form, Input, Button, Checkbox, Divider } from "semantic-ui-react";

import { Budget } from "../../Contexts/Budget";
import db from "../../Database/Firestore";

export default function BudgetForm() {
  const { dispatch } = useContext(Budget);
  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const toggle = () => setChecked(checked => !checked);

  const onSubmit = (e: any) => {
    e.preventDefault();

    let data = {
      name: name,
      amount: amount,
      type: checked ? "Inkomst" : "Utgift"
    };

    db.collection("expenses")
      .add(data)
      .then((docs: any) => {
        let id = docs.id;
        dispatch({ type: "ADD", payload: { id, ...data } });
        setName("");
        setAmount(0);
        setChecked(false);
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Field>
        <Input
          type="text"
          onChange={e => setName(e.target.value)}
          placeholder="Namn"
          value={name}
          required
        />
      </Form.Field>
      <Form.Field>
        <Input
          type="number"
          onChange={e => setAmount(e.target.valueAsNumber)}
          placeholder="Belopp"
          value={amount}
          required
        />
        <Divider hidden />
      </Form.Field>
      <Checkbox label="Inkomst" onChange={toggle} checked={checked} />
      <Divider hidden />
      <Button color="green" fluid type="submit">
        Lägg till
      </Button>
    </Form>
  );
}
