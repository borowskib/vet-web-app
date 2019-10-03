import React, { Component } from "react";
import "./../../App.css";

class Pens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pensResponse: [],
    };
  }

  getPensData() {
    fetch(`http://localhost:9000/pen`)
      .then(res => res.json())
      .then(res => this.setState({ pensResponse: res }))
      .then(console.log(this.state.pig_id))
      .catch(err => err);
  }

  componentDidMount() {
    this.getPensData();
  }

  render() {
    return (
      <div className="main-container">
        {this.state.pensResponse.map(resp => (
            <div className="pen-container" key={resp.group_name}><h1 id="pen-id">Rozmiar: {resp.pen_area_size}m^2</h1></div>
        ))}
      </div>
    );
  }
}

export default Pens;
