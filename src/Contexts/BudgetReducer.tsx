import { IBudgetState, IBudgetAction } from "../Interface";

const budgetReducer = (
  state: IBudgetState,
  action: IBudgetAction
): IBudgetState => {
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
};

export default budgetReducer;
