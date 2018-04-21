import React, { Component } from "react";
import { Grid, Menu, Segment} from "semantic-ui-react";

import ProjectsList from "./projects/ProjectsList";

class AuthorizedLanding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: "projects"
    };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={2}>
          <Menu fluid vertical tabular>
            <Menu.Item name='projects' active={activeItem === 'projects'} onClick={this.handleItemClick} />
            <Menu.Item name='surveys' active={activeItem === 'surveys'} onClick={this.handleItemClick} />
            <Menu.Item name='leads' active={activeItem === 'leads'} onClick={this.handleItemClick} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={14}>
          <Segment>
            <ProjectsList />
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default AuthorizedLanding;
