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
        <div className="projects__headline">
          <h1>Our Current Projects</h1>
          {this.state.projects.map(project => {
            return (
              <div className="project">
                <h3 className="project__title">{project.name}</h3>
                <span className="project__description">
                  {project.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
