export interface IBudget {
  id: string;
  name: string;
  amount: any;
  type: string;
}

export interface IBudgetState {
  expenses: Array<IBudget>;
}

export interface IBudgetAction {
  type: string;
  payload: Array<IBudget> | any;
}

export interface IBudgetProps {
  expenses: IBudget[];
  store: { state: IBudgetState; dispatch: any };
}
