import React from "react";
import { Grid, Divider, Header, Segment, Card } from "semantic-ui-react";

import { Budget } from "../Contexts/Budget";
import { IBudget } from "../Interface";
import db from "../Database/Firestore";

import BudgetForm from "../Components/Budget/BudgetForm";
import BudgetInfo from "../Components/Budget/BudgetInfo";
import BudgetTransaction from "../Components/Budget/BudgetTransaction";

export default function BudgetPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Budget);

  React.useEffect(() => {
    console.log("useEffect ran");
    const unsubscribe: any = db
      .collection("expenses")
      .orderBy("name", "asc")
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
        <Card.Group>
          <Divider hidden />
          {state.expenses &&
            state.expenses.map((exp: IBudget) => (
              <BudgetTransaction key={exp.id} post={exp} />
            ))}
        </Card.Group>
        <Divider hidden />
        <Header as="h1" textAlign="center">
          Budget information
        </Header>
        <BudgetInfo />
      </Grid.Column>
    </Segment>
  );
}