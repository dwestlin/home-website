import React, { useContext, useState } from "react";
import { Form, Input, Button, Checkbox, Divider } from "semantic-ui-react";
import { Budget } from "../../Contexts/BudgetContex";

export default function BudgetForm() {
  const { addTransactions } = useContext(Budget);

  const [name, setName] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  const [checked, setChecked] = useState<boolean>(false);

  const toggleCheckbox = () => setChecked(checked => !checked);

  const addTransaction = (e: any) => {
    e.preventDefault();

    const data = {
      name: name,
      amount: amount,
      type: checked ? "Inkomst" : "Utgift"
    };

    addTransactions(data);
    setName("");
    setAmount(0);
    setChecked(false);
  };

  return (
    <Form onSubmit={addTransaction}>
      <Form.Field>
        <Input
          type="text"
          autoFocus
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
      <Checkbox label="Inkomst" onChange={toggleCheckbox} checked={checked} />
      <Divider hidden />
      <Button color="green" fluid type="submit">
        Lägg till
      </Button>
    </Form>
  );
}
