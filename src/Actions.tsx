import { IExpense } from './Interface'

export const removeExpense = (props: any, state: any, dispatch: any) => {
    const newExpense = state.expenses.filter((fav: IExpense) => fav.id !== props.id);

    let dispatchObj = {
        type: "REMOVE",
        payload: newExpense
    };

    dispatch(dispatchObj);
};