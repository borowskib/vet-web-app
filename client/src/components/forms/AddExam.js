import React, { Component } from "react";
import * as rb from "react-bootstrap";
import axios from "axios";
import "./../../App.css";

class AddExam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number_pig: '',
            exam_id: '',
            exam_date: '',
            exam_time: '',
            feces: '',
            tissue: '',
            exam_result: '',
            medicine: '',
            medicine_qty: '',
            medicine_type: '',
            diarrhea: '',
            weight: '',
            temperature: '',
            lameness: '',
            respiratory_system: '',
            skin_changes: '',
            examByNumberResponse: []
        };
    }

    handleNumberPig = event => {
        this.setState({ number_pig: event.target.value });
    };
    handleExamId = event => {
        this.setState({ exam_id: event.target.value});
    };
    handleExamDate = event => {
        this.setState({ exam_date: event.target.value});
    };
    handleExamTime = event => {
        this.setState({ exam_time: event.target.value});
    };
    handleFeces = event => {
        this.setState({ feces: event.target.value});
    };
    handleTissue = event => {
        this.setState({ tissue: event.target.value});
    };
    handleExamResult = event => {
        this.setState({ exam_result: event.target.value})
    };
    handleMedicine = event => {
        this.setState({ medicine: event.target.value})
    };
    handleMedicineQty = event => {
        this.setState({ medicine_qty: event.target.value})
    };
    handleMedicineType = event =>{
        this.setState({ medicine_type: event.target.value})
    };
    handleDiarrhea = event => {
        this.setState({ diarrhea: event.target.value})
    };
    handleWeight = event => {
        this.setState({ weight: event.target.value})
    };
    handleTemperature = event => {
        this.setState({ temperature: event.target.value})
    };
    handleLameness = event => {
        this.setState({ lameness: event.target.value})
    };
    handleRespiratorySystem = event => {
        this.setState({ respiratory_system: event.target.value})
    };
    handleSkinChanges = event =>{
        this.setState({ skin_changes: event.target.value})
    };

    handleSubmit = event => {
        event.preventDefault();
        axios
            .post(`http://localhost:900/examinations`, {
                number_pig: this.state.number_pig,
                exam_id: this.state.exam_id,
                exam_date: this.state.exam_date,
                exam_time: this.state.exam_time,
                feces: this.state.feces,
                tissue: this.state.tissue,
                exam_result: this.state.exam_result,
                medicine: this.state.medicine,
                medicine_qty: this.state.medicine_qty,
                medicine_type: this.state.medicine_type,
                diarrhea: this.state.diarrhea,
                weight: this.state.weight,
                temperature: this.state.temperature,
                lameness: this.state.lameness,
                respiratory_system: this.state.respiratory_system,
                skin_changes: this.state.skin_changes,
            })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });
        window.location.reload();
    };

    render() {
        return (
            <div className="edit-exam-form">
                        <rb.Form onSubmit={this.handleSubmit}>
                            <rb.FormGroup>
                                <rb.Form>
                                    <rb.Row>
                                        <rb.Col>
                                            <rb.Form.Label> Numer świni </rb.Form.Label>
                                            <rb.Form.Control
                                                placeholder="* 10 znaków"
                                                type="number"
                                                onChange={this.handleNumberPig}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Id badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleExamId}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Data badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="date"
                                                onChange={this.handleExamDate}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Czas badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="time"
                                                onChange={this.handleExamTime}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Kał </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleFeces}
                                                required
                                            >
                                            <option> 0 </option>
                                            <option> 1 </option>
                                            <option> 2 </option>
                                            <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Tkanka </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleTissue}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Wynik badania </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleExamResult}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Lek </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleMedicine}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Ilość leku </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleMedicineQty}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Typ leku </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleMedicineType}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Biegunka </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleDiarrhea}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Waga </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleWeight}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Temperatura </rb.Form.Label>
                                            <rb.Form.Control
                                                type="number"
                                                onChange={this.handleTemperature}
                                                required
                                            />
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Kulawizna </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleLameness}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Układ oddechowy </rb.Form.Label>
                                            <rb.Form.Control
                                                as="select"
                                                onChange={this.handleRespiratorySystem}
                                                required
                                            >
                                                <option> 0 </option>
                                                <option> 1 </option>
                                                <option> 2 </option>
                                                <option> 3 </option>
                                            </rb.Form.Control>
                                        </rb.Col>
                                        <rb.Col>
                                            <rb.Form.Label> Zmiany skórne </rb.Form.Label>
                                            <rb.Form.Control
                                                type="text"
                                                onChange={this.handleSkinChanges}
                                                required
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
        )
    }
}

export default AddExam;