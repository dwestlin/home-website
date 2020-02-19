import React from "react";
import { IExpenseState, IExpenseAction } from "../Interface";

const initialState: IExpenseState = {
  expenses: []
};

export const Expense = React.createContext<IExpenseState | any>(initialState);

function reducer(state: IExpenseState, action: IExpenseAction): IExpenseState {
  switch (action.type) {
    case "ADD":
      return { ...state, expenses: [...state.expenses, action.payload] };
    case "REMOVE":
      return { ...state, expenses: action.payload };
    case "FETCH_DATA":
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
