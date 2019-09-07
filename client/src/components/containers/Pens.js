import React, { Component } from "react";
import "./../../App.css";

class Pens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pensResponse: []
    };
  }

  getPensData() {
    fetch(`http://localhost:9000/`)
      .then(res => res.json())
      .then(res => this.setState({ pensResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.getPensData();
  }

  render() {
    return (
      <div className="main-container">
        {this.state.pensResponse.map(resp => (
            <div className="pen-container" key={resp.group_name}><h1 id="pen-id">{resp.group_name}</h1></div>
        ))}
        <br />
      </div>
    );
  }
}

export default Pens;
