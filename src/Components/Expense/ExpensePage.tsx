import React from "react";
import { IExpense } from "../../Interface";
import { Segment, Divider, Statistic, List } from "semantic-ui-react";
import { Expense } from "../../Contexts/expense";
import NewExpenseForm from "./NewExpenseForm";
import ExpenseList from "./ExpenseList";
import { db } from "../../Database/Firestore";

const SORT_OPTIONS: any = {
  COST_ASC: { column: "amount", direction: "asc" },
  COST_DESC: { column: "amount", direction: "desc" },
  TITLE_ASC: { column: "name", direction: "asc" },
  TITLE_DESC: { column: "name", direction: "desc" }
};

export default function ExpensePage(): JSX.Element {
  const { state, dispatch } = React.useContext(Expense);
  const [sortBy, setSortby] = React.useState("TITLE_ASC");

  React.useEffect(() => {
      
      const unsubscribe:any = db.collection("expenses")
      .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
      .get()
      .then(snapshot => {
        const newExpenses = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          amount: doc.data().amount
        }));
        dispatch({ type: "FETCH_DATA", payload: newExpenses });
        return () => {
          unsubscribe()
        }
      });
      
  }, [sortBy,dispatch]);

  const showTotalExpenses = (): any => {
    let totalCosts = state.expenses.reduce(function(sum: IExpense, d: any) {
      return sum + d.amount;
    }, 0);

    return state.expenses.length ? (
      <Statistic.Group horizontal>
        <Statistic>
          <Statistic.Value>{totalCosts}</Statistic.Value>
          <Statistic.Label>SEK</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    ) : (
      ""
    );
  };

  return (
    <Segment>
      <NewExpenseForm />
      <Divider hidden />
      <select value={sortBy} onChange={e => setSortby(e.currentTarget.value)}>
        <option value="TITLE_ASC">Namn (a-z)</option>
        <option value="TITLE_DESC">Namn (z-a)</option>
        <option value="COST_DESC">Pris högt till lågt</option>
        <option value="COST_ASC">Pris låg till högt</option>
      </select>
      <List relaxed>
        <Divider hidden />
        <ExpenseList />
        <Divider />
        {showTotalExpenses()}
      </List>
    </Segment>
  );
}
