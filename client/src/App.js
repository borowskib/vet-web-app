import React, { Component } from "react";
import "./App.css";
import Pens from './components/containers/Pens';
import Test from "./components/containers/Test";

class App extends Component {
  
  render() {
    return (
      <div className="container">
        {<Pens />}
      </div>
    );
  }
}

export default App;
