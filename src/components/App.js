import React, { Component } from "react";

export default class App extends Component {
  state = {
    score: 0,
  };

  addOne = () => {
    console.log("clicked");
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    return (
      <div>
        <h1>My React App</h1>
        <button onClick={this.addOne}>Add One</button>
        <p> {this.state.score} </p>
      </div>
    );
  }
}
