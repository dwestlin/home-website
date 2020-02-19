import {
  Table,
  Segment,
  Header,
  Card,
  Statistic,
  Grid
} from "semantic-ui-react";
import React from "react";
import ExpenseList from "./ExpenseList";
import { IExpense } from "../../Interface";

export const showTable = () => {
  return (
    <Grid.Column>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Namn</Table.HeaderCell>
            <Table.HeaderCell>Belopp</Table.HeaderCell>
            <Table.HeaderCell>Transaktion</Table.HeaderCell>
            <Table.HeaderCell>Inställningar</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <ExpenseList />
        </Table.Body>
      </Table>
    </Grid.Column>
  );
};

export function getBudgetInfo(state: any) {
  let totalCosts = state.expenses.reduce(function(sum: IExpense, d: any) {
    return sum + d.amount;
  }, 0);
  return (
    <Segment>
      <Header as="h1" textAlign="center">
        Budget information
      </Header>
      <Card.Group centered>
        <Card>
          <Card.Content>
            <Card.Header>Inkomster</Card.Header>
            <Card.Meta>Totala inkomster för hushållet</Card.Meta>
            <Card.Description>
              <Statistic.Group horizontal>
                <Statistic>
                  <Statistic.Value>50000</Statistic.Value>
                  <Statistic.Label>SEK</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Utgifter</Card.Header>
            <Card.Meta>Totala utgifter för hushållet</Card.Meta>
            <Card.Description>
              <Statistic.Group horizontal>
                <Statistic>
                  <Statistic.Value>{totalCosts}</Statistic.Value>
                  <Statistic.Label>SEK</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Card.Description>
          </Card.Content>
        </Card>
        <Card>
          <Card.Content>
            <Card.Header>Inkomst efter utgifter</Card.Header>
            <Card.Meta>Att leva på, efter utgifter</Card.Meta>
            <Card.Description>
              <Statistic.Group horizontal>
                <Statistic>
                  <Statistic.Value>{50000 - totalCosts}</Statistic.Value>
                  <Statistic.Label>SEK</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Card.Description>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  );
}
