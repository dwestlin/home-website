import React from "react";
import { Grid, Divider, Header, Segment, Card } from "semantic-ui-react";

import { Budget } from "../Contexts/BudgetContex";
import { IBudget } from "../Interface";
import app from "../Database/Firebase";

import BudgetForm from "../Components/Budget/BudgetForm";
import BudgetInfo from "../Components/Budget/BudgetInfo";
import BudgetTransaction from "../Components/Budget/BudgetTransaction";

export default function BudgetPage({ history }: any): JSX.Element {
  const { state, dispatch } = React.useContext(Budget);

  React.useEffect(() => {
    const unsubscribe: any = app
      .firestore()
      .collection("expenses")
      .orderBy("type", "asc")
      .get()
      .then(snapshot => {
        const newExpenses = snapshot.docs.map(doc => ({
          id: doc.id,
          name: doc.data().name,
          amount: doc.data().amount,
          type: doc.data().type
        }));
        dispatch({ type: "FETCH_DATA", payload: newExpenses });
        return () => {
          unsubscribe();
        };
      });
  }, [dispatch]);

  return (
    <Segment>
      <Grid.Column column={3}>
        <Header as="h1">Lägg till transaktion</Header>
        <BudgetForm />
        <Divider hidden />
        <Header as="h1" textAlign="center">
          Budget information
        </Header>
        <BudgetInfo />
        <Card.Group>
          {state.expenses.map((exp: IBudget) => (
            <BudgetTransaction key={exp.id} post={exp} />
          ))}
        </Card.Group>
        <Divider hidden />
      </Grid.Column>
    </Segment>
  );
}
