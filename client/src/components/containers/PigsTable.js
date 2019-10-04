import React, { Component } from "react";
import "./../../App.css";
import * as rb from "react-bootstrap";
import EditPig from './../forms/EditPig';
import AddPig from './../forms/AddPig';

class PigsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEditPig: false,
            showAddPig: false,
            pigsResponse: [],
        };
        this.toggleEditPig = this.toggleEditPig.bind(this);
        this.toggleAddPig = this.toggleAddPig.bind(this);
    }

    getPigsData() {
        fetch(`http://localhost:9000/pigs-by-pen/1`)
            .then(res => res.json())
            .then(res => this.setState({ pigsResponse: res }))
            .then(console.log(this.state.pig_number))
            .catch(err => err);
    }

    toggleEditPig() {
        const { showEditPig } = this.state;
        this.setState({ showEditPig: !showEditPig });
        this.setState({showAddPig: false});
        console.log(this.state.showEditPig)
    }

    toggleAddPig() {
        const { showAddPig } = this.state;
        this.setState({ showAddPig: !showAddPig });
        this.setState({showEditPig: false});
        console.log(this.state.showAddPig)
    }

    componentDidMount() {
        this.getPigsData();
    }

    render() {
        return (
            <div id="pigs-table-container" >
                        <rb.Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Numer</th>
                                <th>Płeć</th>
                                <th>RFID</th>
                                <th>Data zakupu</th>
                                <th>Cena przy zakupie</th>
                                <th>Data sprzedaży</th>
                                <th>Cena przy sprzedaży</th>
                                <th>Data zgonu</th>
                            </tr>
                            </thead>
                            {this.state.pigsResponse.map(resp => (
                            <tbody>

                            <tr>
                                <td><strong>{resp.pig_number}</strong></td>
                                <td>{resp.pig_gender}</td>
                                <td>{resp.pig_rfid}</td>
                                <td>{resp.pig_shopping_date}</td>
                                <td>{resp.pig_shopping_price}</td>
                                <td>{resp.pig_sale_date}</td>
                                <td>{resp.pig_selling_cost}</td>
                                <td>{resp.pig_death_date}</td>
                            </tr>
                            <rb.ButtonGroup aria-label="Basic example">
                                <rb.Button
                                    variant="primary"
                                    onClick={this.toggleEditPig}
                                >
                                    Edytuj
                                </rb.Button>
                                <rb.Button
                                    variant="danger"
                                >
                                    Usuń
                                </rb.Button>
                                <rb.Button
                                    variant="success"
                                >
                                    Badania
                                </rb.Button>
                            </rb.ButtonGroup>
                            </tbody>
                            ))}
                        </rb.Table>
                <rb.Button
                    variant="primary"
                    onClick={this.toggleAddPig}
                >
                   Dodaj
                </rb.Button>
                {this.state.showAddPig && <AddPig />}
                {this.state.showEditPig && <EditPig />}
            </div>
        );
    }
}

export default PigsTable;
