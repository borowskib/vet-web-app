import React, { Component } from "react";
import "./App.css";
import GlobalMeasure from './components/containers/GlobalMeasure';
import Pens from './components/containers/Pens';
import PenMeasure from './components/containers/PenMeasure';
import SinglePigData from './components/containers/SinglePigData';
import SinglePigExamsList from './components/containers/SinglePigExamsList';

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
        <Pens pid={this.state.pen_id}/>
        <GlobalMeasure />
        {/*{<PenMeasure />}*/}
        {/*{<ForageData />}*/}
        {/*{<SinglePigData />}*/}
        {/*{<SinglePigExam />}*/}
      </div>
    );
  }
}

export default App;
