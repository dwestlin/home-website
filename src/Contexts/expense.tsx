import React from "react";
import { IExpenseState, IExpenseAction } from "../Interface";

const initialState: IExpenseState = {
  expenses: [
    { id: "1sdads", name: "Viaplay", amount: 199 },
    { id: "1sdsad", name: "Spotify", amount: 99 },
    { id: "dsadas", name: "BRF Avgift", amount: 3450 }
  ]
};

export const Expense = React.createContext<IExpenseState | any>(initialState);

function reducer(state: IExpenseState, action: IExpenseAction): IExpenseState {
  switch (action.type) {
    case "ADD":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "REMOVE":
      return { ...state, expenses: action.payload };
    default:
      return state;
  }
}

export function ExpenseProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Expense.Provider value={{ state, dispatch }}>{children}</Expense.Provider>
  );
}
