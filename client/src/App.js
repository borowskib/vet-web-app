import React, { Component } from "react";
import "./App.css";
import PigsTable from './components/containers/PigsTable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="container">
        <PigsTable penID="1"/>
      </div>
    );
  }
}

export default App;
