import React, { useContext } from "react";
import { Budget } from "../../Contexts/Budget";
import { IBudget } from "../../Interface";
import { Card, Statistic } from "semantic-ui-react";

export default function BudgetInfo() {
  const { state } = useContext(Budget);

  let totalIncome = state.expenses
    .filter((expense: any) => expense.type === "Inkomst")
    .reduce((sum: IBudget, d: any) => {
      return sum + d.amount;
    }, 0);
  let totalExpense = state.expenses
    .filter((expense: any) => expense.type === "Utgift")
    .reduce((sum: IBudget, d: any) => {
      return sum + d.amount;
    }, 0);

  let budgetInformation = [
    {
      id: 1,
      header: "Inkomster",
      meta: "Totala inkomster för hushållet",
      transaction: totalIncome
    },
    {
      id: 2,
      headerValue: "Utgifter",
      metaValue: "Totala utgifter för hushållet",
      transaction: totalExpense
    }
  ];

  return (
    <>
      <Card.Group centered>
        {budgetInformation.map(post => {
          return (
            <Card key={post.id}>
              <Card.Content>
                <Card.Header>{post.header}</Card.Header>
                <Card.Meta>{post.meta}</Card.Meta>
                <Card.Description>
                  <Statistic.Group horizontal>
                    <Statistic>
                      <Statistic.Value>{post.transaction}</Statistic.Value>
                      <Statistic.Label>SEK</Statistic.Label>
                    </Statistic>
                  </Statistic.Group>
                </Card.Description>
              </Card.Content>
            </Card>
          );
        })}
      </Card.Group>
    </>
  );
}
