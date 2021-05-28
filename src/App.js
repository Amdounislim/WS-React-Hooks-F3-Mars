import React, { Component } from "react";
import "./App.css"
// import Counter from "./components/Counter";
import Counter1 from "./components/Counter1";

export default class App extends Component {
  constructor(props) {
    // console.log("App.js constructor");
    super(props);
    this.state={
      mount:true
    }
  }


  switch=()=>{
    this.setState({
      mount:!this.state.mount
    })
  }

  // componentDidMount() {
  //   console.log("App.js componentDidMount");
  // }

  render() {
    // console.log("App.js render");
    return (
      <div className="App">
        <h1>React LifeCycle Methods</h1>
        {/* <button onClick={this.switch}>Switch</button>
        {this.state.mount?<Counter />:null} */}
        {/* <Counter /> */}
        <Counter1 />
      </div>
    );
  }
}
