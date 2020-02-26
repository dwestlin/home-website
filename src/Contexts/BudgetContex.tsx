import React from "react";
import { IBudgetState, IBudget } from "../Interface";
import reducer from "./BudgetReducer";
import app from "../Database/Firebase";

const initialState: IBudgetState = {
  expenses: []
};

export const Budget = React.createContext<IBudgetState | any>(initialState);

export function BudgetProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  function deleteTransaction(id: any): any {
    // Remove the expense from state by filtering it.
    const newExpense = state.expenses.filter((fav: IBudget) => fav.id !== id);

    //Send the updated list to state.expsense
    dispatch({
      type: "REMOVE",
      payload: newExpense
    });

    app
      .firestore()
      .collection("expenses")
      .doc(id)
      .delete()
      .catch((err: any) => console.log("ERROR", err));
  }

  function addTransactions(data: any): any {
    app
      .firestore()
      .collection("expenses")
      .add(data)
      .then((docs: any) => {
        const id = docs.id;
        dispatch({ type: "ADD", payload: { id, ...data } });
      })
      .catch((err: any) => console.log("ERROR", err));
  }

  return (
    <Budget.Provider
      value={{ state, dispatch, deleteTransaction, addTransactions }}
    >
      {children}
    </Budget.Provider>
  );
}
