import React, { Component } from "react";
import "./App.css";
import Test from "./components/containers/Test";

class App extends Component {
  
  render() {
    return (
      <div className="container">
        {<Test />}
      </div>
    );
  }
}

export default App;
