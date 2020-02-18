export interface IExpense {
  id: string;
  name: string;
  amount: number;
}

export interface IExpenseState {
  expenses: Array<IExpense>;
}

export interface IExpenseAction {
  type: string;
  payload: Array<IExpense> | any;
}

export interface IExpenseProps {
  expenses: IExpense[];
  store: { state: IExpenseState; dispatch: any };
}
