import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      projects: [],
      actions: []
    };
  }

  componentDidMount() {
    this.getProjects();
    this.getActions();
  }

  getProjects = () => {
    axios.get("http://localhost:9000/projects").then(response => {
      this.setState({ projects: response.data });
    });
  };
  getActions = () => {
    axios.get("http://localhost:9000/actions").then(response => {
      this.setState({ actions: response.data });
    });
  };

  render() {
    return (
      <div className="App">
        <div className="projects">
          <h1>Projects</h1>
          {this.state.projects.map(project => {
            return <h3 key={project.id}>{project.name}</h3>;
          })}
        </div>
        <div className="actions">
          <h1>Actions</h1>
          {this.state.actions.map(action => {
            return <h3 key={action.id}>{action.name}</h3>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
