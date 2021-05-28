import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    console.log("Counter.js constructor");
    super(props);
    this.state = {
      count: 0,
    };
  }

  inc = () => this.setState({ count: this.state.count + 1 });
  // inc = () => console.log("object");
  dec = () => this.setState({ count: this.state.count - 1 });
  res = () => this.setState({ count: 0 });

  //   componentDidMount() {
  //     console.log("Counter.js componentDidMount");
  //   }

  //   componentWillUnmount() {
  //     console.log("Counter.js componentWillUnmount");
  //   }

  componentDidUpdate() {
    console.log("Counter.js componentDidUpdate");
  }

  render() {
    console.log("Counter.js render");
    return (
      <div>
        <h2>Counter</h2>
        <h3>{this.state.count}</h3>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <button onClick={this.res}>reset</button>
      </div>
    );
  }
}
