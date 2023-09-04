import React from "react";
import { Button, Checkbox, Icon, Table } from "semantic-ui-react";

const TableExampleApprove = () => (
  <Table compact celled definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Registration Date</Table.HeaderCell>
        <Table.HeaderCell>E-mail address</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
        <Table.HeaderCell>Premium Plan</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Checkbox></Checkbox>
        </Table.Cell>
        <Table.Cell>John Lilki</Table.Cell>
        <Table.Cell>September 14, 2013</Table.Cell>
        <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>No</Table.Cell>
        <Table.Cell>No</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer fullWidth>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell colSpan="4">
          <Button
            floated="right"
            icon
            labelPosition="left"
            primary
            size="small"
          >
            <Icon name="user" /> Add User
          </Button>
          <Button size="small">Approve</Button>
          <Button disabled size="small">
            Approve All
          </Button>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
);

export default TableExampleApprove;
