import React, { Component } from "react";
import { Table, Button, Icon } from "semantic-ui-react";

class ProjectsList extends Component {
  render() {
    return (
      <Table celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Progress</Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Project A</Table.Cell>
            <Table.Cell>Uninitiated</Table.Cell>
            <Table.Cell>
              <Button icon labelPosition='left' size='small'>
                <Icon name='edit' /> Edit
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='3'>
              <Button icon labelPosition='left' size='small'>
                <Icon name='plus' /> Add Project
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default ProjectsList;
