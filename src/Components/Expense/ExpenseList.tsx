import React, { useContext } from "react";
import { Expense } from "../../Contexts/expense";
import ExpenseDetail from "./ExpenseDetail";

export default function ExpenseList(): Array<JSX.Element> {
  const { state } = useContext(Expense);

  return state.expenses.map((exp: any) => {
    return <ExpenseDetail key={exp.id} {...exp} />;
  });
}
