import React, { Component } from "react";
import "./App.css";
import Pens from './components/containers/Pens';
import Test from "./components/containers/Test";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pensResponse: [],
      pen_id: '1'
    };
  }

  render() {
    return (
      <div className="container">
        {<Pens pen_id={this.state.pen_id} />}
      </div>
    );
  }
}

export default App;
