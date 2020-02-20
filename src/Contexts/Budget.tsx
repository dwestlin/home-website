import React from "react";
import { IBudgetState, IBudgetAction } from "../Interface";

const initialState: IBudgetState = {
  expenses: []
};

export const Budget = React.createContext<IBudgetState | any>(initialState);

function reducer(state: IBudgetState, action: IBudgetAction): IBudgetState {
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

export function BudgetExpenseProvider({
  children
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Budget.Provider value={{ state, dispatch }}>{children}</Budget.Provider>
  );
}
