import React, { Component } from "react";
import * as rb from "react-bootstrap";
import axios from "axios";
import "./../../App.css";

class EditPig extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_pen: '',
            pig_number: '',
            pig_gender: '',
            rfid: '',
            pig_shopping_date: '',
            pig_shopping_price: '',
            pig_sale_date: '',
            pig_selling_cost: '',
            pig_death_date: '',
            pigsByNumberResponse: []
        };
    }

    // TODO: after update, you have to change that number (while dev)
    getPigByNumber() {
        fetch(`http://localhost:9000/pigs/1234567823`)
            .then(res => res.json())
            .then(res => this.setState({ pigsByNumberResponse: res }))
            .catch(err => err);
    }

    handleIDPenChange = event => {
        this.setState({ id_pen: event.target.value });
    };

    handlePigNumberChange = event => {
        this.setState({ pig_number: event.target.value });
    };
    handlePigGenderChange = event => {
        this.setState({ pig_gender: event.target.value });
    };
    handleRFIDChange = event => {
        this.setState({ rfid: event.target.value });
    };
    handlePigShoppingDateChange = event => {
        this.setState({ pig_shopping_date: event.target.value });
    };
    handlePigShoppingPriceChange = event => {
        this.setState({ pig_shopping_price: event.target.value });
    };
    handlePigSaleDateChange = event => {
        this.setState({ pig_sale_date: event.target.value });
    };
    handlePigSellingCostChange = event => {
        this.setState({ pig_selling_cost: event.target.value });
    };
    handlePigDeathDateChange = event => {
        this.setState({ pig_death_date: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        axios
            .put(`http://localhost:9000/pigs/1234567823`, {
                id_pen: this.state.id_pen,
                pig_number: this.state.pig_number,
                pig_gender: this.state.pig_gender,
                rfid: this.state.rfid,
                pig_shopping_date: this.state.pig_shopping_date,
                pig_shopping_price: this.state.pig_shopping_price,
                pig_sale_date: this.state.pig_sale_date,
                pig_selling_cost: this.state.pig_selling_cost,
                pig_death_date: this.state.pig_death_date,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        window.location.reload();
    };

    componentDidMount() {
        this.getPigByNumber();
    }

    render() {
        return (
            <div className="edit-pig-form">
                {this.state.pigsByNumberResponse.map(resp => (
                    <div key={`form-group${resp.pig_number}`}>
                        <rb.Form onSubmit={this.handleSubmit}>
                            <rb.FormGroup>
                                <rb.Form>
                                    <rb.Row>
                                        <rb.Col>
                                            <rb.Form.Label>Numer kojca</rb.Form.Label>
                                            <rb.Form.Control
                                                placeholder="* Cyfra od 1 do 6"
                                                type="number"
                                                size="1"
                                                onChange={this.handleIDPenChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>Numer jednostki</rb.Form.Label>
                                            <rb.Form.Control
                                                placeholder="* 10 znaków"
                                                type="number"
                                                onChange={this.handlePigNumberChange}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>Płeć</rb.Form.Label>
                                            <rb.Form.Control
                                                placeholder="Płeć"
                                                as="select"
                                                onChange={this.handlePigGenderChange}
                                                required
                                            >
                                                <option>Samiec</option>
                                                <option>Samica</option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>RFID</rb.Form.Label>
                                            <rb.Form.Control
                                                placeholder="* Nie obowiązkowe"
                                                type="number"
                                                onChange={this.handleRFIDChange}
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>Data zakupu</rb.Form.Label>
                                            <rb.Form.Control
                                                type="date"
                                                onChange={this.handlePigShoppingDateChange}
                                                required
                                            />
                                        </rb.Col>
                                    </rb.Row>
                                    <rb.Row>
                                        <rb.Col>
                                            <rb.Form.Label>Cena zakupu</rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handlePigShoppingPriceChange}
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>Data sprzedaży</rb.Form.Label>
                                            <rb.Form.Control
                                                type="date"
                                                onChange={this.handlePigSaleDateChange}
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>Cena sprzedaży</rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handlePigSellingCostChange}
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label>Data zgonu</rb.Form.Label>
                                            <rb.Form.Control
                                                type="date"
                                                onChange={this.handlePigDeathDateChange}
                                            />
                                        </rb.Col>
                                    </rb.Row>
                                    <br/>
                                    <rb.Button type="submit" variant="success" size="md" block>
                                        Zatwierdź edycję
                                    </rb.Button>
                                </rb.Form>
                            </rb.FormGroup>
                        </rb.Form>
                    </div>
                ))}
            </div>
        );
    }
}

export default EditPig;