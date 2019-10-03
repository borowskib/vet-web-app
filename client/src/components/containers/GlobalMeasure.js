/*jshint esversion: 6*/
import React, { Component } from "react";

class GlobalMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalMeasure: [],
        };
    }

    getGlobalMeasure() {
      fetch(`http://localhost:9000/global-measures`)
        .then(res => res.json())
        .then(res => this.setState({ globalMeasure: res }))
        .catch(err => err);
    }

    componentDidMount() {
        this.getGlobalMeasure()
    }

    render() {
        return (
            <div className="global-measures-container">
              {this.state.globalMeasure.map(resp => (
                      <h1 id="pen-id" key={resp.global_measure_id}>
                          {resp.global_measure_date},
                          {resp.global_measure_time},
                          {resp.global_nh_three},
                          {resp.global_h_two_s},
                          {resp.global_co_two},
                          {resp.global_temperature},
                          {resp.global_wetness}
                      </h1>
              ))}
            </div>
        );
    }
}

export default GlobalMeasure;
